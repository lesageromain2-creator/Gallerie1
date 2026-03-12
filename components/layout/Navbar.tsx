"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/serigraphie", label: "Sérigraphie" },
  { href: "/ateliers", label: "Ateliers" },
  { href: "/series", label: "Séries" },
  { href: "/commande-atypique", label: "Commande atypique" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-primary border-b border-secondary/10">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="font-heading text-secondary text-xl font-semibold tracking-tight">
          Encre & Soie
        </Link>
        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded border border-accent text-accent"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <span className="text-xl leading-none">×</span>
          ) : (
            <span className="flex flex-col gap-1">
              <span className="w-5 h-0.5 bg-accent block" />
              <span className="w-5 h-0.5 bg-accent block" />
              <span className="w-5 h-0.5 bg-accent block" />
            </span>
          )}
        </button>
        <div
          className={`absolute md:relative top-full left-0 right-0 bg-primary border-t md:border-t-0 border-secondary/10 ${
            open ? "flex flex-col" : "hidden md:flex"
          } md:flex md:flex-row md:items-center md:gap-8`}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-body text-base py-3 md:py-2 px-4 md:px-0 border-b md:border-b-0 border-secondary/10 md:border-0 text-secondary hover:text-accent transition-colors ${
                pathname === href ? "text-accent font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
