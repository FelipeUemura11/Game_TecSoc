import { FC } from 'react';
import cataratas from '../../assets/cataratas.png';
import player1 from '../../assets/player1.png';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div 
      className="relative min-h-screen game-container"
      style={{ 
        backgroundImage: `url(${cataratas})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Conteúdo principal */}
      <section className="flex justify-center items-center min-h-screen px-4 py-6">
        <div className="flex flex-col items-center space-y-4 z-10">
          <div
            className="text-center p-6 rounded-lg"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h2 className="text-3xl font-jersey text-green-400 mb-6">Bem-vindo ao GameTecSoc</h2>
            <div className="flex flex-col space-y-3">
              <Link to="/fases" className="text-2xl font-jersey text-white hover:text-green-400 transition-colors">
                Jogar
              </Link>
              <Link to="/about" className="text-2xl font-jersey text-white hover:text-green-400 transition-colors">
                Sobre
              </Link>
              <Link to="/settings" className="text-2xl font-jersey text-white hover:text-green-400 transition-colors">
                Configurações
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Player1 colado na direita e embaixo */}
      <img
        src={player1}
        alt="player1"
        className="absolute right-0 bottom-0 w-100 h-auto"
      />
    </div>
  );
};

export default Home;