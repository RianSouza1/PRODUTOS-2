/**
 * Survival & Bushcraft — Korisničko područje (Croatian)
 * Kompletna serija outdoor & preživljavanje
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zahtjev za pristup (Survival & Bushcraft)",
        emailBodyTemplate: "Poštovani timu za podršku,\n\ntrebam pomoć s pristupom svojem korisničkom području za Survival & Bushcraft.\n\nMoje ime je: ______",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Vodič za preživljavanje u divljini za početnike — Izdanje 2026.",
            description: "Voda, vatra, sklonište, davanje signala za pomoć i osnovne tehnike u prirodi. Praktični priručnik za sve koji provode vrijeme na otvorenom — planinare, kampere, lovce ili ljubitelje divljine.",
            badgeText: "Glavni priručnik",
            badgeColor: "#6B7C44",
            features: [
                "Kako pronaći, pročistiti i osigurati vodu u divljini",
                "Paljenje vatre, izgradnja skloništa i slanje signala za pomoć",
                "U praksi provjerene tehnike prilagođene početnicima"
            ],
            downloadUrl: "materials/SURVIVOR-1-HR.pdf",
            coverImage: "assets/covers/sur_IMG1_hr.png",
            buttonText: "Preuzmi glavni priručnik"
        },
        {
            id: "b2",
            title: "Tehnike života u divljini i prirodi — Izdanje 2026.",
            description: "Oprema, čvorovi, orijentacija, bivouac tehnike i mudrost preživljavanja u netaknutoj prirodi. Ključne vještine potrebne za kretanje i samostalan život u šumi s povjerenjem i sigurnošću.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Ovladavanje alatima, ključni čvorovi i tehnike orijentacije",
                "Postavljanje kampa/bivaka i samostalan život u prirodi",
                "Upute korak-po-korak za početnike bez ikakvog prethodnog iskustva"
            ],
            downloadUrl: "materials/SURVIVOR-2-HR.pdf",
            coverImage: "assets/covers/sur_IMG1_hr.png",
            buttonText: "Preuzmi Bonus #1"
        },
        {
            id: "b3",
            title: "Pripravnost za hitne situacije i prva pomoć za vas i vašu obitelj — Izdanje 2026.",
            description: "Torba za preživljavanje na 72 sata, zaštita od strujnog udara, sigurna evakuacija i kako zaštititi svoju obitelj. Sve što prosječno kućanstvo treba znati kako bi bilo spremno za neočekivane izvanredne situacije.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Pravilan popis stvari za hitnu torbu za 72 sata (go-bag)",
                "Priprema za nestanke struje, evakuaciju i sigurnost doma",
                "Osnove prve pomoći ključne za obitelji u kriznim situacijama"
            ],
            downloadUrl: "materials/SURVIVOR-3-HR.pdf",
            coverImage: "assets/covers/sur_IMG1_hr.png",
            buttonText: "Preuzmi Bonus #2"
        }
    ],

    otherProducts: []
};
