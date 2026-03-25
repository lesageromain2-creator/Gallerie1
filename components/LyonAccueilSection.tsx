"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const LYON = [
  { src: "/images/contexte/lyon-patrimoine-1.jpg", alt: "Patrimoine et perspectives lyonnaises" },
  { src: "/images/contexte/lyon-ville-1.jpg", alt: "La ville de Lyon" },
  { src: "/images/contexte/lyon-heritage-1.jpg", alt: "Héritage et pierres" },
  { src: "/images/contexte/lyon-rive-1.jpg", alt: "Lumière sur la cité" },
] as const;

const RELATIONS = [
  { src: "/images/contexte/relation-accueil-1.jpg", alt: "Accueil chaleureux" },
  { src: "/images/contexte/relation-echange-1.jpg", alt: "Échange et écoute" },
  { src: "/images/contexte/relation-confiance-1.jpg", alt: "Confiance et collaboration" },
] as const;

export default function LyonAccueilSection() {
  return (
    <>
      <section className="relative py-16 md:py-24 bg-primary border-t border-secondary/10 overflow-hidden grain">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(ellipse_at_30%_20%,rgba(139,92,246,0.4),transparent_50%)]" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="font-body text-accent/90 text-sm uppercase tracking-[0.12em] mb-3">Racines lyonnaises</p>
              <h2 className="font-heading text-2xl md:text-3xl text-secondary mb-4">Ancrés dans Lyon</h2>
              <p className="font-body text-secondary/85 leading-relaxed mb-4">
                Notre atelier se nourrit du tissu de la ville : ses perspectives, son patrimoine et la lumière qui traverse ses quartiers. Lyon n&apos;est pas seulement un lieu sur la carte — c&apos;est un
                horizon qui colore notre travail et donne sens aux œuvres que nous proposons.
              </p>
              <p className="font-body text-secondary/80 text-sm leading-relaxed">
                Quelques images, posées comme des fragments de paysage urbain, évoquent discrètement cette présence : une manière de faire dialoguer l&apos;art avec la mémoire des lieux.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-2.5 md:gap-3">
              {LYON.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-secondary/10 shadow-md ${i === 1 ? "translate-y-2 md:translate-y-3" : ""} ${i === 2 ? "-translate-y-1 md:-translate-y-2" : ""}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover opacity-[0.92] hover:opacity-100 transition-opacity duration-500" sizes="(max-width:768px) 45vw, 280px" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-violet-950 bg-gallery-band text-white border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-center">
            <div className="md:col-span-2 flex justify-center gap-3 md:gap-4">
              {RELATIONS.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative w-[28%] max-w-[120px] aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-lg shadow-black/30"
                  style={{ marginTop: i === 1 ? 12 : 0 }}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover opacity-90" sizes="120px" />
                </motion.div>
              ))}
            </div>
            <div className="md:col-span-3">
              <p className="font-body text-white/70 text-sm uppercase tracking-[0.12em] mb-3">Rencontre & confiance</p>
              <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">Les relations humaines au cœur de la démarche</h2>
              <p className="font-body text-white/90 leading-relaxed mb-4">
                L&apos;art ne vit pleinement que dans l&apos;échange : la confiance se construit au fil des conversations, des regards posés sur une toile et des projets partagés. Nous accordons une
                place essentielle à la relation, au respect du rythme de chacun et à la bienveillance.
              </p>
              <p className="font-body text-white/85 leading-relaxed text-sm md:text-base">
                Le contact avec nos visiteurs et nos clients est primordial : chaque commande, chaque atelier repose sur une écoute réelle. C&apos;est ensemble que naissent les œuvres qui vous
                ressemblent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-center px-4 grain">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <p className="font-heading text-xl md:text-2xl text-secondary mb-2">Rendez-nous visite</p>
          <p className="font-body text-secondary/85 mb-6">Nous vous accueillerons avec joie — passez à l&apos;atelier, échangeons autour de vos envies et de nos créations.</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-accent text-secondary font-body font-semibold rounded-sm shadow-md hover:brightness-105 transition-all">
            Prendre contact
          </Link>
        </motion.div>
      </section>
    </>
  );
}
