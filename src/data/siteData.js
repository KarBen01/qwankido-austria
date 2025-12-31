// src/data/siteData.js

// Import all logos
import wienThachSuLogo from '../assets/images/logos/wien-thach-su.png';
import pandasLogo from '../assets/images/logos/pandas.png';
import wienLongHoLogo from '../assets/images/logos/wien-long-ho.png';
import wienLongTienLogo from '../assets/images/logos/wien-long-tien.png';
import hanhPhucLongLogo from '../assets/images/logos/hanh-phuc-long.png';
import wienThuyXaLogo from '../assets/images/logos/wien-thuy-xa.png';
import wienDuongLangLogo from '../assets/images/logos/wien-duong-lang.png';
import wienerNeustadtLogo from '../assets/images/logos/wiener-neustadt.png';

// Import all hero backgrounds
import wienThachSuBg from '../assets/images/hero-backgrounds/wien-thach-su.jpg';
import pandasBg from '../assets/images/hero-backgrounds/pandas.jpg';
import wienLongHoBg from '../assets/images/hero-backgrounds/wien-long-ho.jpg';
import wienLongTienBg from '../assets/images/hero-backgrounds/wien-long-tien.jpeg';
import hanhPhucLongBg from '../assets/images/hero-backgrounds/hanh-phuc-long.jpg';
import wienThuyXaBg from '../assets/images/hero-backgrounds/wien-thuy-xa.jpg';
import wienDuongLangBg from '../assets/images/hero-backgrounds/wien-duong-lang.jpg';

// Import all trainer images
import florinFragaImg from '../assets/images/trainer/Florin-Fraga.jpeg';
import mateiCapatuImg from '../assets/images/trainer/Matei-Capatu.png';
import muhammadKabbaniImg from '../assets/images/trainer/Muhammad-Kabbani.jpg';
import florianHuberImg from '../assets/images/trainer/Florian-Huber.jpg';
import yusufKabbaniImg from '../assets/images/trainer/Yusuf-Kabbani.jpg';
import ninoMozgaFragaImg from '../assets/images/trainer/Nino-Mozga-Fraga.jpg';
import davidKarafiatImg from '../assets/images/trainer/David-Karafiat.jpg';
import lorenzHinterbergerImg from '../assets/images/trainer/Lorenz-Hinterberger.jpg';
import tinaKollerImg from '../assets/images/trainer/Tina-Koller.jpg';
import sabineHuberImg from '../assets/images/trainer/Sabine-Huber.jpg';
import abduKabbaniImg from '../assets/images/trainer/Abdu-Kabbani.jpg';
import benjaminKarafiatImg from '../assets/images/trainer/Benjamin-Karafiat.png';
import raphaelGagglImg from '../assets/images/trainer/Rafael-Gaggl.jpg';
import yasminGabrielImg from '../assets/images/trainer/Yasmin-Gabriel.png';
import juliaMarquetantImg from '../assets/images/trainer/Julia-Marquetant.jpg';
import patrickTanznerImg from '../assets/images/trainer/Patrick-Tanzner.jpeg';
import danielUlrichImg from '../assets/images/trainer/Daniel-Ulrich.jpeg';
import angeloFragaImg from '../assets/images/trainer/Angelo-Fraga.jpeg';
import dennisStoianImg from '../assets/images/trainer/Dennis-Stoian.jpeg';
import dominikTanznerImg from '../assets/images/trainer/Dominik-Tanzner.jpeg';
import adaHamblinImg from '../assets/images/trainer/Ada-Hamblin.jpeg';
import silviaHallerImg from '../assets/images/trainer/Silvia-Haller-Praetorius.jpeg';
import karinRitzmeierImg from '../assets/images/trainer/Karin-Ritzmeier-Stocker.jpeg';
import renateWinklbauerImg from '../assets/images/trainer/Renate-Winklbauer.jpeg';
import mandySteinbergerImg from '../assets/images/trainer/Mandy-Steinberger.jpeg';

// PDF path from public folder
const tamTheSilberclubPdf = '/documents/tam-the-silberclub.pdf';

