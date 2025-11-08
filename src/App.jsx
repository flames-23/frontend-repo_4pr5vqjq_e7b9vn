import Header from "./components/Header";
import RoleCards from "./components/RoleCards";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>
            © {new Date().getFullYear()} CareBridge — Suivi des soins pour la diaspora.
          </p>
          <nav className="flex items-center gap-6">
            <a href="#roles" className="hover:text-gray-900">Rôles</a>
            <a href="#pricing" className="hover:text-gray-900">Tarifs</a>
            <a href="#" className="hover:text-gray-900">Se connecter</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 text-gray-900">
      <Header />
      <RoleCards />
      <Workflow />
      <Pricing />
      <Footer />
    </div>
  );
}
