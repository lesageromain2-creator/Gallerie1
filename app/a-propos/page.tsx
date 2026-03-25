import Image from "next/image";
import Link from "next/link";

export default function AProposPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <div className="border-t border-secondary/10 pt-6">
        <h1 className="font-heading text-4xl md:text-5xl text-accent">Marie Laurent & l&apos;atelier</h1>
        <p className="font-body text-secondary/80 text-lg mt-2">Artiste peintre et atelier d&apos;art à Paris.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center mt-10 mb-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary/10">
          <Image src="/images/about.jpg" alt="Marie Laurent — Atelier Lumière" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div>
          <p className="font-body text-secondary/90 leading-relaxed mb-4">
            Artiste peintre et atelier d&apos;art à Paris. Peinture contemporaine, techniques mixtes, ateliers partagés dans le 6e arrondissement.
          </p>
          <p className="font-body text-secondary/80 leading-relaxed">
            L&apos;Atelier Lumière est né de l&apos;envie de partager une pratique picturale singulière : acrylique, huile, techniques mixtes. Marie Laurent y accueille le public dans son atelier. Chaque œuvre est réalisée avec soin, en pièce unique ou sur commande.
          </p>
        </div>
      </div>
      <div className="p-6 rounded-lg bg-violet-950 bg-gallery-band text-white border border-white/25 shadow-lg">
        <p className="font-heading font-semibold text-white mb-2 drop-shadow-sm">Adresse & horaires</p>
        <p className="font-body text-white text-sm">12 rue des Arts, 75006 Paris</p>
        <p className="font-body text-white/90 text-sm">Métro Odéon, Mabillon</p>
        <p className="font-body text-white/90 text-sm mt-1">Mercredi–Samedi 14h–19h</p>
        <Link href="/contact" className="inline-block mt-4 px-6 py-2 border-2 border-white text-white font-body font-semibold rounded-sm hover:bg-white hover:text-violet-950 transition-colors">
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
