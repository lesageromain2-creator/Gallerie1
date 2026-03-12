"use client";

import { useState } from "react";
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
        <p className="font-body text-secondary/80 text-sm mt-2">63 montée de la Grande Côte, 69001 Lyon — Jeu–Sam 11h–19h</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-10">
        <div>
          <p className="font-heading font-semibold text-secondary mb-2">Nous trouver</p>
          <p className="font-body text-secondary/80 text-sm mb-2">63 montée de la Grande Côte, 69001 Lyon</p>
          <p className="font-body text-secondary/80 text-sm mb-2"><a href="tel:0625124447" className="text-accent hover:underline">06 25 12 44 47</a></p>
          <p className="font-body text-secondary/80 text-sm mb-4"><a href="mailto:contact@leshopayado.fr" className="text-accent hover:underline">contact@leshopayado.fr</a></p>
          <div className="aspect-video overflow-hidden rounded-lg bg-secondary/10">
            <iframe
              title="Le Shopayado, Lyon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.340892783!2d4.829515!3d45.7707124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb3670cf02ab%3A0xf08d982cc2f83dfe!2sLe%20Shopayado!5e0!3m2!1sfr!2sfr!4v1640000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
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
