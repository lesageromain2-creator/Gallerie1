import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fontHeading = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const fontBody = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Atelier Lumière | Peinture contemporaine & ateliers créatifs, Paris Saint-Germain",
  description: "Atelier d'art et peinture contemporaine à Paris. Marie Laurent — Atelier Lumière. 12 rue des Arts, 6e.",
  keywords: ["peinture Paris", "atelier art", "Atelier Lumière", "Marie Laurent", "Saint-Germain", "art contemporain"],
  openGraph: { images: ["/images/hero.jpg"] },
  robots: "index, follow",
  icons: { icon: "/images/hero.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased font-body bg-primary text-secondary">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
