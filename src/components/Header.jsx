import { ArrowRight, Shield, Users } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              <Shield className="h-4 w-4" /> Sécurité & Traçabilité
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Suivez et financez les soins de vos parents au pays, en toute sérénité
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              Une plateforme dédiée à la diaspora pour organiser, payer et contrôler les soins des proches. Les agents locaux renseignent chaque étape, l’admin pilote l’ensemble.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#roles"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Découvrir les rôles <Users className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">Dossier patient</p>
                  <p className="text-xs text-gray-500">Parent: Maman Aïcha</p>
                </div>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                  Actif
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start justify-between rounded-lg bg-gray-50 p-3">
                  <div>
                    <p className="font-medium text-gray-900">Consultation générale</p>
                    <p className="text-gray-500">12 Nov · Clinique Yoff</p>
                  </div>
                  <span className="rounded bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">Agent</span>
                </li>
                <li className="flex items-start justify-between rounded-lg bg-gray-50 p-3">
                  <div>
                    <p className="font-medium text-gray-900">Analyse sanguine</p>
                    <p className="text-gray-500">14 Nov · Laboratoire Pasteur</p>
                  </div>
                  <span className="rounded bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">Payé</span>
                </li>
                <li className="flex items-start justify-between rounded-lg bg-gray-50 p-3">
                  <div>
                    <p className="font-medium text-gray-900">Contrôle de routine</p>
                    <p className="text-gray-500">20 Nov · Centre Médical</p>
                  </div>
                  <span className="rounded bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">À planifier</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-0 blur-3xl">
        <div className="mx-auto h-40 w-[90%] bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100" />
      </div>
    </header>
  );
}
