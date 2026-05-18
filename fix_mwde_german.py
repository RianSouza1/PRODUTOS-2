import os

file_path = "mw-de/index.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

replacements = {
    "500 Step-by-Step Woodworking Projects": "1200 Schritt-für-Schritt Metallbearbeitungsprojekte",
    "Clear, full-color instructions": "Klare, vollfarbige Anleitungen",
    "that eliminate confusion and mistakes": "die Verwirrung und Fehler beseitigen",
    "Tool tutorials for beginners": "Werkzeug-Tutorials für Anfänger",
    "— no expensive equipment required": "— keine teure Ausrüstung erforderlich",
    "Smart shortcuts and expert tips": "Schlaue Abkürzungen und Experten-Tipps",
    "to avoid common beginner errors": "um typische Anfängerfehler zu vermeiden",
    "Money-making woodworking ideas": "Geldverdienen mit Metallbearbeitungs-Ideen",
    "you can start from home": "die Sie von zu Hause aus starten können",
    "Step-by-step project guides": "Schritt-für-Schritt Projektanleitungen",
    "to help you build with confidence from start to finish": "die Ihnen helfen, von Anfang bis Ende mit Selbstvertrauen zu bauen",
    "Wood selection, measurements, and safety essentials": "Materialauswahl, Maße und Sicherheitsgrundlagen",
    "explained simply": "einfach erklärt",
    "And with <strong>70% RABATT today</strong>, it’s the perfect time to finally start your woodworking journey.": "Und mit <strong>70% RABATT heute</strong> ist es die perfekte Zeit, um endlich Ihre Reise in die Metallbearbeitung zu beginnen.",
    "even if you’re a complete beginner.": "auch wenn Sie ein blutiger Anfänger sind.",
    "Order now </strong>and save 70% before this limited-time deal disappears.": "Bestellen Sie jetzt </strong>und sparen Sie 70%, bevor dieses zeitlich begrenzte Angebot verschwindet.",
    
    # Also fix "Holz" to "Metall" in the rest of the German text for Metalworking!
    "Holzbearbeitung": "Metallbearbeitung",
    "Holzbearbeitungskreationen": "Metallbearbeitungskreationen",
    "Holzprojekten": "Metallprojekten",
    "Holzstücke": "Metallstücke",
    "Holzbearbeitung Bibliothek": "Metallbearbeitung Bibliothek",
    "Holzbearbeitung für Anfänger": "Metallbearbeitung für Anfänger",
    "Holzbearbeitung ist zu schwer": "Metallbearbeitung ist zu schwer"
}

for old_text, new_text in replacements.items():
    content = content.replace(old_text, new_text)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("German fixes applied to mw-de/index.html")
