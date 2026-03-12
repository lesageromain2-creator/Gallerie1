"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { postBooking } from "@/lib/api";

function ReservationForm() {
  const searchParams = useSearchParams();
  const atelierParam = searchParams.get("atelier") || "";
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    workshop_slug: atelierParam,
    date: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await postBooking({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        workshop_slug: form.workshop_slug || undefined,
        date: form.date || undefined,
        message: form.message,
      });
      setSent(true);
      setForm({ name: "", email: "", phone: "", workshop_slug: "", date: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <h1 className="font-heading text-3xl text-accent mb-4">Demande envoyée</h1>
        <p className="font-body text-secondary/80">
          Nous vous recontacterons rapidement pour confirmer votre inscription à l&apos;atelier.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12 md:py-16">
      <div className="border-t border-secondary/10 pt-8">
        <h1 className="font-heading text-4xl text-accent">Réservation atelier</h1>
        <p className="font-body text-secondary/80 mt-2">Inscription à un atelier ou stage de sérigraphie.</p>
      </div>

      {error && <p className="mt-4 font-body text-accent font-medium">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="block font-body text-sm font-medium text-secondary mb-1">Nom *</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-sm font-medium text-secondary mb-1">Email *</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-body text-sm font-medium text-secondary mb-1">Téléphone</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="workshop_slug" className="block font-body text-sm font-medium text-secondary mb-1">Atelier souhaité</label>
          <input
            id="workshop_slug"
            type="text"
            value={form.workshop_slug}
            onChange={(e) => setForm({ ...form, workshop_slug: e.target.value })}
            placeholder="ex. initiation-serigraphie"
            className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm placeholder-secondary/50"
          />
        </div>
        <div>
          <label htmlFor="date" className="block font-body text-sm font-medium text-secondary mb-1">Date souhaitée (optionnel)</label>
          <input
            id="date"
            type="text"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            placeholder="ex. Samedi 15 mars"
            className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm placeholder-secondary/50"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-body text-sm font-medium text-secondary mb-1">Message *</label>
          <textarea
            id="message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Précisez votre niveau, vos disponibilités..."
            className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm resize-none placeholder-secondary/50"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Envoi…" : "Envoyer la demande"}
        </button>
      </form>
    </div>
  );
}

export default function ReservationPage() {
  return (
    <Suspense fallback={<div className="max-w-xl mx-auto px-4 py-12 font-body text-secondary/70">Chargement…</div>}>
      <ReservationForm />
    </Suspense>
  );
}
