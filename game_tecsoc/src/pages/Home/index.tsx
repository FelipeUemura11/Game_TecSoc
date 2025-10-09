// Arquivo: src/pages/Home.tsx (atualizado)

import { FC } from 'react'
import { Link } from 'react-router-dom'
import cataratas from '../../assets/cataratas.png'
import folhas from '../../assets/folhas.png'

const Home: FC = () => {
  // A animação das folhas foi mantida, pois é um elemento de design único.
  return (
    <>
      <style>
        {`
          @keyframes float1 { 0% { transform: translate(0, -5vh) rotate(0deg); opacity: 0; } 50% { opacity: 0.8; } 100% { transform: translate(20vw, 105vh) rotate(360deg); opacity: 0; } }
          @keyframes float2 { 0% { transform: translate(0, -5vh) rotate(0deg); opacity: 0; } 50% { opacity: 0.8; } 100% { transform: translate(-20vw, 105vh) rotate(-360deg); opacity: 0; } }
          @keyframes float3 { 0% { transform: translate(0, -5vh) rotate(0deg); opacity: 0; } 50% { opacity: 0.7; } 100% { transform: translate(15vw, 105vh) rotate(270deg); opacity: 0; } }
          @keyframes float4 { 0% { transform: translate(0, -5vh) rotate(0deg); opacity: 0; } 50% { opacity: 0.9; } 100% { transform: translate(-25vw, 105vh) rotate(-400deg); opacity: 0; } }
          .floating-leaf { position: absolute; width: 150px; height: auto; pointer-events: none; z-index: 1; }
          .leaf1 { animation: float1 15s linear infinite; left: 10%; animation-delay: 0s; }
          .leaf2 { animation: float2 18s linear infinite; right: 10%; animation-delay: 3s; }
          .leaf3 { animation: float3 20s linear infinite; left: 40%; animation-delay: 7s; }
          .leaf4 { animation: float4 16s linear infinite; left: 75%; animation-delay: 10s; }
       `}
      </style>

      <div
        className="relative min-h-screen game-container"
        style={{
          backgroundImage: `url(${cataratas})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Folhas flutuantes */}
        <img src={folhas} alt="" className="floating-leaf leaf1" />
        <img src={folhas} alt="" className="floating-leaf leaf2" />
        <img src={folhas} alt="" className="floating-leaf leaf3" />
        <img src={folhas} alt="" className="floating-leaf leaf4" />

        {/* Conteúdo principal */}
        <section className="relative z-10 flex justify-center items-center min-h-screen p-4">
          <div className="bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-8 sm:p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Bem-vindo ao GameTecSoc
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <Link
                to="/fases"
                className="w-full sm:w-64 text-center text-xl font-semibold text-white bg-green-600 py-3 px-6 rounded-lg shadow-lg transition-all hover:bg-green-700 hover:scale-105"
              >
                Jogar
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-64 text-center text-xl font-semibold text-white bg-white/10 py-3 px-6 rounded-lg transition-colors hover:bg-white/20"
              >
                Sobre
              </Link>
              <Link
                to="/settings"
                className="w-full sm:w-64 text-center text-xl font-semibold text-white bg-white/10 py-3 px-6 rounded-lg transition-colors hover:bg-white/20"
              >
                Configurações
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home