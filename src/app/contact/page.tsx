import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Let's Connect</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hai un progetto in mente? Parliamone insieme
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a
              href="mailto:info@kheladesign.com"
              className="bg-white rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all text-center group"
            >
              <div className="w-16 h-16 bg-[hsl(var(--khela-accent))] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@kheladesign.com</p>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all text-center group"
            >
              <div className="w-16 h-16 bg-[hsl(var(--khela-accent))] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600">@kheladesign</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all text-center group"
            >
              <div className="w-16 h-16 bg-[hsl(var(--khela-accent))] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600">Michela Rossi</p>
            </a>
          </div>

          {/* About Contact Section */}
          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cosa posso fare per te
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Design di Prodotto
                  </h3>
                  <p className="text-sm">
                    Concept, prototipazione e sviluppo di prodotti sostenibili e funzionali
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Branding</h3>
                  <p className="text-sm">
                    Identità visive complete per piccole e medie attività
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Material Research
                  </h3>
                  <p className="text-sm">
                    Ricerca e sperimentazione con materiali alternativi e sostenibili
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consulenza</h3>
                  <p className="text-sm">
                    Supporto per progetti di design sostenibile e accessibile
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-6">
                  Preferisco discussioni iniziali via email per capire meglio le tue
                  esigenze e vedere se possiamo collaborare.
                </p>
                <a
                  href="mailto:info@kheladesign.com"
                  className="inline-block px-8 py-4 bg-[hsl(var(--khela-accent))] text-white rounded-lg font-medium hover:opacity-90 transition-all hover:transform hover:translate-y-[-2px]"
                >
                  Scrivimi
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
