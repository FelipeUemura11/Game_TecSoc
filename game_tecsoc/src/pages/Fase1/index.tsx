import React, { FC } from 'react'
import RioIguacuPoluido from '../../assets/RioIguacuPoluido.png'
import person1 from '../../assets/person1.png'

const Fase1:FC = () => {
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
        <h2 className="text-white text-4xl font-jersey"> FASE 1</h2>
      </div>

      <img 
        src={person1} 
        alt="person1" 
        className="absolute bottom-0 left-300 w-100 h-150 character-appear" 
        style={{ zIndex: 10 }} 
      />
      <div className="absolute bottom-10 left-25 bg-black/70 w-290 h-50 border-2 border-black/85" style={{ zIndex: 10 }}>
        <h2 className="text-white text-xl font-bold"> BALAO DE FALA </h2>
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices dui vitae dignissim scelerisque. Cras arcu tellus, dapibus quis mollis eget, ullamcorper sit amet magna.
            Praesent vulputate varius sapien, a tempus diam pellentesque at. Phasellus interdum leo eu ante mattis, eu consequat lectus maximus. Proin iaculis justo ultrices mauris hendrerit, sed lacinia metus tristique.
            Ut nec aliquet enim. Nam eu molestie leo, at lacinia eros. Aliquam erat volutpat. Fusce et eros vel tellus vulputate pretium sit amet et felis.
            Morbi blandit eget mauris vitae pulvinar. Aenean dictum, ex non blandit elementum, enim est molestie nisl, quis euismod tortor sem eget nisl. Donec molestie tincidunt nunc.
            In enim tortor, bibendum a lorem ornare, tincidunt blandit sem. Curabitur sagittis enim nibh, a finibus risus luctus eu. Etiam commodo sit amet turpis ac volutpat. </p>
      </div>

    </div>
  );
}

export default Fase1;
