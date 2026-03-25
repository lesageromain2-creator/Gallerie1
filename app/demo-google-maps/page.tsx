import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Démonstration — Atelier Lumière",
  description: "Ce site est une démo. Découvrez LSDEV pour vos projets réels.",
  robots: "noindex, follow",
};

export default function DemoGoogleMapsPage() {
  return (
    <div className="min-h-[70vh] max-w-2xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-heading text-3xl md:text-4xl text-accent mb-6">Site de démonstration</h1>
      <p className="font-body text-secondary/90 leading-relaxed mb-4">
        Vous avez suivi un lien vers Google Maps ou un avis : <strong>ce site est un site de démo</strong>. Les cartes et avis
        présentés ici illustrent un exemple de mise en page, pas un établissement réel connecté à Google.
      </p>
      <p className="font-body text-secondary/90 leading-relaxed mb-8">
        <strong>LSDEV</strong> sera ravie d&apos;échanger avec vous pour mettre en œuvre des solutions réellement adaptées à vos
        besoins et à vos vraies applications (carte, avis, réservations, paiement, et plus encore).
      </p>
      <Link
        href="https://lesagedev.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-sm bg-accent text-secondary font-body font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
      >
        Découvrir LSDEV — lesagedev.com
        <span aria-hidden>↗</span>
      </Link>
      <p className="mt-10 text-sm text-secondary/60 font-body">
        <Link href="/" className="text-accent hover:underline">
          Retour à l&apos;accueil
        </Link>
      </p>
    </div>
  );
}
