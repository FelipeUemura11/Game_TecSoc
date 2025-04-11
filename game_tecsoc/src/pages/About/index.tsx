import { FC } from 'react';
import { Link } from 'react-router-dom';

const About:FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-600 to-green-400">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Sobre o GameTecSoc
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Onde a diversão encontra a consciência ambiental: Uma jornada educativa 
            pelo Rio Iguaçu para inspirar a próxima geração.
          </p>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <span className="text-4xl">🎯</span>
                <h2 className="text-2xl font-bold text-green-700 mt-4">Nossa Missão</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                Educar e conscientizar adolescentes sobre a importância da preservação 
                ambiental através de uma experiência interativa e divertida.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <span className="text-4xl">🌟</span>
                <h2 className="text-2xl font-bold text-green-700 mt-4">Nossa Visão</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                Ser referência em jogos educativos que promovam a consciência 
                ambiental e o amor pela natureza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Jogo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-6">
              🌱 Aventura pelo Rio Iguaçu
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Uma jornada interativa de aprendizado e descobertas
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                🎮 A Experiência
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Neste jogo de escolhas, os jogadores embarcam em uma jornada 
                interativa pelo Rio Iguaçu, tomando decisões que impactam 
                diretamente o meio ambiente, a fauna, a flora e as comunidades locais.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                🌿 Aprendizado Dinâmico
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cada escolha leva a uma nova trilha, garantindo que cada partida 
                seja única e rica em aprendizados sobre o rio e os impactos das 
                ações humanas no meio ambiente.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-yellow-700 mb-3">
                🎯 Nosso Objetivo
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Desenvolver a consciência ecológica de forma lúdica, ajudando os 
                jogadores a entenderem como suas decisões podem proteger ou 
                prejudicar a natureza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar sua aventura?
          </h2>
          <p className="text-xl mb-8">
            Junte-se a nós nesta jornada de descobertas e aprendizado!
          </p>
          <Link to="/">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold 
                            hover:bg-green-100 transition-colors duration-300">
              Começar Agora
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;