export const CLUBS = [
    {
        id: "wien-thach-su",
        name: "Wien Thach Su",
        district: "1220 Wien",
        address: "Wulzendorfstraße 1",
        locationDetail: "Turnsaal der Volksschule",
        googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Wulzendorfstraße+1+1220+Wien",
        daysSummary: "Mo, Do, Fr, Sa",
        bankName: "Qwan Ki Do Aspern",
        iban: "AT78 4211 0418 3257 0000",
        days: [
            {day: "Montag", time: "17:00 – 17:50", group: "Kindertraining ab 7 J."},
            {day: "Montag", time: "18:00 – 18:50", group: "Kindertraining ab 7 J."},
            {day: "Mittwoch", time: "17:30 – 18:20", group: "Kindertraining ab 7 J."},
            {day: "Donnerstag", time: "18:00 – 20:00", group: "Qwan Ki Do (ab 13 J. / Erwachsene)"},
            {day: "Freitag", time: "17:00 – 17:50", group: "QKD Pandas (4-6 J., Vorschule)"},
            {day: "Freitag", time: "18:00 – 19:00", group: "Selbstverteidigung & QKD 40+"},
            {day: "Samstag", time: "09:00 – 09:50", group: "Tam The (Erwachsene)"},
            {day: "Samstag", time: "10:00 – 10:50", group: "Kindertraining (offene Altersgruppe)"},
            {day: "Samstag", time: "11:00 – 11:50", group: "Kindertraining (offene Altersgruppe)"},
            {day: "Samstag", time: "12:00 – 12:50", group: "Kindertraining (offene Altersgruppe)"},
            {day: "Samstag", time: "14:00 – 15:50", group: "Qwan Ki Do (ab 13 J. / Erwachsene)"},
            {day: "Samstag", time: "16:00 – 16:45", group: "Trainerausbildung / Schiedsrichter"}
        ],
        // Standard Preise für Thach Su
        prices: {
            kids: [
                {label: "1x / Woche", value: "110€"},
                {label: "2x / Woche", value: "150€"},
                {label: "3x / Woche", value: "190€"}
            ],
            adults: [
                {label: "1x / Woche", value: "145€"},
                {label: "2x / Woche", value: "190€"},
                {label: "3x / Woche", value: "235€"}
            ],
            info: "*Stand 2025. Spätzahlgebühr: +10€"
        },
        trainer: "Minh Sư Florin Fraga",
        audience: "Kinder, Jugend & Erwachsene",
        logo: wienThachSuLogo,
        image: wienThachSuBg,
        description: "Der größte Verein in Wien (seit 2006) mit einem breiten Angebot von den 'Pandas' für die Kleinsten bis hin zum Wettkampftraining und Tam The."
    },
    {
        id: "qkd-panda",
        name: "QKD Pandas",
        district: "1220 Wien",
        address: "Wulzendorfstraße 1",
        locationDetail: "Turnsaal",
        googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Wulzendorfstraße+1+1220+Wien",
        daysSummary: "Freitag",
        bankName: "Qwan Ki Do Aspern",
        iban: "AT78 4211 0418 3257 0000",
        days: [
            {day: "Freitag", time: "17:00 – 17:50", group: "QKD Pandas (4-6 J.)"}
        ],
        prices: {
            kids: [
                {label: "1x / Woche", value: "105€"}
            ],
            adults: [],
            info: "*Stand 2025. Spätzahlgebühr: +10€"
        },
        trainer: "Team",
        audience: "Kinder (4-6 Jahre)",
        logo: pandasLogo,
        image: pandasBg,
        description: "Spielerisches Training speziell für unsere Kleinsten (4-6 Jahre) zur Förderung der Motorik und Koordination."
    },
    {
        id: "wien-long-ho",
        name: "Wien Long Ho",
        district: "1220 Wien",
        address: "Langobardenstraße 135",
        locationDetail: "Turnsaal der Volksschule",
        googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Langobardenstraße+135+1220+Wien",
        daysSummary: "Freitag",
        bankName: "Qwan Ki Do Long Ho",
        iban: "AT51 4211 0418 3257 0001",
        days: [
            {day: "Freitag", time: "14:00 – 14:50", group: "Qwan Ki Do (Kinder)"},
            {day: "Freitag", time: "15:00 – 15:50", group: "Qwan Ki Do (Jugend/Erw.)"}
        ],
        // Spezifische Preistabelle für diesen Verein
        prices: {
            kids: [
                {label: "1x / Woche", value: "110€"}
            ],
            adults: [
                {label: "1x / Woche", value: "110€"}
            ],
            info: "*Stand 2025. Spätzahlgebühr: +10€"
        },
        trainer: "Minh Sư Florin Fraga",
        audience: "Kinder, Jugend & Erwachsene",
        logo: wienLongHoLogo,
        image: wienLongHoBg,
        description: "Unser Verein in der Donaustadt besteht seit 2005. Wir bieten traditionelles Training für Kinder, Jugendliche und Erwachsene an."
    },
    {
        id: "wien-long-tien",
        name: "Wien Long Tien",
        district: "1170 Wien",
        address: "Knollgasse 4-6",
        locationDetail: "Turnsaal",
        googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Knollgasse+4-6+1170+Wien",
        daysSummary: "Mittwoch",
        bankName: "Qwan Ki Do Aspern",
        iban: "AT78 4211 0418 3257 0000",
        days: [
            {day: "Mittwoch", time: "14:05 – 14:55", group: "Kindertraining (ab 7 J.)"},
            {day: "Mittwoch", time: "15:05 – 15:55", group: "Kindertraining (ab 7 J.)"}
        ],
        prices: {
            kids: [
                {label: "1x / Woche", value: "110€"}
            ],
            adults: [],
            info: "*Stand 2025. Spätzahlgebühr: +10€"
        },
        trainer: "Minh Sư Florin Fraga",
        audience: "Kinder (ab 7 Jahre)",
        logo: wienLongTienLogo,
        image: wienLongTienBg,
        description: "Qwan Ki Do Training im 17. Bezirk (Hernals). Wir fördern Bewegung und Koordination für Kinder in einer motivierenden Umgebung."
    },
    {
        id: "hanh-phuc-long",
        name: "Hanh Phuc Long",
        district: "1220 Wien",
        address: "Wulzendorfstraße 1",
        locationDetail: "Spezialtraining",
        googleMapsLink: "",
        daysSummary: "Auswahlkader",
        bankName: "",
        iban: "",
        days: [],
        prices: null,
        trainer: "Minh Sư Florin Fraga",
        audience: "Auswahlkader",
        logo: hanhPhucLongLogo,
        image: hanhPhucLongBg,
        description: "Das Training im Verein Hanh Phuc Long ist für vom technischen Leiter Österreichs ausgewählte SchülerInnen gedacht. Hier werden besonders engagierten SchülerInnen spezielle Techniken außerhalb des regulären Angebots gezeigt."
    },
    {
        id: "wien-thuy-xa",
        name: "Wien Thuy Xa",
        district: "1220 Wien",
        address: "",
        locationDetail: "",
        googleMapsLink: "",
        daysSummary: "Pausiert",
        bankName: "",
        iban: "",
        days: [],
        prices: null, // Keine Preise anzeigen
        trainer: "Minh Sư Florin Fraga",
        audience: "Pausiert",
        redirectTo: "wien-thach-su", // Redirect to Thach Su
        logo: wienThuyXaLogo,
        image: wienThuyXaBg,
        description: "⚠️ Derzeit findet kein eigenes Training statt. Interessenten sind herzlich eingeladen, bei Wien Thach Su mitzutrainieren."
    },
    {
        id: "wien-duong-lang",
        name: "Wien Duong Lang",
        district: "1220 Wien",
        address: "Wagramer Straße 224b",
        locationDetail: "Gymnastikraum",
        googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Wagramer+Straße+224b+1220+Wien",
        daysSummary: "Schul-intern",
        bankName: "Qwan Ki Do Aspern",
        iban: "AT78 4211 0418 3257 0000",
        days: [],
        prices: null,
        trainer: "Minh Sư Florin Fraga",
        audience: "Schul-intern",
        logo: wienDuongLangLogo,
        image: wienDuongLangBg,
        description: "Dieses Training findet im Rahmen einer schulischen Kooperation statt und ist nicht öffentlich zugänglich."
    },
    {
        id: "wiener-neustadt",
        name: "Wiener Neustadt",
        district: "2700 Wr. Neustadt",
        address: "Ungargasse 29",
        locationDetail: "Ungarbad",
        googleMapsLink: "",
        daysSummary: "Di, Do",
        // WICHTIG: Externe Weiterleitung
        externalLink: "https://www.qwankido-wienerneustadt.at/",
        days: [],
        prices: null,
        trainer: "Minh Sư Florin Fraga",
        audience: "Kinder, Jugend & Erwachsene",
        logo: wienerNeustadtLogo,
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1000&auto=format&fit=crop",
        description: "Unser Standort in Niederösterreich."
    }
];

