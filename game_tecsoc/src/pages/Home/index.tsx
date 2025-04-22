import { FC } from 'react';
import cataratas from '../../assets/cataratas.png';
import folhas from '../../assets/folhas.png';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes float1 {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(100px, 50vh) rotate(180deg); }
            100% { transform: translate(200px, 100vh) rotate(360deg); }
          }
          @keyframes float2 {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-100px, 50vh) rotate(-180deg); }
            100% { transform: translate(-200px, 100vh) rotate(-360deg); }
          }
          @keyframes float3 {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(100px, 50vh) rotate(180deg); }
            100% { transform: translate(200px, 100vh) rotate(360deg); }
          }
          @keyframes float4 {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-100px, 50vh) rotate(-180deg); }
            100% { transform: translate(-200px, 100vh) rotate(-360deg); }
          }
          @keyframes float5 {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(100px, 50vh) rotate(-180deg); }
            100% { transform: translate(200px, 100vh) rotate(-360deg); }
          }
          @keyframes float6 {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-100px, 50vh) rotate(180deg); }
            100% { transform: translate(-200px, 100vh) rotate(360deg); }
          }
          @keyframes float7 {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(100px, 50vh) rotate(-180deg); }
            100% { transform: translate(200px, 100vh) rotate(-360deg); }
          }
          .floating-leaf {
            position: absolute;
            width: 250px;
            height: 250px;
            opacity: 0.8;
            pointer-events: none;
            z-index: 10;
          }
          .leaf1 { 
            animation: float1 6s linear infinite;
            left: 5%;
            top: 50%;
          }
          .leaf2 { 
            animation: float2 12s linear infinite;
            right: 5%;
            top: 1%;
          }
          .leaf3 { 
            animation: float3 10s linear infinite;
            left: 20%;
            top: 3%;
          }
          .leaf4 { 
            animation: float4 23s linear infinite;
            right: 20%;
            top: 30%;
          }
          .leaf5 { 
            animation: float5 17s linear infinite;
            left: 35%;
            top: 20%;
          }
          .leaf6 { 
            animation: float6 9s linear infinite;
            right: 35%;
            top: 15%;
          }
          .leaf7 { 
            animation: float7 20s linear infinite;
            left: 50%;
            top: 40%;
          }
        `}
      </style>

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
        <section className="flex justify-center items-center min-h-screen px-4 py-6 relative overflow-hidden">
          <div className="flex flex-col items-center space-y-4 z-10">
            <img src={folhas} alt="Floating leaf 1" className="floating-leaf leaf1" />
            <img src={folhas} alt="Floating leaf 2" className="floating-leaf leaf2" />
            <img src={folhas} alt="Floating leaf 3" className="floating-leaf leaf3"/>
            <img src={folhas} alt="Floating leaf 5" className="floating-leaf leaf5" />
            <img src={folhas} alt="Floating leaf 4" className="floating-leaf leaf4" />
            <img src={folhas} alt="Floating leaf 6" className="floating-leaf leaf6" />
            <img src={folhas} alt="Floating leaf 7" className="floating-leaf leaf7" />
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
      </div>
    </>
  );
};

export default Home;