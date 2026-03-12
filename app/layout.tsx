import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fontHeading = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const fontBody = Source_Serif_4({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Shopayado — Encre & Soie | Sérigraphie & ateliers, Lyon Croix-Rousse",
  description: "Ateliers de sérigraphie et estampes artisanales à Lyon. Le Shopayado — Encre & Soie. 63 montée de la Grande Côte.",
  keywords: ["sérigraphie Lyon", "atelier sérigraphie", "Le Shopayado", "Encre & Soie", "Croix-Rousse", "Cécile M."],
  openGraph: { images: ["/images/hero.png"] },
  robots: "index, follow",
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
