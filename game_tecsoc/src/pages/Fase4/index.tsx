import { FC } from 'react'
import RioIguacuPoluido from '../../assets/RioIguacuPoluido.png'
import EduInverted from '../../assets/EduInverted.png'

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
          .responsive-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding: 1rem;
          }
          @media (min-width: 768px) {
            .responsive-container {
              flex-direction: row;
              align-items: flex-end;
            }
          }
          .text-box {
            max-width: 100%;
            word-wrap: break-word;
          }
        `}
      </style>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2" style={{ zIndex: 10 }}>
        <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-jersey">FASE 4</h2>
      </div>

      <div className="responsive-container">
        <div className="absolute bottom-4 left-4 w-[calc(100%-2rem)] md:w-2/3 max-w-2xl bg-black/70 p-3 sm:p-4 rounded-lg text-box" style={{ zIndex: 10 }}>
          <h2 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2">Eduardo</h2>
          <p className="text-white text-xs sm:text-sm md:text-base">
            "Meu Deus... olha a situacao do nosso rio nesta foto. Quando eu era menino, esse rio aqui era um espelho do céu. A gente nadava sem medo, pescava tilápia, dourado, e até tomava água direto dele. Era vida pura correndo entre as margens.
            Mas olha só agora… vê com teus próprios olhos: metade azul, metade ferrugem. Isso aí não é obra da natureza, não, é veneno que tão jogando no nosso rio."
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            Continuar
          </button>
        </div>

        <div className="absolute bottom-0 right-0 w-1/2 sm:w-1/3 md:w-1/4 max-w-xs" style={{ zIndex: 10 }}>
          <img 
            src={EduInverted} 
            alt="EduInverted" 
            className="w-full h-auto character-appear" 
          />
        </div>
      </div>
    </div>
  );
}

export default Fase4;
