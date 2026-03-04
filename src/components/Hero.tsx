import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("estetica-do-sorriso-para-eventos-especiais-planejamento-estrategico-para-um-sorriso-perfeito")',
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Seu sorriso merece
              <span className="block text-amber-300 mt-2">cuidado especial</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Espaço Sorriê Odontologia – Excelência e acolhimento em cada atendimento
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5519953214847"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-lg font-semibold transform hover:scale-105"
              >
                <Calendar className="group-hover:rotate-12 transition-transform" size={24} />
                Agendar Consulta
              </a>
              <button
                onClick={() => {
                  const element = document.querySelector('#contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-white text-amber-600 px-8 py-4 rounded-full border-2 border-white hover:bg-amber-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 text-lg font-semibold"
              >
                <MapPin className="group-hover:bounce transition-transform" size={24} />
                Como Chegar
              </button>
            </div>

            <div className="mt-16 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg inline-block">
              <p className="text-gray-800 font-medium mb-2">
                <MapPin className="inline mr-2 text-amber-600" size={20} />
                Rua Santa Cruz, 164 - Sala 04
              </p>
              <p className="text-gray-700">
                Galeria Casa Verde - Nova Paulínia - Paulínia/SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
