const BASE = process.env.NEXT_PUBLIC_BACKEND_URL || "";
const SITE_ID = process.env.NEXT_PUBLIC_SITE_ID || "shopayado-ateliers";

export async function api<T>(path: string, options?: Omit<RequestInit, "body"> & { body?: unknown }): Promise<T> {
  const { body, ...rest } = options ?? {};
  const res = await fetch(`${BASE}${path}`, {
    ...rest,
    headers: { "Content-Type": "application/json", ...rest.headers },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({})) as { error?: string }).error || res.statusText);
  return res.json() as Promise<T>;
}

export function postContact(data: { name: string; email: string; phone?: string; subject?: string; message: string }) {
  return api<{ ok: boolean }>("/api/contact", { method: "POST", body: { site_id: SITE_ID, ...data } });
}

export function postCustomOrder(data: { name: string; email: string; phone?: string; project_type: string; dimensions?: string; budget_range?: string; description: string }) {
  return api<{ ok: boolean }>("/api/custom-orders", {
    method: "POST",
    body: { site_id: SITE_ID, client_name: data.name, client_email: data.email, client_phone: data.phone, project_type: data.project_type, dimensions: data.dimensions, budget_range: data.budget_range, description: data.description },
  });
}

export function postBooking(data: { name: string; email: string; phone?: string; workshop_slug?: string; date?: string; message: string }) {
  return api<{ ok: boolean }>("/api/booking", { method: "POST", body: { site_id: SITE_ID, type: "atelier", ...data } });
}

export { SITE_ID };
