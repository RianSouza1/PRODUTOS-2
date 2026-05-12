import re
import os

file_path = "systematic-theology/index.html"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove dns-prefetch for GTM
content = re.sub(r"<link rel='dns-prefetch' href='//www.googletagmanager.com' />\n?", "", content)

# Remove GTM kit JS before
content = re.sub(r'<script id="gtmkit-js-before" data-cfasync="false" data-nowprocket="" data-cookieconsent="ignore">.*?</script>\n?', '', content, flags=re.DOTALL)

# Remove GTM kit woocommerce script
content = re.sub(r'<script src="[^"]*gtm-kit/assets/integration/woocommerce.js[^"]*"[^>]*></script>\n?', '', content)

# Remove GTM kit datalayer
content = re.sub(r'<script id="gtmkit-datalayer-js-before" data-cfasync="false" data-nowprocket="" data-cookieconsent="ignore">.*?</script>\n?', '', content, flags=re.DOTALL)

# Remove Google Tag Manager script
content = re.sub(r'<!-- Google Tag Manager -->\s*<script>.*?</script>\s*<!-- End Google Tag Manager -->\n?', '', content, flags=re.DOTALL)

# Remove Google Tag Manager noscript
content = re.sub(r'<!-- Google Tag Manager \(noscript\) -->\s*<noscript><iframe.*?</iframe></noscript>\s*<!-- End Google Tag Manager \(noscript\) -->\n?', '', content, flags=re.DOTALL)

# Remove any Facebook tracking script if exists (none observed but just in case)
content = re.sub(r'<script type="text/javascript" async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>\n?', '', content)
content = re.sub(r'<script type="text/javascript" async="" src="https://sst.atlas-library.com/gtm.js[^"]*"></script>\n?', '', content)
content = re.sub(r'<script async="" src="https://sst.atlas-library.com/[^"]*"></script>\n?', '', content)

utmify_scripts = """<!-- UTMify Tracker -->
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-subids
  async
  defer
></script>
<!-- UTMify Pixel -->
<script>
  window.pixelId = "69c734f2a7f3af58104edc35";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
</script>
</head>"""

content = content.replace("</head>", utmify_scripts)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed old tracking and added UTMify scripts.")
