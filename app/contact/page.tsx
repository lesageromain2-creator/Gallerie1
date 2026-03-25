"use client";

import { useState } from "react";
import Link from "next/link";
import { postContact } from "@/lib/api";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await postContact({ name: form.name, email: form.email, phone: form.phone || undefined, subject: form.subject || undefined, message: form.message });
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <div className="border-t border-secondary/10 pt-6">
        <h1 className="font-heading text-4xl text-accent">Contact</h1>
        <p className="font-body text-secondary/80 text-sm mt-2">12 rue des Arts, 75006 Paris — Mer–Sam 14h–19h</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-10">
        <div>
          <p className="font-heading font-semibold text-secondary mb-2">Nous trouver</p>
          <p className="font-body text-secondary/80 text-sm mb-2">12 rue des Arts, 75006 Paris</p>
          <p className="font-body text-secondary/80 text-sm mb-2"><a href="tel:0142861234" className="text-accent hover:underline">01 42 86 12 34</a></p>
          <p className="font-body text-secondary/80 text-sm mb-4"><a href="mailto:contact@atelier-lumiere.fr" className="text-accent hover:underline">contact@atelier-lumiere.fr</a></p>
          <div className="aspect-video overflow-hidden rounded-lg bg-secondary/10 border border-secondary/15 flex flex-col items-center justify-center p-6 text-center min-h-[200px]">
            <p className="font-body text-secondary/90 text-sm mb-4">
              Carte interactive (démo) : ce site illustre une vitrine. Pour une vraie intégration Google Maps et vos besoins métiers, consultez la page dédiée.
            </p>
            <Link
              href="/demo-google-maps"
              className="inline-block px-4 py-2 rounded-sm bg-accent text-secondary font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Informations carte & démo
            </Link>
          </div>
        </div>
        <div>
          {sent && <p className="font-body text-accent font-medium mb-4">Message envoyé. Nous vous recontacterons rapidement.</p>}
          {error && <p className="font-body text-accent font-medium mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium text-secondary mb-1">Nom *</label>
              <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium text-secondary mb-1">Email *</label>
              <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block font-body text-sm font-medium text-secondary mb-1">Téléphone</label>
              <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm" />
            </div>
            <div>
              <label htmlFor="subject" className="block font-body text-sm font-medium text-secondary mb-1">Sujet</label>
              <input id="subject" type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="ex. Atelier, commande..." className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm placeholder-secondary/50" />
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-sm font-medium text-secondary mb-1">Message *</label>
              <textarea id="message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm resize-none" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50">
              {loading ? "Envoi…" : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
