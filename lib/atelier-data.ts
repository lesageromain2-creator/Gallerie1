/** Liens « Google Maps » (démo) → page d’information + redirection LSDEV */
export const DEMO_GOOGLE_MAPS_PATH = "/demo-google-maps" as const;
/** Mentions presse / partenaires fictifs (démo) → page « site test » + LSDEV */
export const DEMO_SITE_TEST_PATH = "/demo-site-test" as const;

export const ATELIER_REVIEWS = [
  { authorName: "Léa B.", rating: 5 as const, text: "Atelier d'exception. Marie Laurent transmets sa passion avec générosité. Une adresse incontournable à Paris.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
  { authorName: "Marc F.", rating: 5 as const, text: "Créations uniques et ateliers inspirants. Un lieu où l'art contemporain prend tout son sens.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
  { authorName: "Émilie R.", rating: 5 as const, text: "Belle découverte dans le 6e. Peinture, techniques mixtes et accueil chaleureux.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
  { authorName: "Antoine L.", rating: 5 as const, text: "Un atelier lumineux et créatif. Les œuvres de Marie m'ont immédiatement séduit.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
  { authorName: "Camille D.", rating: 5 as const, text: "Peinture contemporaine à son meilleur. Ateliers accessibles, œuvres magnifiques.", source: "Google Maps" as const, url: DEMO_GOOGLE_MAPS_PATH },
];

export const ATELIER_MEDIAS = [
  { name: "L'Œil du 6e", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/292524/E7E5E4?text=L%27Oeil+6e", text: "Atelier Lumière : une adresse rare pour la peinture contemporaine dans le 6e." },
  { name: "Arts & Quartiers", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/44403C/FAFAF9?text=Arts+%26+Quartiers", text: "Marie Laurent ouvre les portes de son atelier — reportage." },
  { name: "Revue LUMIÈRE", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/1C1917/D6D3D1?text=Revue+LUMIERE", text: "« Lumière » : le magazine des ateliers parisiens à suivre." },
  { name: "Paris Créatif", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/57534E/FEF3C7?text=Paris+Creatif", text: "Workshops et créations uniques : notre coup de cœur du mois." },
  { name: "Collectif Trait", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/0C0A09/E7E5E4?text=Collectif+Trait", text: "Entretien avec l'artiste — techniques mixtes et matière." },
  { name: "Toiles & Matières", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/78716C/FFFBEB?text=Toiles+%26+Materes", text: "Série sur les ateliers d'art du Rive Gauche." },
  { name: "Encre Vive", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/292524/FDE68A?text=Encre+Vive", text: "Coup de projecteur sur les ateliers ouverts au public." },
  { name: "Saison des Arts", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/44403C/ECFDF5?text=Saison+des+Arts", text: "Agenda culturel : Atelier Lumière, incontournable du 6e." },
  { name: "Métropole Peinture", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/1C1917/A8A29E?text=Metropole+Peinture", text: "Peinture actuelle : les lieux où il faut aller à Paris." },
  { name: "Carte Blanche", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/57534E/FEF9C3?text=Carte+Blanche", text: "Chronique — l'atelier comme lieu de rencontre." },
  { name: "Le Petit Culturel", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/0C0A09/D6D3D1?text=Petit+Culturel", text: "Week-end artistique : découverte de l'Atelier Lumière." },
  { name: "Atelier Mag", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/78716C/FFF7ED?text=Atelier+Mag", text: "Numéro spécial « ateliers d'artistes » — p. 42-45." },
  { name: "Trait d'Union", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/292524/E7E5E4?text=Trait+d%27Union", text: "Art contemporain et transmission : portrait." },
  { name: "La Tribune des Arts", url: DEMO_SITE_TEST_PATH, logoSrc: "https://placehold.co/120x40/44403C/FAFAF9?text=Tribune+Arts", text: "Les coups de cœur de la rédaction — sélection parisienne." },
  { name: "Google Maps", url: DEMO_GOOGLE_MAPS_PATH, logoSrc: "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_48dp.png", text: "⭐ 5/5 — Atelier d'art · Paris 6e" },
];

export const GOOGLE_PLACE_URL = DEMO_GOOGLE_MAPS_PATH;

export const PROCESS_ETAPES = [
  { step: 1, title: "Inspiration et croquis", short: "Étude du sujet, recherches graphiques et composition." },
  { step: 2, title: "Préparation des supports", short: "Toile, papier ou bois — préparation du fond." },
  { step: 3, title: "Première couche picturale", short: "Pose des couleurs de base et structure." },
  { step: 4, title: "Superposition et textures", short: "Ajout de matière, glacis et effets." },
  { step: 5, title: "Finitions et patine", short: "Derniers ajustements, vernis éventuel." },
  { step: 6, title: "Signature et archivage", short: "Signature, documentation photographique." },
];