export const TRAINERS = [
    {
        id: 1,
        name: "Minh Su Florin Fraga",
        rank: "6. Dang/staatl. Geprüfter Instructor",
        role: "Technischer Direktor",
        bio: [
            "nat./internat. Schiedsrichter",
            "TAM THE TRAINER",
            "Co Vo Dao",
            "SCHWARZGURTE in mehreren traditionellen Holz und scharfen Waffen",
            "SCHWARZGURTE in mehreren Spezial Waffen",
            "PHONG VE/SELBSTVERTEIDIGUNG höchstes Level-Meisterprüfung seit 2016",
            "Jiu Jitsu 1. Dan"
        ],
        image: florinFragaImg,
        highlight: true
    },
    {
        id: 2,
        name: "Vo Su Matei Capatu",
        rank: "3. Dang",
        role: "Sekretariat & Trainer",
        image: mateiCapatuImg
    },
    {
        id: 3,
        name: "Vo Su Muhammad Kabbani",
        rank: "4. Dang",
        role: "Trainer Thach Su",
        image: muhammadKabbaniImg
    },
    {
        id: 4,
        name: "Vo Su Florian Huber",
        rank: "3. Dang",
        role: "Kassier & Trainer Long Ho",
        image: florianHuberImg
    },
    {
        id: 5,
        name: "Vo Su Yusuf Kabbani",
        rank: "3. Dang",
        role: "Trainer Thach Su",
        image: yusufKabbaniImg
    },
    {
        id: 6,
        name: "Vo Su Nino Mozga-Fraga",
        rank: "3. Dang",
        role: "Trainer Thach Su",
        image: ninoMozgaFragaImg
    },
    {
        id: 7,
        name: "Vo Su David Karafiat",
        rank: "3. Dang",
        role: "Trainer Thuy Xa",
        image: davidKarafiatImg
    },
    {
        id: 8,
        name: "Huan Su Lorenz Hinterberger",
        rank: "2. Dang",
        role: "Trainer Thach Su",
        image: lorenzHinterbergerImg
    },
    {
        id: 9,
        name: "Huan Su Tina Koller",
        rank: "2. Dang",
        role: "Trainer Thach Su",
        image: tinaKollerImg
    },
    {
        id: 10,
        name: "Huan Su Sabine Huber",
        rank: "2. Dang",
        role: "Sekretär & Trainer Long Ho",
        image: sabineHuberImg
    },
    {
        id: 11,
        name: "Huan Su Abdu Kabbani",
        rank: "2. Dang",
        role: "Trainer Thuy Xa",
        image: abduKabbaniImg
    },
    {
        id: 12,
        name: "Huan Su Benjamin Karafiat",
        rank: "2. Dang",
        role: "Trainer Thach Su",
        image: benjaminKarafiatImg
    },
    {
        id: 13,
        name: "Huan Su Raphael Gaggl",
        rank: "2. Dang",
        role: "Trainer Am Duong",
        image: raphaelGagglImg
    },
    {
        id: 14,
        name: "Huan Su Yasmin Gabriel",
        rank: "1. Dang",
        role: "Trainer Am Duong",
        image: yasminGabrielImg
    },
    {
        id: 15,
        name: "Huan Su Julia Marquetant",
        rank: "1. Dang",
        role: "Trainer Am Duong",
        image: juliaMarquetantImg
    },
    {
        id: 16,
        name: "Huan Su Patrick Tanzner",
        rank: "1. Dang",
        role: "Trainer Am Duong",
        image: patrickTanznerImg
    },
    {
        id: 17,
        name: "Huan Su Daniel Ulrich",
        rank: "1. Dang",
        role: "Trainer Thach Su",
        image: danielUlrichImg
    },
    {
        id: 18,
        name: "Huan Su Angelo Fraga",
        rank: "Schwarzgurt",
        role: "Trainer Thach Su",
        image: angeloFragaImg
    },
    {
        id: 19,
        name: "Huan Su Dennis Stoian",
        rank: "Schwarzgurt",
        role: "Trainer Thach Su",
        image: dennisStoianImg
    },
    {
        id: 20,
        name: "Huan Su Dominik Tanzner",
        rank: "Schwarzgurt",
        role: "Trainer Am Duong",
        image: dominikTanznerImg
    },
    {
        id: 21,
        name: "Huan Su Ada Hamblin",
        rank: "Schwarzgurt",
        role: "Trainer Thach Su",
        image: adaHamblinImg
    },
    {
        id: 22,
        name: "Huan Su Silvia Haller-Prätorius",
        rank: "Schwarzgurt",
        role: "Trainer Thach Su",
        image: silviaHallerImg
    },
    {
        id: 23,
        name: "Huan Su Karin Ritzmeier-Stocker",
        rank: "Schwarzgurt",
        role: "Trainer Thach Su",
        image: karinRitzmeierImg
    },
    {
        id: 24,
        name: "Huan Su Renate Winklbauer",
        rank: "Schwarzgurt",
        role: "Trainer",
        image: renateWinklbauerImg
    },
    {
        id: 25,
        name: "Huan Su Mandy Steinberger",
        rank: "Schwarzgurt",
        role: "Trainer Thach Su",
        image: mandySteinbergerImg
    }
];

