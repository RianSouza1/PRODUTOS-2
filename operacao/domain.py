"""OfferVault: shared operational records, SQLite transactions and personal-link access."""
import argparse
import contextlib
import datetime as dt
import hashlib
import http.cookies
import ipaddress
import json
import mimetypes
import math
import os
import re
import secrets
import sqlite3
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

COOKIE = 'offervault_session'
SESSION_SECONDS = 7 * 86400
OWNER_EMAIL = 'estudoscaso3@gmail.com'
STATUSES = ('todo', 'doing', 'blocked', 'review', 'done')
PHASES = ('production', 'pilot', 'expansion', 'paused')
LAUNCH_STATES = ('preparing', 'ready', 'testing', 'running', 'paused')
PRODUCTION = [('offer','Definir oferta'), ('names','Definir nomes'), ('covers','Criar capas'), ('site_images','Criar imagens do site'), ('copy','Escrever copy'), ('sales_page','Produzir página de vendas'), ('books','Produzir books')]
TRANSLATION = [('full_translation','Traduzir integralmente a base em inglês'), ('language_review','Revisar a tradução completa')]
PUBLICATION = [('shopify_product','Cadastrar produto na Shopify'), ('shopify_page','Cadastrar página na Shopify'), ('checkout_review','Conferir checkout e entrega'), ('facebook_campaign','Preparar campanha no Facebook')]
FIELDS = {
 'niches': {'name','category','notes','archived'},
 'offers': {'name','description','owner_id','pilot_target','phase'},
 'languages': {'name','wave','notes','owner_id','member_url'},
 'shops': {'name','domain','notes','active'},
 'launches': {'status','product_url','page_url','checkout_url','campaign_url','campaign_name','product_id','variant_id','notes','owner_id'},
 'gamma_accounts': {'name','email','workspace_url','notes','active'},
 'deliverables': {'title','kind','status','gamma_id','gamma_url','final_url','edition','notes','owner_id'},
 'tasks': {'title','status','owner_id','due_date','notes','blocked_reason','result_url'},
}
TABLES = tuple(FIELDS) + ('users','niche_gamma')
TABLES+=('niche_cycles','migrations')
NICHES_STAGES=('idea','research','approved','production','ready','testing','active','expansion','paused','archived')
FIELDS['categories']={'name','color'}
FIELDS['niches'].update({'category_id','description','audience','owner_id','priority','stage','tags','cover_url','commercial_model'})
TABLES+=('categories',)
TABLES+=('trello_sources',)
FIELDS['languages'].update({'deliverables_url','creatives_url','site_images_url','operational_status','facebook'})

class Problem(Exception):
    def __init__(self, message, status=400):
        self.message, self.status = message, status

def token_hash(token):
    return hashlib.sha256(token.encode()).hexdigest()

def identifier():
    return str(uuid.uuid4())

def now():
    return int(time.time())

def text_value(value, maximum=4000):
    if not isinstance(value,str) or len(value)>maximum:
        raise Problem('Texto inválido ou muito longo.')
    return value.strip()

def url_value(value):
    value=text_value(value,2000)
    if value and (urllib.parse.urlsplit(value).scheme not in ('http','https') or not urllib.parse.urlsplit(value).netloc):
        raise Problem('Informe um link completo começando com https://.')
    return value


SCHEMA=Path(__file__).with_name('schema.sql').read_text()
