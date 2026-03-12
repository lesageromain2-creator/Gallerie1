import Image from "next/image";
import Link from "next/link";

export default function AProposPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <div className="border-t border-secondary/10 pt-6">
        <h1 className="font-heading text-4xl md:text-5xl text-accent">Cécile & l&apos;atelier</h1>
        <p className="font-body text-secondary/80 text-lg mt-2">Artiste et artisanat d&apos;art à Lyon.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center mt-10 mb-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary/10">
          <Image src="/images/about.png" alt="Cécile M. — Le Shopayado" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div>
          <p className="font-body text-secondary/90 leading-relaxed mb-4">
            Artiste et artisanat d&apos;art à Lyon. Sérigraphie, estampes, ateliers partagés sur les pentes de la Croix-Rousse.
          </p>
          <p className="font-body text-secondary/80 leading-relaxed">
            Le Shopayado est né de l&apos;envie de partager un univers singulier : estampes artisanales, sérigraphies, dessins et chimères. Cécile M. y accueille le public dans son atelier-galerie. Chaque pièce est réalisée avec soin, en petites séries ou sur commande.
          </p>
        </div>
      </div>
      <div className="p-6 rounded-lg bg-secondary text-primary border border-secondary/10">
        <p className="font-heading font-semibold text-primary mb-2">Adresse & horaires</p>
        <p className="font-body text-primary/90 text-sm">63 montée de la Grande Côte, 69001 Lyon</p>
        <p className="font-body text-primary/80 text-sm">Métro A et C, arrêt Hôtel de Ville</p>
        <p className="font-body text-primary/80 text-sm mt-1">Jeudi–Samedi 11h–19h</p>
        <Link href="/contact" className="inline-block mt-4 px-6 py-2 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity">
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
