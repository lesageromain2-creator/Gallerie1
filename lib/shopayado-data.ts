import { DEMO_GOOGLE_MAPS_PATH, DEMO_SITE_TEST_PATH } from "./atelier-data";

export const SHOPAYADO_REVIEWS = [
  { authorName: "Marie L.", rating: 5 as const, text: "Galerie et atelier hors du commun. Estampes et chimères fascinantes, une adresse unique à Lyon.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
  { authorName: "Pierre D.", rating: 5 as const, text: "Vrai coup de cœur. Créations singulières, accueil chaleureux, univers très personnel.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
  { authorName: "Sophie M.", rating: 5 as const, text: "Atelier et galerie comme on en voit peu. Estampes artisanales et curiosités à découvrir.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
  { authorName: "Thomas B.", rating: 5 as const, text: "Une pépite sur les pentes de la Croix-Rousse. Jolis dessins et univers décalé.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
  { authorName: "Claire V.", rating: 5 as const, text: "Belle découverte : galerie d'art et atelier d'estampes dans un cadre intimiste.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
];

export const SHOPAYADO_MEDIAS = [
  { name: "Les Pentes Culture", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/292524/E7E5E4?text=Pentes+Culture", text: "Shopayado : estampes, chimères et atelier d'exception sur la Croix-Rousse." },
  { name: "Rhône Art Weekly", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/44403C/FAFAF9?text=Rhône+Art", text: "Notre coup de cœur lyonnais — galerie-atelier à ne pas manquer." },
  { name: "Presqu'île Curieux", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/1C1917/D6D3D1?text=Presqu%27ile+Curieux", text: "Artisanat d'art et univers décalé : reportage." },
  { name: "Croix-Rousse Mag", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/57534E/FEF3C7?text=Croix-Rousse+Mag", text: "Les adresses créatives du 1er arrondissement." },
  { name: "Estampes & Cie", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/0C0A09/E7E5E4?text=Estampes+%26+Cie", text: "Numéro spécial sérigraphie et tirages limités." },
  { name: "Lyon Bien Vivre", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/78716C/FFFBEB?text=Lyon+Bien+Vivre", text: "Où trouver de l'art singulier à Lyon." },
  { name: "Atelier Découverte", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/292524/FDE68A?text=Atelier+Decouverte", text: "Visites d'ateliers : le Shopayado ouvre ses portes." },
  { name: "Trait de Rhône", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/44403C/ECFDF5?text=Trait+de+Rhone", text: "Chroniques des arts graphiques en région." },
  { name: "Fourche Curieuse", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/1C1917/A8A29E?text=Fourche+Curieuse", text: "La scène indépendante vue par nos lecteurs." },
  { name: "Encre Lyonnaise", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/57534E/FEF9C3?text=Encre+Lyonnaise", text: "Galerie-atelier : estampes et chimères." },
  { name: "My Presqu'île (démo)", url: DEMO_SITE_TEST_PATH, logoSrc: "/images/carousel/mypresquile-logo.png", text: "Atelier et galerie – Estampes artisanales – Jolis dessins. Taxidermiste de chimères." },
  { name: "Mapcarta (démo)", url: DEMO_SITE_TEST_PATH, logoSrc: "/images/carousel/mapcarta-logo.png", text: "Le Shopayado est une galerie d'art à Lyon (Rhône). À proximité : galerie Folies Douces, Amphithéâtre des Trois Gaules." },
  { name: "Google Maps", url: DEMO_GOOGLE_MAPS_PATH, logoSrc: "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_48dp.png", text: "⭐ 5/5 — Galerie d'art · Lyon 1er" },
];

export const GOOGLE_PLACE_URL = DEMO_GOOGLE_MAPS_PATH;

export const PROCESS_ETAPES = [
  { step: 1, title: "Préparation du visuel", short: "Création ou choix du visuel, préparation des films." },
  { step: 2, title: "Report sur l'écran", short: "Émulsion photosensible sur le cadre." },
  { step: 3, title: "Insolation", short: "Exposition à la lumière pour insoler l'écran." },
  { step: 4, title: "Lavage de l'écran", short: "Rinçage pour révéler les zones à imprimer." },
  { step: 5, title: "Réglage et encrage", short: "Positionnement du support, choix des encres." },
  { step: 6, title: "Tirage", short: "Impression à la racle, séchage des tirages." },
];
