"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROCESS_ETAPES } from "@/lib/atelier-data";

const GALLERY_IMGS = ["/images/atelier-1.jpg", "/images/atelier-2.jpg", "/images/atelier-3.jpg", "/images/atelier-4.jpg", "/images/atelier-5.jpg", "/images/atelier-6.jpg"];

export default function CreationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-secondary/10 pt-8">
        <h1 className="font-heading text-4xl md:text-5xl text-accent">Nos créations</h1>
        <p className="font-body text-secondary/80 text-lg mt-4">
          Techniques picturales : acrylique, huile, techniques mixtes. De l&apos;esquisse à l&apos;œuvre finale.
        </p>
      </motion.div>

      <motion.section
        className="mt-12 prose prose-lg max-w-none font-body text-secondary/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          À l&apos;Atelier Lumière, chaque œuvre naît d&apos;un dialogue entre intuition et technique. 
          Marie Laurent explore l&apos;acrylique, l&apos;huile et les techniques mixtes pour créer des pièces uniques 
          qui oscillent entre abstraction et figuration.
        </p>
        <p>
          Supports variés : toile, papier kraft, bois. L&apos;atelier accueille aussi des initiations 
          et des workshops pour découvrir la peinture contemporaine et développer sa pratique.
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
        <h2 className="font-heading text-2xl text-accent mb-8">Galerie de l&apos;atelier</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMGS.map((src, i) => (
            <div key={src} className="aspect-square relative rounded-lg overflow-hidden bg-secondary/10">
              <Image src={src} alt={`Atelier ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Link href="/ateliers" className="inline-block px-6 py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity text-center">
          Voir les ateliers
        </Link>
        <Link href="/contact" className="inline-block px-6 py-3 border-2 border-accent text-accent font-body font-semibold rounded-sm hover:bg-accent hover:text-primary transition-colors text-center">
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
