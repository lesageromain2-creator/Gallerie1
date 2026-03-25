import Link from "next/link";
import LsdevFooterCredit from "@/components/LsdevFooterCredit";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-violet-950 bg-gallery-band text-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-10 pb-6 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <p className="font-heading text-white text-lg font-semibold drop-shadow-sm">Atelier Lumière</p>
          <div className="flex flex-col md:flex-row md:gap-14 gap-8">
            <div className="flex flex-col gap-1">
              <Link href="/creations" className="text-white hover:text-white/80 transition-colors">Créations</Link>
              <Link href="/ateliers" className="text-white hover:text-white/80 transition-colors">Ateliers</Link>
              <Link href="/series" className="text-white hover:text-white/80 transition-colors">Collections</Link>
              <Link href="/a-propos" className="text-white hover:text-white/80 transition-colors">À propos</Link>
              <Link href="/contact" className="text-white hover:text-white/80 transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white/90">12 rue des Arts, 75006 Paris</p>
              <a href="mailto:contact@atelier-lumiere.fr" className="text-white hover:text-white/80 transition-colors">contact@atelier-lumiere.fr</a>
              <a href="tel:0142861234" className="text-white hover:text-white/80 transition-colors">01 42 86 12 34</a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-white/90 text-sm">© {year} Atelier Lumière</p>
        </div>
        <LsdevFooterCredit />
      </div>
    </footer>
  );
}
