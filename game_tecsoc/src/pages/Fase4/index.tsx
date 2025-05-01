import React, { FC } from 'react'
import RioIguacuPoluido from '../../assets/RioIguacuPoluido.png'
import Edu from '../../assets/Edu.png'

const Fase4:FC = () => {
  return (
    <div
      className="relative game-container w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${RioIguacuPoluido})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <style>
        {`
          @keyframes appearAnimation {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .character-appear {
            animation: appearAnimation 1s ease-out forwards;
          }
        `}
      </style>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2" style={{ zIndex: 10 }}>
        <h2 className="text-white text-4xl font-jersey">FASE 4</h2>
      </div>

      <div className="absolute bottom-0 right-0 w-1/4 max-w-xs" style={{ zIndex: 10 }}>
        <img 
          src={Edu} 
          alt="Edu" 
          className="w-full h-auto character-appear" 
        />
      </div>

      <div className="absolute bottom-4 left-4 w-2/3 max-w-2xl bg-black/70 p-4 rounded-lg" style={{ zIndex: 10 }}>
        <h2 className="text-white text-xl font-bold mb-2">Eduardo</h2>
        <p className="text-white text-sm">
          "Meu Deus... olha a situacao do nosso rio nesta foto. Quando eu era menino, esse rio aqui era um espelho do céu. A gente nadava sem medo, pescava tilápia, dourado, e até tomava água direto dele. Era vida pura correndo entre as margens.
          Mas olha só agora… vê com teus próprios olhos: metade azul, metade ferrugem. Isso aí não é obra da natureza, não, é veneno que tão jogando no nosso rio."
        </p>
      </div>
    </div>
  );
}

export default Fase4;
