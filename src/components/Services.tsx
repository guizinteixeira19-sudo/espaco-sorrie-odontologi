import { Smile, Sparkles, Shield, Braces, Palette, Stethoscope } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Clínica Geral',
      description: 'Atendimento completo para toda a família com cuidado e atenção',
    },
    {
      icon: Shield,
      title: 'Limpeza e Prevenção',
      description: 'Manutenção da saúde bucal e prevenção de doenças',
    },
    {
      icon: Sparkles,
      title: 'Clareamento Dental',
      description: 'Tecnologia avançada para um sorriso mais branco e radiante',
    },
    {
      icon: Braces,
      title: 'Ortodontia',
      description: 'Alinhamento perfeito para seu sorriso com aparelhos modernos',
    },
    {
      icon: Palette,
      title: 'Estética Dental',
      description: 'Procedimentos estéticos para harmonizar seu sorriso',
    },
    {
      icon: Smile,
      title: 'Restaurações',
      description: 'Recuperação de dentes com materiais de alta qualidade',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de tratamentos odontológicos com qualidade e carinho
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/5519953214847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105"
            >
              Agende sua Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
