import { Calendar, ClipboardCheck, FileText, MessageSquare, Wallet } from "lucide-react";

export default function Workflow() {
  const steps = [
    {
      icon: FileText,
      title: "Création du dossier",
      desc: "L’agent ouvre un dossier patient et ajoute les informations médicales de base.",
    },
    {
      icon: Calendar,
      title: "Planification des soins",
      desc: "Rendez‑vous et examens ajoutés avec rappels automatiques pour la diaspora.",
    },
    {
      icon: Wallet,
      title: "Paiement sécurisé",
      desc: "La diaspora paie en ligne, chaque transaction est tracée et facturée.",
    },
    {
      icon: MessageSquare,
      title: "Suivi en temps réel",
      desc: "Photos, comptes‑rendus, ordonnances et relances consultables à tout moment.",
    },
    {
      icon: ClipboardCheck,
      title: "Validation & reporting",
      desc: "L’admin contrôle la qualité des dossiers et suit les indicateurs clés.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Comment ça marche</h2>
          <p className="mt-2 text-gray-600">Un parcours simple et transparent pour tous les acteurs.</p>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
