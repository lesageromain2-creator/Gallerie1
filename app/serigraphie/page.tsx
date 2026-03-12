"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROCESS_ETAPES } from "@/lib/shopayado-data";

const GALLERY_IMGS = ["/images/atelier-1.png", "/images/atelier-2.png", "/images/atelier-3.png", "/images/atelier-4.png", "/images/atelier-5.png", "/images/atelier-6.png"];

export default function SerigraphiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-secondary/10 pt-8">
        <h1 className="font-heading text-4xl md:text-5xl text-accent">La sérigraphie</h1>
        <p className="font-body text-secondary/80 text-lg mt-4">
          Technique d&apos;impression artisanale : histoire, matériaux, étapes détaillées.
        </p>
      </motion.div>

      <motion.section
        className="mt-12 prose prose-lg max-w-none font-body text-secondary/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          La sérigraphie est un procédé d&apos;impression qui utilise un écran (soie ou polyester) et une racle. 
          L&apos;encre est poussée à travers les zones ouvertes du pochoir sur le support — papier, tissu, bois. 
          À l&apos;atelier Shopayado, chaque tirage est fait à la main, en petites séries numérotées.
        </p>
        <p>
          Matériaux : cadres, émulsion photosensible, encres à base d&apos;eau ou à solvant, supports variés. 
          L&apos;atelier accueille aussi des initiations et des workshops pour découvrir la technique.
        </p>
      </motion.section>

      <section id="process" className="mt-16">
        <h2 className="font-heading text-2xl text-accent mb-8">Les étapes en détail</h2>
        <div className="space-y-6">
          {PROCESS_ETAPES.map((item, i) => (
            <motion.div
              key={item.step}
              className="flex gap-6 p-6 rounded-lg bg-secondary/5 border border-secondary/10"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="flex-shrink-0 font-heading text-accent text-2xl w-10">{item.step}</span>
              <div>
                <h3 className="font-heading text-xl text-secondary">{item.title}</h3>
                <p className="font-body text-secondary/80 mt-1">{item.short}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-2xl text-accent mb-8">Galerie du processus</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMGS.map((src, i) => (
            <div key={src} className="aspect-square relative rounded-lg overflow-hidden bg-secondary/10">
              <Image src={src} alt={`Étape atelier ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Link href="/ateliers" className="inline-block px-6 py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity text-center">
          Voir les ateliers
        </Link>
        <Link href="/reservation" className="inline-block px-6 py-3 border-2 border-accent text-accent font-body font-semibold rounded-sm hover:bg-accent hover:text-primary transition-colors text-center">
          Réserver un atelier
        </Link>
      </div>
    </div>
  );
}
