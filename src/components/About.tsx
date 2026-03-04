import { Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Cuidado personalizado e acolhedor para cada paciente',
    },
    {
      icon: Award,
      title: 'Excelência Profissional',
      description: 'Equipe qualificada e comprometida com resultados',
    },
    {
      icon: Sparkles,
      title: 'Tecnologia Moderna',
      description: 'Equipamentos de última geração para seu conforto',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Sobre a Clínica
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-amber-100 to-stone-100 rounded-3xl h-96 flex items-center justify-center shadow-lg">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🦷</div>
                  <p className="text-gray-600 italic">Seu sorriso é nossa prioridade</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Bem-vindo ao Espaço Sorriê
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Somos uma clínica odontológica dedicada a proporcionar cuidados excepcionais
                para você e sua família. Com uma equipe liderada pela{' '}
                <span className="font-semibold text-amber-600">Dra. Larissa Romero</span> e{' '}
                <span className="font-semibold text-amber-600">Dra. Aline Cordeiro</span>,
                oferecemos atendimento diferenciado em um ambiente confortável e acolhedor.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nossa missão é transformar sorrisos e elevar a autoestima de nossos pacientes,
                combinando expertise profissional com tecnologia de ponta e um toque humano especial.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
