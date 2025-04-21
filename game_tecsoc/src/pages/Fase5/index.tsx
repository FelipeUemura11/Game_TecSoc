import React, { FC } from 'react'
import RioIguacuPoluido from '../../assets/RioIguacuPoluido.png'
import person1 from '../../assets/person1.png'

const Fase5:FC = () => {
  return (
    <div
      className="relative game-container"
      style={{
        backgroundImage: `url(${RioIguacuPoluido})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%'
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

      <div className="absolute top-10 left-50" style={{ zIndex: 10 }}>
        <h2 className="text-white text-4xl font-jersey"> FASE 5</h2>
      </div>

      <img 
        src={person1} 
        alt="person1" 
        className="absolute bottom-0 right-0 w-auto h-auto character-appear" 
        style={{ zIndex: 10 }} 
      />
      <div className="absolute bottom-10 left-25 bg-black/70 w-350 h-auto border-2 border-black/85" style={{ zIndex: 10 }}>
        <h2 className="text-white text-xl font-bold"> BALAO DE FALA </h2>
        <p className="text-white">"Meu Deus... olha a situacao do nosso rio nesta foto. Quando eu era menino, esse rio aqui era um espelho do céu. A gente nadava sem medo, pescava tilápia, dourado, e até tomava água direto dele. Era vida pura correndo entre as margens.
Mas olha só agora… vê com teus próprios olhos: metade azul, metade ferrugem. Isso aí não é obra da natureza, não, é veneno que tão jogando no nosso rio. É esgoto, é lixo industrial, é descuido. Tudo vindo lá de cima, das cidades grandes, das fábricas que nem olham pra trás pra ver o estrago que deixam.
Essa água barrenta, avermelhada, não é só feia não — ela mata. Mata peixe, mata planta, mata o futuro da nossa gente. O barco que você tá vendo ali? Quase não pesca mais. E quem vive da pesca tá perdendo tudo.
É triste, meu filho. O rio tá doente, e se a gente não cuidar dele, logo é a gente que adoece junto." </p>
      </div>

    </div>
  );
}

export default Fase5;
