"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const SERIES_DATA: Record<string, { title: string; technique: string; edition: string; description: string; image: string }> = {
  chimères: {
    title: "Chimères",
    technique: "Sérigraphie",
    edition: "Tirages numérotés, série limitée",
    description: "Petite série de chimères en sérigraphie, inspirée des curiosités et de l'univers du Shopayado.",
    image: "/images/atelier-4.png",
  },
  botanique: {
    title: "Botanique",
    technique: "Sérigraphie",
    edition: "Tirages numérotés",
    description: "Estampes végétales et motifs botaniques, encres à base d'eau.",
    image: "/images/atelier-5.png",
  },
  curiosites: {
    title: "Curiosités",
    technique: "Estampe",
    edition: "Petite série",
    description: "Curiosités et objets singuliers, tirages en petite série.",
    image: "/images/atelier-6.png",
  },
};

export default function SeriesSlugPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const series = slug ? SERIES_DATA[slug] : null;

  if (!series) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="font-heading text-2xl text-accent">Série introuvable</h1>
        <Link href="/series" className="mt-4 inline-block text-accent hover:underline">Retour aux séries</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <Link href="/series" className="font-body text-accent hover:underline text-sm mb-8 inline-block">← Séries</Link>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-primary">
          <Image src={series.image} alt={series.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>
        <div>
          <h1 className="font-heading text-3xl md:text-4xl text-accent">{series.title}</h1>
          <p className="font-body text-secondary/70 mt-2">{series.technique}</p>
          <p className="font-body text-secondary/80 mt-4">{series.description}</p>
          <p className="font-body text-secondary/70 text-sm mt-4">{series.edition}</p>
          <Link href="/contact" className="mt-8 inline-block px-6 py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity">
            Demander disponibilité & tarifs
          </Link>
        </div>
      </div>
    </div>
  );
}
