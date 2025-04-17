import { FC } from 'react';
import fases from '../../assets/fases.png';

const Game:FC = () => {
  return (
    <div 
      className="relative min-h-screen game-container"
      style={{ 
        backgroundImage: `url(${fases})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
      >
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br p-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-6">

            {/* FASE 1 */}
            <div 
              className="bg-blue-100/50 rounded-2xl w-60 h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-2xl font-bold text-black/70">FASE 1</span>
            </div>

            {/* FASE 2 */}
            <div 
              className="bg-blue-100/50 rounded-2xl w-60 h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-2xl font-bold text-black/70">FASE 2</span>
            </div>

            {/* FASE 3 */}
            <div 
              className="bg-blue-100/50 rounded-2xl w-60 h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-2xl font-bold text-black/70">FASE 3</span>
            </div>

            {/* FASE 4 */}
            <div 
              className="bg-blue-100/50 rounded-2xl w-60 h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-2xl font-bold text-black/70">FASE 4</span>
            </div>

            {/* FASE 5 */}
            <div 
              className="bg-blue-100/50 rounded-2xl w-60 h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-2xl font-bold text-black/70">FASE 5</span>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default Game;