import re
text = open('index.html', 'r', encoding='utf-8').read()
matches = re.findall(r'src="(https://prime-library.com/wp-content/uploads/[^"]+)"', text)
for m in set(matches):
    print(m)
