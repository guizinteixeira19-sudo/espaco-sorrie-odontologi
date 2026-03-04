import { ArrowRight } from 'lucide-react';

export default function BeforeAfter() {
  const results = [
    { id: 1, before: '😬', after: '😁', title: 'Clareamento' },
    { id: 2, before: '🦷', after: '✨', title: 'Restauração' },
    { id: 3, before: '😐', after: '😊', title: 'Ortodontia' },
    { id: 4, before: '🤐', after: '😃', title: 'Estética' },
  ];

  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Antes e Depois
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja as transformações incríveis que realizamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result) => (
              <div
                key={result.id}
                className="group bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-5xl transform group-hover:scale-90 transition-transform">
                    {result.before}
                  </div>
                  <ArrowRight className="text-amber-600 group-hover:translate-x-2 transition-transform" size={32} />
                  <div className="text-5xl transform group-hover:scale-110 transition-transform">
                    {result.after}
                  </div>
                </div>
                <h3 className="text-center text-xl font-bold text-gray-800">{result.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar seu sorriso?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Agende uma avaliação e descubra todo o potencial do seu sorriso
            </p>
            <a
              href="https://wa.me/5519953214847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-full hover:bg-stone-50 transition-all duration-300 shadow-lg text-lg font-semibold transform hover:scale-105"
            >
              Quero agendar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
