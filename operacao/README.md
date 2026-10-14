# OfferVault — primeira entrega operacional

Central online da operação. O nicho é a entrada principal: sua matriz de idiomas, acesso Gamma, pasta Drive e histórico ficam dentro de seu workspace.

## Decisões confirmadas com a equipe

- Cada ciclo de um nicho possui uma base em inglês, produzida uma vez.
- As demais versões recebem tradução integral e revisão, sem repetir a criação da oferta.
- Um idioma pode operar simultaneamente em várias Shopifys. As lojas e as contas Meta são marcadas por caixas de seleção, sem um campo separado de Facebook. As tarefas de publicação são independentes por loja.
- A matriz também permite marcar várias contas de anúncios por idioma. O cadastro das contas fica em Configurações; nome e ID Meta identificam a conta, sem guardar credenciais nem alterar anúncios.
- Os idiomas da matriz são separados em 15 principais e secundários. **Completar lista** acrescenta as opções faltantes do catálogo de 38 idiomas usados na operação, sem modificar os idiomas existentes. Os novos começam Em preparação, com tradução e revisão pendentes e sem lojas ou contas marcadas. O inglês continua sendo a única base original.
- Situação manual do idioma: **Em preparação**, **Ativo** ou **Desativado**. Ativo indica que atende às expectativas; desativado indica que não atendeu.
- Migrações são permitidas apenas para idiomas ativos. Reutilizam a tradução e criam tarefas de publicação no destino com responsável.
- **Novo desenvolvimento** cria um ciclo zerado apenas para aquele nicho. O anterior é preservado no histórico e na exportação de dados.
- **Drive & acessos** tem um único campo para a pasta correspondente ao nicho, com opções de salvar o link e abrir o Drive. Os arquivos permanecem no Drive e usam as permissões dele.
- Métricas, ROAS e análise de testes serão acrescentados posteriormente. Não há coleta automática de dados, decisão automática ou exigência de resultados numéricos nesta entrega.

## Implementado

Menu do nicho: Visão geral, Base em inglês, Matriz de idiomas, Drive & acessos, Contas Gamma e Atividade.

Os indicadores e formulários não usam bloqueios. O responsável pode concluir em lote as sete etapas das bases já publicadas em **Configurações → Concluir bases**, quando houver etapas pendentes. A atualização preserva os resultados dos idiomas, as traduções, tarefas adicionais, responsáveis e materiais; ciclos novos sem publicação registrada começam pendentes.

Fundação: acesso individual sem senha, controle de acesso no servidor, papéis de responsável e membro, banco relacional persistente, tema escuro padrão e claro opcional, sidebar recolhível, dashboard, categorias, cadastro completo de nichos, busca global e configurações.

Operação: produção da base inglesa, tradução e revisão, atribuição de responsáveis, prazos, checklist editável, um link Drive e um campo de texto Gamma por nicho, matriz e situação dos idiomas dentro do nicho, múltiplas Shopifys, migrações atribuídas, reinício de ciclos, histórico de alterações e exportação JSON.

Lojas iniciais: Best Library, New Library e Store Today. Os domínios são preenchidos pela equipe. Nature é o nicho inicial informado pelo usuário. Seus idiomas reais podem ser cadastrados manualmente ou importados de checklists revisados do Trello. Não são inventadas campanhas, métricas ou resultados.

## Importação do Trello

O responsável pode abrir **Configurações → Importar arquivo** e enviar um snapshot JSON no formato `offervault-trello-v1`. Como alternativa ao envio, pode colar o conteúdo em **Dados JSON**. O arquivo contém `niches`, cada um com `name`, `cards` (`id` e `url`) e `languages` (`code`, `name` e `complete`). Os dados operacionais da equipe não são incluídos no repositório.

A importação cria ou integra cada nicho pela correspondência de nome, mantendo uma única base inglesa. Itens concluídos vinculam o idioma à Shopify escolhida. A equipe escolhe se eles também significam Facebook em operação e resultado positivo. Publicação não implica resultado positivo: na opção **Publicado na Shopify e no Facebook; resultado a confirmar**, o idioma conserva situação **Em preparação** até decisão manual. Itens pendentes não são tratados como idiomas que falharam.

Os cartões de origem ficam dentro do nicho. IDs dos cartões e o conteúdo importado impedem duplicações e preservam edições manuais em tentativas repetidas. Ciclos reiniciados não recebem dados antigos. Cada nicho é importado em uma transação; um lote parcialmente concluído pode continuar com o mesmo arquivo. Não há sincronização contínua nem escrita no Trello. Drive, Gamma, responsáveis e URLs de produtos não são inferidos quando ausentes na origem.

## Executar localmente

Requer Python 3.9 ou posterior e a biblioteca cryptography para criptografar o campo Gamma. O frontend não exige build.

```sh
python3 -m venv ../offervault-venv
. ../offervault-venv/bin/activate
python3 -m pip install -r requirements.txt
mkdir -p ../offervault-data
python3 -B - <<'PY'
from pathlib import Path
from cryptography.fernet import Fernet
key = Path('../offervault-data/encryption.key')
if not key.exists():
    key.write_bytes(Fernet.generate_key())
    key.chmod(0o600)
PY
export OFFERVAULT_ENCRYPTION_KEY="$(cat ../offervault-data/encryption.key)"
python3 -B server.py --database ../offervault-data/local.sqlite3 --web web --origin http://127.0.0.1:8766 --port 8766
```

Abra `http://127.0.0.1:8766/operacao/`.

