import sys

def replace_links(file_path, old_link, new_link):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if old_link in content:
        content = content.replace(old_link, new_link)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated links in {file_path}")
    else:
        print(f"Old link not found in {file_path}")

old_cart_link = "https://prime-library.com/?add-to-cart=189489"

replace_links("WW/index.html", old_cart_link, "https://pay.hotmart.com/E105830985F?checkoutMode=10")
replace_links("mw/index.html", old_cart_link, "https://pay.hotmart.com/P105840222D?checkoutMode=10")

