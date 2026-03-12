"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Données statiques en attendant GET /api/workshops/:siteId
const WORKSHOPS = [
  { slug: "initiation-serigraphie", title: "Initiation à la sérigraphie", description: "Découverte du process en une demi-journée. Vous repartez avec vos tirages.", duration: "3h", price: "65", image: "/images/atelier-1.png" },
  { slug: "atelier-libre", title: "Atelier libre", description: "Utilisation de l'atelier et du matériel pour vos projets personnels, avec accompagnement.", duration: "2h ou 4h", price: "sur devis", image: "/images/atelier-2.png" },
  { slug: "stage-week-end", title: "Stage week-end", description: "Deux jours pour approfondir : préparation des écrans, encrage, tirages en série.", duration: "2 jours", price: "180", image: "/images/atelier-3.png" },
];

export default function AteliersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-secondary/10 pt-8">
        <h1 className="font-heading text-4xl md:text-5xl text-accent">Ateliers & workshops</h1>
        <p className="font-body text-secondary/80 text-lg mt-4">
          Initiation à la sérigraphie, découverte de l&apos;atelier. Sur réservation.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-10 md:gap-14">
        {WORKSHOPS.map((w, i) => (
          <motion.article
            key={w.slug}
            className="flex flex-col md:flex-row gap-8 items-center md:items-stretch rounded-lg bg-white p-6 md:p-8 shadow-lg border border-secondary/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-full md:w-80 flex-shrink-0 aspect-[4/3] relative rounded-lg overflow-hidden bg-primary">
              <Image src={w.image} alt={w.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 320px" />
            </div>
            <div className="flex-1 flex flex-col">
              <h2 className="font-heading text-2xl text-secondary">{w.title}</h2>
              <p className="font-body text-secondary/80 mt-2 flex-1">{w.description}</p>
              <ul className="font-body text-secondary/70 text-sm mt-4 space-y-1">
                <li>Durée : {w.duration}</li>
                <li>Tarif : {w.price} €</li>
              </ul>
              <Link
                href={`/ateliers/${w.slug}`}
                className="mt-6 inline-block w-fit px-6 py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                Voir et réserver
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="font-body text-secondary/80 mb-4">Une question sur les ateliers ?</p>
        <Link href="/contact" className="text-accent font-body font-semibold hover:underline">Nous contacter</Link>
      </div>
    </div>
  );
}
