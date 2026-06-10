import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add a giant red banner to prove the file is being read
banner = '<div style="position:fixed; top:0; left:0; width:100%; height:80px; background:red; color:white; z-index:999999; font-size:40px; text-align:center; font-weight:bold; line-height:80px;">TESTE DO CHAT - SE VOCÊ VÊ ISSO, O ARQUIVO ESTÁ CORRETO!</div>'

if "TESTE DO CHAT" not in content:
    content = content.replace("<body", f"{banner}\n<body")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Banner inserted!")
else:
    print("Banner already exists!")
