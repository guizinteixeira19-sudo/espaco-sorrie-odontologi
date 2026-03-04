import { Heart, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-500 mb-4">Espaço Sorriê</h3>
              <p className="text-gray-400 leading-relaxed">
                Cuidando do seu sorriso com excelência, tecnologia e acolhimento.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(19) 95321-4847</li>
                <li>contato@espacosorrie.com.br</li>
                <li>Rua Santa Cruz, 164 - Sala 04</li>
                <li>Paulínia/SP</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="flex items-center justify-center gap-2">
              Feito com <Heart className="text-amber-500 fill-amber-500" size={16} /> por Espaço Sorriê Odontologia
            </p>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
