"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ATELIER_REVIEWS, ATELIER_MEDIAS, PROCESS_ETAPES } from "@/lib/atelier-data";
import LyonAccueilSection from "@/components/LyonAccueilSection";

const POLAROID_IMGS = ["/images/atelier-1.jpg", "/images/atelier-2.jpg", "/images/atelier-3.jpg", "/images/atelier-4.jpg", "/images/atelier-5.jpg", "/images/atelier-6.jpg"];

export default function HomePage() {
  return (
    <>
      {/* Hero — image fond plein écran (style shopayo-v1) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.jpg" alt="Fond visuel d&apos;accueil — Atelier Lumière" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/45 via-fuchsia-900/35 to-amber-900/25 z-[1]" aria-hidden />
        </div>
        <motion.h1
          className="relative z-10 font-heading text-5xl md:text-7xl lg:text-8xl text-primary text-center font-semibold drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         Atelier Lumière
        </motion.h1>
        <motion.p
          className="relative z-10 mt-4 font-body text-lg md:text-xl text-primary/95 text-center max-w-xl drop-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Peinture contemporaine, ateliers créatifs et œuvres uniques. Marie Laurent, Lyon.
        </motion.p>
        <div className="relative z-10 mt-8">
          <Link
            href="/creations#process"
            className="inline-block px-6 py-3 bg-accent text-secondary font-body font-semibold rounded-sm shadow-md shadow-amber-500/30 hover:brightness-105 transition-all"
          >
            Découvrir nos créations
          </Link>
        </div>
      </section>

      {/* Le process en 6 étapes — timeline horizontale scroll snap */}
      <section id="process" className="py-16 md:py-24 bg-violet-950 bg-gallery-band text-white">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-12 drop-shadow-sm">Le parcours créatif</h2>
        <div className="overflow-x-auto overflow-y-hidden pb-6 snap-x snap-mandatory flex gap-6 px-4 md:px-8 max-w-full">
          {PROCESS_ETAPES.map((item, i) => (
            <motion.div
              key={item.step}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-center rounded-lg bg-violet-950/55 backdrop-blur-sm border border-white/25 p-6 shadow-lg shadow-black/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="font-heading text-white text-2xl">{item.step}</span>
              <h3 className="font-heading text-xl text-white mt-2">{item.title}</h3>
              <p className="font-body text-white/90 text-sm mt-2">{item.short}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-white/90 text-sm mt-4">Faites défiler pour découvrir toutes les étapes</p>
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
          <Link href="/ateliers" className="inline-block px-6 py-3 border-2 border-accent text-accent font-body font-semibold rounded-sm hover:bg-accent hover:text-secondary transition-colors shadow-sm">
            Voir les ateliers
          </Link>
        </div>
      </section>

      <LyonAccueilSection />

      {/* Avis Google */}
      <section className="py-16 md:py-24 bg-violet-950 bg-gallery-band text-white">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-4 drop-shadow-sm">Ils en parlent</h2>
        <p className="text-center text-white/90 mb-12">Avis de nos visiteurs et participants.</p>
        <div className="max-w-4xl mx-auto px-4 grid gap-6 md:grid-cols-2">
          {ATELIER_REVIEWS.map((r, i) => (
            <motion.article
              key={i}
              className="bg-violet-950/55 backdrop-blur-sm rounded-lg p-6 border border-white/25 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex gap-1 text-white mb-2" aria-hidden>{Array.from({ length: r.rating }).map((_, j) => <span key={j}>★</span>)}</div>
              <p className="font-body text-white italic">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-2 text-white/90 text-sm">{r.authorName} — {r.source}</p>
              {r.url && (
                <a
                  href={r.url}
                  {...(r.url.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-white text-sm mt-1 inline-block underline hover:text-white/80"
                >
                  Voir l&apos;avis
                </a>
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
            {[...ATELIER_MEDIAS, ...ATELIER_MEDIAS].map((m, i) => (
              <a
                key={i}
                href={m.url}
                {...(m.url.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
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
      <section className="py-16 bg-violet-950 bg-gallery-band text-center text-white">
        <p className="text-white font-body text-lg mb-4 drop-shadow-sm">Envie d&apos;un atelier ou d&apos;une commande sur mesure ?</p>
        <Link href="/contact" className="inline-block px-6 py-3 border-2 border-white text-white font-body font-semibold rounded-sm hover:bg-white hover:text-violet-950 transition-colors">
          Nous contacter
        </Link>
      </section>
    </>
  );
}
