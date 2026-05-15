import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replacements for the Offer Justification section
html = html.replace('Why Does This Offer Sound Too Good To Be True?', 'Why does this offer sound too good to be true?')
html = html.replace('We get it.<br><br>Three practical metalworking guides plus 1,200+ exact metal plans for the price of one isn’t something you see every day.', 
                    'We get it — three bestselling books for the price of one isn’t something you see every day.')
html = html.replace('Here’s the simple truth:<br><br>For a limited time, we’re running a special digital bundle event to help more people start building strong, useful, professional-looking metal projects without wasting time, money, or materials trying to figure everything out alone.', 
                    'Here’s the simple truth: once a year, around this season, we run a special Reader Event to thank our audience and make our most popular collections easier to access.')
html = html.replace('Because this is a digital bundle, we can skip retail markups, printing costs, and shipping fees — and offer the entire collection, normally $59.70, for only $19.90 today.', 
                    'Because we manage everything directly — from printing to fulfillment — we can skip retail markups and offer the entire bundle (normally $59.70) for only $19.90.')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Reverted the offer justification copy successfully!")
