/**
 * Stoelgymnastiek voor Senioren — Ledenomgeving (Nederlands)
 */

const APP_DATA = {
    config: {
        brandName: "Stoelgymnastiek voor Senioren",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vragen over toegang (Stoelgymnastiek voor Senioren)",
        emailBodyTemplate: "Hallo ondersteuningsteam! Ik wil graag hulp vragen met betrekking tot mijn toegang tot de ledenomgeving van Stoelgymnastiek voor Senioren.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "1. Zittende Knieheffing",
            category: "benen",
            categoryName: "Benen & Heupen",
            duration: "0:30 min",
            target: "Quadriceps & Heupbuigers",
            badgeColor: "#0284c7",
            description: "Versterkt de voorzijde van de dijen en activeert de heupen voor gemakkelijker opstaan uit de stoel en stabieler lopen.",
            animType: "knee_lift",
            steps: [
                "Zit rechtop op het voorste deel van de stoel met de voeten plat op de grond op heupbreedte.",
                "Til één knie rustig en gecontroleerd omhoog tot comfortabele heuphoogte (zonder achterover te leunen).",
                "Houd 1 seconde vast aan de top, laat het been zachtjes zakken en herhaal met het andere been."
            ],
            tip: "Houd de rug lang en de buikspieren licht aangespannen. Vermijd schokkerige bewegingen."
        },
        {
            id: "v2",
            title: "2. Kuitheffen & Enkelpompen",
            category: "benen",
            categoryName: "Benen & Heupen",
            duration: "0:25 min",
            target: "Kuitspieren & Enkelmobiliteit",
            badgeColor: "#0284c7",
            description: "Stimuleert de bloedsomloop in de onderbenen, vermindert vochtophoping en versterkt de stabiliteit van de enkels.",
            animType: "calf_raise",
            steps: [
                "Plaats beide voeten plat op de vloer, recht onder de knieën.",
                "Duw krachtig op de bal van de voeten en til de hielen zo hoog mogelijk op.",
                "Laat de hielen zakken en til vervolgens de tenen op (hielen blijven op de grond). Wissel vloeiend af."
            ],
            tip: "Ideaal om ook tussendoor tijdens het zitten te herhalen om stijve benen te voorkomen."
        },
        {
            id: "v3",
            title: "3. Beenspreiding & Sluiting",
            category: "benen",
            categoryName: "Benen & Heupen",
            duration: "0:30 min",
            target: "Buitenste Heupspieren & Dijbenen",
            badgeColor: "#0284c7",
            description: "Versterkt de heupabductoren en bilspieren, essentieel voor zijwaartse balans en stabiliteit bij het stappen.",
            animType: "hip_abduction",
            steps: [
                "Zit rechtop met de knieën in een hoek van 90 graden en de handen rustend op de dijen.",
                "Beweeg één been rustig zijwaarts naar buiten tot u een lichte activatie in de heup voelt.",
                "Plaats de voet gecontroleerd terug naar het midden en wissel daarna af met het andere been."
            ],
            tip: "Beweeg alleen het been; houd het bovenlichaam en de andere knie stabiel in het midden."
        },
        {
            id: "v4",
            title: "4. Bicep Curls Zittend",
            category: "bovenlichaam",
            categoryName: "Bovenlichaam & Armen",
            duration: "0:30 min",
            target: "Biceps & Onderarmspieren",
            badgeColor: "#0d9488",
            description: "Versterkt de armkracht die nodig is voor het tillen van voorwerpen, boodschappentassen en dagelijkse handelingen.",
            animType: "bicep_curl",
            steps: [
                "Laat de armen ontspannen langs het lichaam hangen met de handpalmen naar voren gericht.",
                "Buig beide ellebogen en breng de handen gecontroleerd richting de schouders.",
                "Knijp aan de top licht in de spieren en laat de armen in 2 seconden rustig terugzakken."
            ],
            tip: "Houd de ellebogen dicht bij de zij en beweeg uitsluitend de onderarmen."
        },
        {
            id: "v5",
            title: "5. Schouderrollen & Mobiliteit",
            category: "bovenlichaam",
            categoryName: "Bovenlichaam & Armen",
            duration: "0:25 min",
            target: "Schouders & Nek-Trapezius",
            badgeColor: "#0d9488",
            description: "Maakt het schoudergewricht los, verlicht opgebouwde spierspanning in de nek en verbetert de lichaamshouding.",
            animType: "shoulder_roll",
            steps: [
                "Zit ontspannen met de armen losjes langs de stoel.",
                "Til de schouders rustig op naar de oren, rol ze naar achteren en laat ze gecontroleerd zakken.",
                "Voer 5 cirkels naar achteren uit en wissel daarna af met 5 rustige cirkels naar voren."
            ],
            tip: "Adem diep in wanneer de schouders omhoog gaan en adem rustig uit bij het laten zakken."
        },
        {
            id: "v6",
            title: "6. Borst Openen & Bovenrug Strekken",
            category: "bovenlichaam",
            categoryName: "Bovenlichaam & Armen",
            duration: "0:35 min",
            target: "Borstkas & Tussenribspieren",
            badgeColor: "#0d9488",
            description: "Corrigeert een gebogen zithouding, vergroot de longcapaciteit en rekt de voorzijde van het bovenlichaam.",
            animType: "chest_opener",
            steps: [
                "Breng de ellebogen ter hoogte van de schouders in een hoek van 90 graden (kandelarenhouding).",
                "Beweeg de ellebogen rustig naar achteren en trek de schouderbladen zachtjes naar elkaar toe.",
                "Houd deze open borstpositie 3 seconden vast en breng de armen weer rustig naar voren."
            ],
            tip: "Strek de nek niet te ver naar achteren; houd de kin horizontaal en de blik naar voren."
        },
        {
            id: "v7",
            title: "7. Polscirkels & Vingergrijpkracht",
            category: "bovenlichaam",
            categoryName: "Bovenlichaam & Armen",
            duration: "0:20 min",
            target: "Polsgewrichten & Handkracht",
            badgeColor: "#0d9488",
            description: "Onderhoudt handvaardigheid, voorkomt stijve vingergewrichten en versterkt de noodzakelijke grijpkracht.",
            animType: "wrist_circles",
            steps: [
                "Strek de armen ontspannen op borsthoogte voor u uit.",
                "Draai langzame cirkels met de polsen, 5 keer met de klok mee en 5 keer tegen de klok in.",
                "Knijp beide handen krachtig tot een vuist en spreid daarna alle vingers wijd uit."
            ],
            tip: "Uitstekend om dagelijks te herhalen bij beginnende stijfheid of artrose in de handen."
        },
        {
            id: "v8",
            title: "8. Zittende Romprotatie",
            category: "romp",
            categoryName: "Romp & Houding",
            duration: "0:30 min",
            target: "Schuine Buikspieren & Wervelkolom",
            badgeColor: "#d97706",
            description: "Behoudt de natuurlijke draaibaarheid van de wervelkolom, belangrijk voor omkijken en dagelijkse bewegingen.",
            animType: "torso_twist",
            steps: [
                "Kruis de armen losjes voor de borst met de handen op de tegenovergestelde schouders.",
                "Draai het bovenlichaam rustig vanuit de taille naar rechts, zover als comfortabel voelt.",
                "Keer terug naar het midden, pauzeer 1 tel en draai rustig naar links."
            ],
            tip: "Houd de heupen en knieën recht naar voren; laat alleen het bovenlichaam soepel draaien."
        },
        {
            id: "v9",
            title: "9. Bekkenkanteling & Houdingscontrole",
            category: "romp",
            categoryName: "Romp & Houding",
            duration: "0:30 min",
            target: "Diepe Romp & Onderrug",
            badgeColor: "#d97706",
            description: "Activeert de diepe stabiliserende buikspieren en ontlast de lendenwervels bij langdurig zitten.",
            animType: "pelvic_tilt",
            steps: [
                "Plaats de handen op de heupen of dijen en zit met een rechte rug.",
                "Kantel het bekken naar voren (maak de onderrug licht hol) en open de borstkas.",
                "Kantel het bekken naar achteren (maak de rug zachtjes bol) en trek de navel licht in."
            ],
            tip: "Maak een vloeiende, zachte golfbeweging zonder forceren in de rug."
        },
        {
            id: "v10",
            title: "10. Zijwaartse Rompbuiging",
            category: "romp",
            categoryName: "Romp & Houding",
            duration: "0:30 min",
            target: "Flankspieren & Wervelkolom",
            badgeColor: "#d97706",
            description: "Rekt en versterkt de zijkant van de romp voor meer flexibiliteit bij het reiken naar voorwerpen.",
            animType: "side_bend",
            steps: [
                "Laat beide armen ontspannen langs de zijkanten van de stoel hangen.",
                "Laat de rechterhand rustig richting de vloer zakken terwijl u het bovenlichaam zijwaarts buigt.",
                "Kom rustig omhoog naar het midden en buig gecontroleerd naar de linkerzijde."
            ],
            tip: "Blijf met beide zitbotten stevig op de stoel; leun niet naar voren of naar achteren."
        },
        {
            id: "v11",
            title: "11. Zacht Kinnikken & Nekflexie",
            category: "nek",
            categoryName: "Nek & Mobiliteit",
            duration: "0:20 min",
            target: "Diepe Nekspieren & Houding",
            badgeColor: "#6366f1",
            description: "Verbetert de stand van het hoofd boven de wervelkolom en ontlast overbelaste nek- en achterhoofdspieren.",
            animType: "chin_tuck",
            steps: [
                "Kijk recht vooruit met een ontspannen kaak en schouders.",
                "Trek de kin zachtjes horizontaal naar achteren (alsof u een lichte dubbele kin maakt).",
                "Houd deze positie 3 seconden vast en ontspan weer rustig naar de beginstand."
            ],
            tip: "Kijk niet naar beneden tijdens het intrekken van de kin; houd de ooghoogte gelijk."
        },
        {
            id: "v12",
            title: "12. Zachte Zijwaartse Nekrek",
            category: "nek",
            categoryName: "Nek & Mobiliteit",
            duration: "0:25 min",
            target: "Nekspieren & Hals",
            badgeColor: "#6366f1",
            description: "Geeft directe verlichting bij een stijve nek door tocht, lezen of langdurig tv-kijken.",
            animType: "neck_tilt",
            steps: [
                "Zit ontspannen rechtop met de schouders laag.",
                "Beweeg het rechteroor rustig richting de rechterschouder totdat u een lichte, aangename rek voelt.",
                "Houd 5 seconden vast, keer terug naar het midden en herhaal aan de linkerkant."
            ],
            tip: "Til de schouder niet op naar het oor; laat het oor rustig naar de schouder zakken."
        }
    ],

    books: [
        {
            id: "b1",
            title: "Stoelgymnastiek voor Senioren — Boek 1 van 3",
            description: "Gerichte oefeningen in zittende positie voor benen, armen en romp — voor meer vrijheid en zelfvertrouwen in het dagelijks leven. Een complete gids met spierversterkende oefeningen zonder vloeroefeningen of zware gewichten.",
            badgeText: "Krachttraining",
            badgeColor: "#0284c7",
            features: [
                "Training voor benen, kuiten, dijen, heupen en bilspieren in zittende positie",
                "Versterking van armen, schouders, bovenrug en grijpkracht op een veilige manier",
                "Veilige en effectieve oefeningen voor meer vrijheid en zelfvertrouwen in het dagelijks leven"
            ],
            downloadUrl: "materials/CHAIR-1-NL.pdf",
            coverImage: "assets/covers/ch_IMG1_nl.png",
            buttonText: "Download Krachttraining (PDF)"
        },
        {
            id: "b2",
            title: "Stoelgymnastiek & Mobiliteit voor Senioren — Boek 2 van 3",
            description: "Zachte zittende rekoefeningen voor soepelheid, houding, stijve gewrichten en gemakkelijkere dagelijkse bewegingen. Verbeter uw mobiliteit in uw eigen tempo zonder overbelasting van de gewrichten.",
            badgeText: "Mobiliteit & Rekken",
            badgeColor: "#0d9488",
            features: [
                "Zachte zittende rekoefeningen voor meer flexibiliteit en een betere lichaamshouding",
                "Verlichting van stijfheid in nek, schouders, rug en heupen",
                "Oefenen in uw eigen tempo met de focus op welzijn en comfortabele bewegingen"
            ],
            downloadUrl: "materials/CHAIR-2-NL.pdf",
            coverImage: "assets/covers/ch_IMG1_nl.png",
            buttonText: "Download Mobiliteit (PDF)"
        },
        {
            id: "b3",
            title: "Zittend Oefenprogramma — 28 Dagen — Boek 3 van 3",
            description: "10 minuten per dag voor kracht, soepelheid, beweeglijkheid en zelfvertrouwen. Een compleet 28-dagen programma opgebouwd in eenvoudige, stapsgewijze sessies voor dagelijks welzijn.",
            badgeText: "28-Dagen Programma",
            badgeColor: "#d97706",
            features: [
                "Compleet 28-dagen programma met ~10 minuten dagelijkse zittende sessies",
                "Drie aanpasbare niveaus: makkelijker, standaard en met lichte uitdaging",
                "Combineert kracht, soepelheid en balans in een overzichtelijke dagelijkse routine"
            ],
            downloadUrl: "materials/CHAIR-3-NL.pdf",
            coverImage: "assets/covers/ch_IMG1_nl.png",
            buttonText: "Download 28-Dagen Programma (PDF)"
        }
    ],

    otherProducts: []
};
