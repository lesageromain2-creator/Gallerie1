import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-primary">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-10 pb-6 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <p className="font-heading text-primary text-lg font-semibold">Encre & Soie</p>
          <div className="flex flex-col md:flex-row md:gap-14 gap-8">
            <div className="flex flex-col gap-1">
              <Link href="/serigraphie" className="text-primary/90 hover:text-accent transition-colors">Sérigraphie</Link>
              <Link href="/ateliers" className="text-primary/90 hover:text-accent transition-colors">Ateliers</Link>
              <Link href="/series" className="text-primary/90 hover:text-accent transition-colors">Séries</Link>
              <Link href="/a-propos" className="text-primary/90 hover:text-accent transition-colors">À propos</Link>
              <Link href="/contact" className="text-primary/90 hover:text-accent transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-primary/90">63 montée de la Grande Côte, 69001 Lyon</p>
              <a href="mailto:contact@leshopayado.fr" className="text-primary/90 hover:text-accent transition-colors">contact@leshopayado.fr</a>
              <a href="tel:0625124447" className="text-primary/90 hover:text-accent transition-colors">06 25 12 44 47</a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-primary/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-primary/80 text-sm">© {year} Le Shopayado — Encre & Soie</p>
        </div>
      </div>
    </footer>
  );
}