Para criar um **responsável de demonstração somente no banco local**, em outro terminal com o mesmo ambiente virtual e OFFERVAULT_ENCRYPTION_KEY:

```sh
python3 -B - <<'PY'
from store import Store
import uuid
store = Store('../offervault-data/local.sqlite3')
_, owner = store.bootstrap('Demonstração local', 'local@example.test')
result = store.command(owner, {'command_id': str(uuid.uuid4()), 'action': 'rotate_link', 'id': owner['id']})
print('http://127.0.0.1:8766/operacao/#acesso=' + result['access_token'])
PY
```

Esse comando emite um link local de desenvolvimento. Não executar nem copiar links de demonstração para produção.

```sh
python3 -B -m unittest discover -s tests -v
node --check web/app.js
```

## Estrutura

```text
operacao/
  server.py        HTTP, sessões, bootstrap autenticado e respostas
  store.py         Transações, regras operacionais, CRUD e histórico
  domain.py        Campos, estados, templates e validações
  trello_import.py Importação revisada por nicho e proteção contra duplicações
  ad_ops.py        Contas de anúncios por idioma e consultas revisadas da Utmify
  language_catalog.py Idiomas principais/secundários e inclusão de opções pendentes
  schema.sql       Modelo relacional até a versão 3
  web/             Interface, estilos e navegação
  tests/           Testes de acesso, conflitos e regras operacionais
  ARCHITECTURE.md   Modelo, contratos e próximas fases
.github/operacao/  Instalação, Nginx, serviços e backups
```

## Consulta da Utmify e contas Meta

O responsável abre **Configurações → Importar da Utmify** e cola uma consulta revisada no formato `offervault-utmify-v1`. Cada nicho recebe seus idiomas, Facebook ON, as contas onde foram identificados, campanhas de origem e observações para revisão. A mesma conta pode receber vários idiomas e um idioma pode estar em várias contas. As caixinhas são editáveis pela equipe e preservam a seleção das demais contas quando uma é alterada. As cinco contas ficam cadastradas; a matriz começa destacando as duas em uso na consulta. As demais podem ser disponibilizadas em Configurações quando a equipe precisar.

A importação reutiliza a base inglesa e os idiomas existentes, adiciona nichos ausentes e registra a data e a cobertura da consulta dentro do nicho. Uma consulta confirma veiculação, sem atribuir uma Shopify nem aprovar resultados. A fonte de 13/10/2026 cobre cinco contas habilitadas; as 42 contas fora da consulta não são usadas para inferir que um idioma está desligado. Dados da equipe e ciclos reiniciados permanecem preservados, e a repetição da mesma consulta não desfaz ajustes manuais. Não há sincronização automática nem alterações na Meta ou Utmify.

Temas claro e escuro usam superfícies neutras em branco e preto. Os resultados são destacados em azul (Em preparação), amarelo (A confirmar), verde (Ativo) e vermelho (Desativado), com contraste próprio em cada tema. A escolha do tema fica salva no navegador e pode ser trocada na barra superior. A matriz contém as lojas e as contas Meta, mantendo o resultado separado. Marcar uma conta indica onde o idioma está rodando; o resumo conta os idiomas com ao menos uma conta marcada.

## Acesso da equipe

O responsável entra inicialmente usando a sessão de administrador do Ciclo40 no mesmo domínio. O servidor valida essa sessão no endpoint fixo do Ciclo40 e aceita somente a identidade proprietária já existente. Depois, o OfferVault tem sessões próprias e links próprios.

Em **Equipe & acessos**, cadastrar cada pessoa e guardar seu link. Todos os membros podem editar os dados operacionais. Somente o responsável pode criar, substituir ou desativar acessos. A substituição revoga sessões anteriores; a sessão atual do responsável é renovada quando ele gera seu próprio link.

Os links são credenciais pessoais. O banco guarda seus hashes, nunca o texto do link. O fragmento é removido da URL após o login. A sessão é HttpOnly, SameSite=Lax e Secure em produção, com validade de sete dias. Não há tokens de infraestrutura no frontend.

O acesso Gamma é um único texto por nicho e ciclo. O servidor criptografa esse texto com Fernet antes de gravar no banco. A chave fica em `/etc/offervault-operacao.env`, com acesso restrito ao administrador do servidor e ao serviço isolado. A equipe autenticada consulta e edita o campo ao abri-lo; o texto é omitido do estado geral, exportações e auditoria. Um novo desenvolvimento começa com esse campo vazio e mantém o acesso antigo no histórico.

## Publicação

Destino: `https://storeinfocus.com/operacao/`.

Workflow `deploy-operacao.yml` verifica o código, envia somente as pastas desta aplicação e instala o serviço na VPS existente. Não publica nem modifica temas Shopify.

Código privado: `/opt/offervault-operacao`. Banco privado: `/var/lib/offervault-operacao/data.sqlite3`. Nginx expõe somente a interface e encaminha `/operacao/api/` para o servidor restrito a 127.0.0.1. Reinício automático pelo systemd e inicialização após reboot.

Backup SQLite consistente diário em `/var/backups/offervault-operacao/daily`, restrito ao administrador do servidor, com retenção de 30 dias. Cada deploy também salva o código/configuração anteriores e uma cópia consistente do banco existente. O instalador restaura a configuração se a validação falhar. O banco não é substituído em deploys. A chave de criptografia também recebe backup privado; para restaurar o Gamma, é necessário restaurar a chave correspondente ao banco.