// ============================================================================
// NEWSLETTER CONTENT SYSTEM
// ============================================================================

// Helper Functions for Date Filtering
// Parse DD.MM.YYYY or ISO date (YYYY-MM-DD) to Date object
export const parseEventDate = (dateStr) => {
    if (!dateStr) return new Date();
    if (dateStr.includes('-')) return new Date(dateStr); // ISO format
    const [day, month, year] = dateStr.split('.');
    return new Date(year, month - 1, day);
};

// Check if event is upcoming (today or future)
export const isUpcoming = (dateStr) => {
    if (!dateStr) return true;
    const eventDate = parseEventDate(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate >= today;
};

// Sort by date ascending
export const sortByDate = (items) => {
    return [...items].sort((a, b) =>
        parseEventDate(a.date) - parseEventDate(b.date)
    );
};

// Get upcoming items only
export const getUpcomingEvents = () => {
    return sortByDate(EVENTS.filter(event => isUpcoming(event.date)));
};

export const getUpcomingTrainingChanges = () => {
    return sortByDate(TRAINING_CHANGES.filter(change => isUpcoming(change.date || change.dates?.[0])));
};

export const getUpcomingImportantDates = () => {
    return sortByDate(IMPORTANT_DATES.filter(date => isUpcoming(date.date)));
};

export const getValidHighlights = () => {
    return HIGHLIGHTS.filter(h => !h.validUntil || isUpcoming(h.validUntil));
};

// ============================================================================
// 1. HIGHLIGHTS - Important Announcements
// ============================================================================
export const HIGHLIGHTS = [
    {
        id: 1,
        type: 'success',
        title: "Erfolge bei Internationaler Meisterschaft Brüssel! 🇧🇪",
        shortText: "Unser Team hat in Brüssel 6x Gold, 4x Silber und 3x Bronze erkämpft! • 13.-14. Dezember 2025",
        details: [
            {label: "Gold", value: "6x 1. Platz", icon: "Trophy"},
            {label: "Silber", value: "4x 2. Platz", icon: "Trophy"},
            {label: "Bronze", value: "3x 3. Platz", icon: "Trophy"}
        ],
        fullText: "Unglaubliche Leistungen unseres Junioren-Nationalteams in Brüssel! 🇦🇹\n\nEinzelplatzierungen:\n\n🥇 GOLD (6x)\n• Alex: 1. Platz Thao Quyen\n• Clemens: 1. Platz Thao Quyen + 1. Platz Giao Dao\n• Emely: 1. Platz Thao Quyen + 1. Platz Giao Dao\n• Florian: 1. Platz Giao Dao\n\n🥈 SILBER (4x)\n• Levi: 2. Platz Thao Quyen + 2. Platz Giao Dao\n• Leo: 2. Platz Thao Quyen\n• Johannes: 2. Platz Giao Dao\n\n🥉 BRONZE (3x)\n• Flora: 3. Platz Thao Quyen\n• Lara: 3. Platz Thao Quyen\n• Sven: 3. Platz Thao Quyen\n\nWir sind unglaublich stolz auf euch! 😍",
        images: [
            "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop"
        ],
        validUntil: "2026-02-28"
    },
    {
        id: 2,
        type: 'info',
        title: "Tam The Silberclub",
        shortText: "Gesundheitstraining für Generation 50+",
        details: [
            {label: "Zielgruppe", value: "Ab 50 Jahren", icon: "Users"},
            {label: "Fokus", value: "Mobilität & Gesundheit", icon: "Star"}
        ],
        fullText: "Der Tam The Silberclub richtet sich speziell an Menschen über 50, die ihre Mobilität erhalten und verbessern möchten. Mit sanften Bewegungsformen aus dem Tam The fördern wir Gesundheit, Balance und Wohlbefinden in einer entspannten Atmosphäre.",
        link: tamTheSilberclubPdf,
        images: [
            "https://images.unsplash.com/photo-1544367563-12123d8d5e64?q=80&w=800&auto=format&fit=crop"
        ],
        validUntil: "2026-12-31"
    },
    {
        id: 3,
        type: 'info',
        title: "Anzüge bestellt",
        shortText: "Neue Anzüge sind bestellt - Ausschreibung folgt",
        details: [
            {label: "Status", value: "Bestellt", icon: "Package"},
            {label: "Info", value: "Ausschreibung folgt", icon: "Info"}
        ],
        fullText: "Die neuen Anzüge sind bestellt. Sobald sie eingetroffen sind, folgt die Ausschreibung mit allen Größen und Bestellinformationen.",
        validUntil: "2026-02-28"
    }
];

// ============================================================================
// 2. EVENTS - Competitions, Camps, Special Events
// ============================================================================
export const EVENTS = [
    {
        id: 1,
        title: "Trainingsstart 2026",
        date: "2026-01-07",
        day: "Mittwoch",
        location: {
            name: "Alle Vereine",
            address: "Reguläre Standorte"
        },
        type: "first-training",
        category: "Verein",
        description: "Erstes Training im neuen Jahr 2026"
    }
];

// ============================================================================
// 3. TRAINING_CHANGES - Schedule Changes, Cancellations, Special Times
// ============================================================================
export const TRAINING_CHANGES = [];

// ============================================================================
// 4. IMPORTANT_DATES - Deadlines, Payment Opportunities, Special Dates
// ============================================================================
export const IMPORTANT_DATES = [];

// ============================================================================
// 5. COMING_SOON - Previews of Future Events
// ============================================================================
export const COMING_SOON = [
    {
        id: 1,
        title: "Sommercamp Yspertal 2026",
        category: "Trainingslager",
        status: "registration-opens-soon",
        description: "Für Kinder und Erwachsene. Anmeldung folgt in Kürze.",
        icon: "Tent"
    }
];