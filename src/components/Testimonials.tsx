import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Fui super bem atendida, ambiente maravilhoso! A Dra. Larissa é muito atenciosa e cuidadosa.',
      rating: 5,
    },
    {
      name: 'João Santos',
      text: 'Excelente clínica! Profissionais competentes e muito carinhosos. Recomendo de olhos fechados.',
      rating: 5,
    },
    {
      name: 'Ana Paula',
      text: 'Melhor experiência odontológica que já tive. Ambiente lindo e equipe super preparada!',
      rating: 5,
    },
    {
      name: 'Carlos Oliveira',
      text: 'Atendimento impecável! Estava com muito medo, mas fui muito bem acolhido. Nota 10!',
      rating: 5,
    },
    {
      name: 'Juliana Costa',
      text: 'A Dra. Aline é incrível! Resultado do clareamento ficou perfeito. Muito satisfeita!',
      rating: 5,
    },
    {
      name: 'Ricardo Mendes',
      text: 'Clínica moderna, limpa e organizada. Profissionais altamente qualificados. Parabéns!',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-amber-50 to-stone-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              O Que Dizem Nossos Pacientes
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A satisfação de quem confia em nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                <Quote className="absolute top-4 right-4 text-amber-200" size={48} />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-amber-500 text-amber-500" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
