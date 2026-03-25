"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Données statiques en attendant GET /api/artworks/:siteId (filtré par category/série)
const SERIES = [
  { slug: "abstraction", title: "Abstraction", count: "8 œuvres", image: "/images/atelier-4.jpg", technique: "Acrylique" },
  { slug: "paysages", title: "Paysages", count: "6 œuvres", image: "/images/atelier-5.jpg", technique: "Techniques mixtes" },
  { slug: "portraits", title: "Portraits", count: "5 œuvres", image: "/images/atelier-6.jpg", technique: "Huile" },
];

export default function SeriesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-secondary/10 pt-8">
        <h1 className="font-heading text-4xl md:text-5xl text-accent">Collections</h1>
        <p className="font-body text-secondary/80 text-lg mt-4">
          Œuvres uniques et séries limitées, disponibles à l&apos;atelier ou sur demande.
        </p>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERIES.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link href={`/series/${s.slug}`} className="block group">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-secondary/10 border border-secondary/10 group-hover:border-accent/50 transition-colors">
                <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <h2 className="font-heading text-xl text-secondary mt-3 group-hover:text-accent transition-colors">{s.title}</h2>
              <p className="font-body text-secondary/70 text-sm mt-1">{s.technique} — {s.count}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      <p className="mt-12 text-center font-body text-secondary/80">
        Pour une commande ou une visite à l&apos;atelier, <Link href="/contact" className="text-accent hover:underline">contactez-nous</Link>.
      </p>
    </div>
  );
}
