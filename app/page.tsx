"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SHOPAYADO_REVIEWS, SHOPAYADO_MEDIAS, PROCESS_ETAPES } from "@/lib/shopayado-data";

const POLAROID_IMGS = ["/images/atelier-1.png", "/images/atelier-2.png", "/images/atelier-3.png", "/images/atelier-4.png", "/images/atelier-5.png", "/images/atelier-6.png"];

export default function HomePage() {
  return (
    <>
      {/* Hero — fond kraft, titre animé type sérigraphie */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center px-4 py-16 overflow-hidden grain">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.png" alt="" fill className="object-cover opacity-20" priority />
        </div>
        <motion.h1
          className="relative z-10 font-heading text-5xl md:text-7xl lg:text-8xl text-secondary text-center font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Encre & Soie
        </motion.h1>
        <motion.p
          className="relative z-10 mt-4 font-body text-lg md:text-xl text-secondary/90 text-center max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Sérigraphie artisanale, ateliers et petites séries. Cécile M., Lyon.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <Link
            href="/serigraphie#process"
            className="inline-block mt-8 px-6 py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            Découvrir le process
          </Link>
        </motion.div>
      </section>

      {/* Le process en 6 étapes — timeline horizontale scroll snap */}
      <section id="process" className="py-16 md:py-24 bg-secondary text-primary">
        <h2 className="font-heading text-3xl md:text-4xl text-accent text-center mb-12">Le process en 6 étapes</h2>
        <div className="overflow-x-auto overflow-y-hidden pb-6 snap-x snap-mandatory flex gap-6 px-4 md:px-8 max-w-full">
          {PROCESS_ETAPES.map((item, i) => (
            <motion.div
              key={item.step}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-center rounded-lg bg-primary/10 border border-primary/20 p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="font-heading text-accent text-2xl">{item.step}</span>
              <h3 className="font-heading text-xl text-primary mt-2">{item.title}</h3>
              <p className="font-body text-primary/80 text-sm mt-2">{item.short}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-primary/70 text-sm mt-4">Faites défiler pour découvrir toutes les étapes</p>
      </section>

      {/* Galerie ateliers — polaroids */}
      <section className="py-16 md:py-24 bg-primary relative grain">
        <h2 className="font-heading text-3xl md:text-4xl text-accent text-center mb-12">Ateliers & workshops</h2>
        <p className="text-center text-secondary/80 max-w-xl mx-auto mb-12">Initiation à la sérigraphie, découverte de l&apos;atelier.</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4">
          {POLAROID_IMGS.map((src, i) => (
            <motion.div
              key={src}
              className="bg-white p-3 pb-10 shadow-lg"
              style={{ transform: `rotate(${[-2, 1, -1, 2, -2, 1][i]}deg)` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="w-48 h-48 md:w-56 md:h-56 relative bg-secondary/5">
                <Image src={src} alt={`Atelier ${i + 1}`} fill className="object-cover" sizes="224px" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/ateliers" className="inline-block px-6 py-3 border-2 border-accent text-accent font-body font-semibold rounded-sm hover:bg-accent hover:text-primary transition-colors">
            Voir les ateliers
          </Link>
        </div>
      </section>

      {/* Avis Google */}
      <section className="py-16 md:py-24 bg-secondary text-primary">
        <h2 className="font-heading text-3xl md:text-4xl text-accent text-center mb-4">Ils en parlent</h2>
        <p className="text-center text-primary/80 mb-12">Avis de nos visiteurs et participants.</p>
        <div className="max-w-4xl mx-auto px-4 grid gap-6 md:grid-cols-2">
          {SHOPAYADO_REVIEWS.map((r, i) => (
            <motion.article
              key={i}
              className="bg-primary/10 rounded-lg p-6 border border-primary/20"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex gap-1 text-accent mb-2" aria-hidden>{Array.from({ length: r.rating }).map((_, j) => <span key={j}>★</span>)}</div>
              <p className="font-body text-primary/90 italic">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-2 text-primary/70 text-sm">{r.authorName} — {r.source}</p>
              {r.url && (
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-accent text-sm mt-1 inline-block hover:underline">Voir l&apos;avis</a>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* Carrousel médias */}
      <section className="py-16 bg-primary border-t border-secondary/10 relative grain">
        <h2 className="font-heading text-2xl md:text-3xl text-accent text-center mb-10">Ils nous font confiance</h2>
        <div className="overflow-hidden">
          <div className="flex animate-media-carousel w-max gap-12 px-4">
            {[...SHOPAYADO_MEDIAS, ...SHOPAYADO_MEDIAS].map((m, i) => (
              <a
                key={i}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-48 md:w-56 flex flex-col items-center gap-3 p-4 rounded-lg bg-white/80 border border-secondary/10 hover:border-accent/50 transition-colors"
              >
                {m.logoSrc.startsWith("http") ? (
                  <img src={m.logoSrc} alt={m.name} className="h-10 w-auto object-contain" />
                ) : (
                  <Image src={m.logoSrc} alt={m.name} width={120} height={40} className="object-contain" />
                )}
                <p className="font-body text-secondary text-sm text-center line-clamp-2">{m.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-center">
        <p className="text-primary/90 font-body text-lg mb-4">Envie d&apos;un atelier ou d&apos;une commande sur mesure ?</p>
        <Link href="/contact" className="inline-block px-6 py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity">
          Nous contacter
        </Link>
      </section>
    </>
  );
}
