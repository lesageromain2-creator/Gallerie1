"use client";

import { useState } from "react";
import { postCustomOrder } from "@/lib/api";

export default function CommandeAtypiquePage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "serigraphie",
    dimensions: "",
    budget_range: "",
    description: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await postCustomOrder({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        project_type: form.project_type,
        dimensions: form.dimensions || undefined,
        budget_range: form.budget_range || undefined,
        description: form.description,
      });
      setSent(true);
      setForm({ name: "", email: "", phone: "", project_type: "serigraphie", dimensions: "", budget_range: "", description: "" });
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
          Nous étudierons votre projet (commande hors-série, projet collectif, tirage sur mesure) et vous recontacterons rapidement.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12 md:py-16">
      <div className="border-t border-secondary/10 pt-8">
        <h1 className="font-heading text-4xl text-accent">Commandes hors-série</h1>
        <p className="font-body text-secondary/80 mt-2">
          Projets collectifs, tirages sur mesure, séries personnalisées. Décrivez-nous votre projet.
        </p>
      </div>

      {error && <p className="mt-4 font-body text-accent font-medium">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
          <label htmlFor="project_type" className="block font-body text-sm font-medium text-secondary mb-1">Type de projet *</label>
          <select id="project_type" required value={form.project_type} onChange={(e) => setForm({ ...form, project_type: e.target.value })} className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm">
            <option value="serigraphie">Sérigraphie</option>
            <option value="fresque">Fresque</option>
            <option value="dessin">Dessin</option>
            <option value="tirage-serie">Tirage / série</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="dimensions" className="block font-body text-sm font-medium text-secondary mb-1">Dimensions (optionnel)</label>
          <input id="dimensions" type="text" value={form.dimensions} onChange={(e) => setForm({ ...form, dimensions: e.target.value })} placeholder="ex. 50x70 cm" className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm placeholder-secondary/50" />
        </div>
        <div>
          <label htmlFor="budget_range" className="block font-body text-sm font-medium text-secondary mb-1">Fourchette budgétaire (optionnel)</label>
          <input id="budget_range" type="text" value={form.budget_range} onChange={(e) => setForm({ ...form, budget_range: e.target.value })} placeholder="ex. 200-500 €" className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm placeholder-secondary/50" />
        </div>
        <div>
          <label htmlFor="description" className="block font-body text-sm font-medium text-secondary mb-1">Description du projet *</label>
          <textarea id="description" required rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Décrivez votre projet, quantité, délais souhaités..." className="w-full px-4 py-2 border border-secondary/20 bg-primary text-secondary font-body rounded-sm resize-none placeholder-secondary/50" />
        </div>
        <button type="submit" disabled={loading} className="w-full py-3 bg-accent text-primary font-body font-semibold rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50">
          {loading ? "Envoi…" : "Envoyer la demande"}
        </button>
      </form>
    </div>
  );
}
