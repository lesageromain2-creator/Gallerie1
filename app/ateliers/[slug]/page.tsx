"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const WORKSHOPS: Record<string, { title: string; description: string; duration: string; price: string; image: string; level?: string }> = {
  "initiation-serigraphie": {
    title: "Initiation à la sérigraphie",
    description: "Découverte du process en une demi-journée : préparation du visuel, insolation de l'écran, lavage, réglage et tirage. Vous repartez avec vos tirages sur papier.",
    duration: "3h",
    price: "65",
    image: "/images/atelier-1.png",
    level: "Débutant",
  },
  "atelier-libre": {
    title: "Atelier libre",
    description: "Utilisation de l'atelier et du matériel pour vos projets personnels, avec accompagnement sur les réglages et les encres.",
    duration: "2h ou 4h",
    price: "sur devis",
    image: "/images/atelier-2.png",
  },
  "stage-week-end": {
    title: "Stage week-end",
    description: "Deux jours pour approfondir : préparation des écrans, encrage, tirages en série. Idéal pour réaliser une petite édition.",
    duration: "2 jours",
    price: "180",
    image: "/images/atelier-3.png",
    level: "Initié",
  },
};

export default function AtelierSlugPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const workshop = slug ? WORKSHOPS[slug] : null;

  if (!workshop) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="font-heading text-2xl text-accent">Atelier introuvable</h1>
        <Link href="/ateliers" className="mt-4 inline-block text-accent hover:underline">Retour aux ateliers</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <Link href="/ateliers" className="font-body text-accent hover:underline text-sm mb-8 inline-block">← Ateliers</Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-10">
        <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-primary">
          <Image src={workshop.image} alt={workshop.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>
        <div>
          <h1 className="font-heading text-3xl md:text-4xl text-accent">{workshop.title}</h1>
          {workshop.level && <p className="font-body text-secondary/70 text-sm mt-1">Niveau : {workshop.level}</p>}
          <p className="font-body text-secondary/80 mt-4">{workshop.description}</p>
          <ul className="font-body text-secondary/80 mt-6 space-y-1">
            <li>Durée : {workshop.duration}</li>
            <li>Tarif : {workshop.price} €</li>
          </ul>
          <Link
            href={`/reservation?atelier=${encodeURIComponent(slug)}`}
            className="mt-8 inline-block px-6 py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            Réserver cet atelier
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
