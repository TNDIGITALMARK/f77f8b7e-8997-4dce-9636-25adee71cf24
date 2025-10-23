import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Designer e fondatrice di Khela Design, specializzata in design sostenibile e accessibile
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Portrait */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/generated/michela-portrait.png"
                alt="Michela - Designer e fondatrice di Khela Design"
                fill
                className="object-cover"
              />
            </div>

            {/* Bio Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ciao, sono Michela
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Designer e fondatrice di Khela Design. Credo in un design che unisce
                  forma e funzione, accessibile a tutti e sostenibile nel tempo.
                </p>
                <p>
                  Mi occupo di branding e design di prodotto, esplorando materiali come
                  cemento e plastica riciclata per creare soluzioni che rispettano
                  l'ambiente senza compromettere l'estetica.
                </p>
                <p>
                  Ogni progetto è un'opportunità per dimostrare che il design sostenibile
                  può essere bello, funzionale e accessibile a tutti.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 card-shadow">
                <div className="text-4xl mb-4">📍</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Graphic Design & Branding
                </h4>
                <p className="text-gray-600">
                  Identità visive per piccole attività locali con focus su autenticità
                  e sostenibilità
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 card-shadow">
                <div className="text-4xl mb-4">🪑</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Product Design
                </h4>
                <p className="text-gray-600">
                  Concept e prototipi di sedute, lampade e oggetti sperimentali con
                  materiali innovativi
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 card-shadow">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Material Research
                </h4>
                <p className="text-gray-600">
                  Ricerca su materiali alternativi e processi di produzione accessibili
                  e sostenibili
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 card-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Sustainable Design
                </h4>
                <p className="text-gray-600">
                  Approccio olistico al design con attenzione all'impatto ambientale
                  e sociale
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Lavoriamo insieme
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Interessato a collaborare? Sono sempre aperta a nuovi progetti e
              opportunità di creare qualcosa di significativo insieme.
            </p>
            <a
              href="mailto:info@kheladesign.com"
              className="inline-block px-8 py-4 bg-[hsl(var(--khela-accent))] text-white rounded-lg font-medium hover:opacity-90 transition-all hover:transform hover:translate-y-[-2px]"
            >
              Contattami
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
