import { BadgeCheck, CreditCard, NotebookPen, Settings } from "lucide-react";

const roles = [
  {
    key: "diaspora",
    title: "Diaspora",
    desc:
      "Finance les soins, suit les dépenses et valide les paiements. Accède à l’historique et aux factures.",
    icon: CreditCard,
    color: "from-indigo-500 to-purple-500",
  },
  {
    key: "agent",
    title: "Agent",
    desc:
      "Renseigne les consultations, analyses, ordonnances. Relance les paiements et planifie les rendez‑vous.",
    icon: NotebookPen,
    color: "from-emerald-500 to-teal-500",
  },
  {
    key: "admin",
    title: "Admin",
    desc:
      "Pilote la plateforme, gère les utilisateurs, valide les dossiers et supervise les performances.",
    icon: Settings,
    color: "from-amber-500 to-rose-500",
  },
];

export default function RoleCards() {
  return (
    <section id="roles" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Trois rôles, un même objectif</h2>
        <p className="mt-2 text-gray-600">
          Transparence totale et responsabilités claires pour assurer des soins réguliers et bien suivis.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((r) => (
          <div
            key={r.key}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className={`mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${r.color} p-3 text-white`}>
              <r.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{r.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{r.desc}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-700">
              <BadgeCheck className="h-4 w-4" />
              Processus vérifié
            </div>
            <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-black/5 to-transparent blur-xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
