import { Check } from "lucide-react";

const tiers = [
  {
    name: "Essentiel",
    price: "Gratuit",
    features: [
      "1 dossier parent",
      "Suivi des rendez‑vous",
      "Preuves de soins (photos/notes)",
    ],
    cta: "Créer un compte",
  },
  {
    name: "Pro",
    price: "9€ / mois",
    features: [
      "Jusqu’à 5 dossiers",
      "Relances automatiques",
      "Export PDF des factures",
      "Support prioritaire",
    ],
    highlight: true,
    cta: "Essayer 14 jours",
  },
  {
    name: "Organisation",
    price: "Sur devis",
    features: [
      "Accès multi‑agents",
      "Tableau de bord admin",
      "Intégrations paiement avancées",
    ],
    cta: "Nous contacter",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Tarifs simples et transparents</h2>
        <p className="mt-2 text-gray-600">
          Commencez gratuitement, passez à l’offre adaptée selon vos besoins.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-6 shadow-sm ${
              t.highlight ? "border-indigo-600 ring-2 ring-indigo-100" : "border-gray-200"
            } bg-white`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <span className="text-sm font-medium text-indigo-700">{t.price}</span>
            </div>
            <ul className="mt-4 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm ${
                t.highlight
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-900 text-white hover:bg-black"
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
