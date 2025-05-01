import { FC } from 'react';
import jogar from '../../assets/jogar.png';
import { Link } from 'react-router-dom';

const Fases:FC = () => {
  return (
    <div 
      className="relative min-h-screen game-container"
      style={{ 
        backgroundImage: `url(${jogar})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-4">
          {/* FASE 1 */}
          <Link to='/fase1' className="flex justify-center">
            <div 
              className="bg-blue-100/50 rounded-2xl w-full max-w-[240px] h-32 sm:h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-xl sm:text-2xl font-bold text-black/70">FASE 1</span>
            </div>
          </Link>

          {/* FASE 2 */}
          <Link to='/fase2' className="flex justify-center">
            <div 
              className="bg-blue-100/50 rounded-2xl w-full max-w-[240px] h-32 sm:h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-xl sm:text-2xl font-bold text-black/70">FASE 2</span>
            </div>
          </Link>

          {/* FASE 3 */}
          <Link to='/fase3' className="flex justify-center">
            <div 
              className="bg-blue-100/50 rounded-2xl w-full max-w-[240px] h-32 sm:h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-xl sm:text-2xl font-bold text-black/70">FASE 3</span>
            </div>
          </Link>

          {/* FASE 4 */}
          <Link to='/fase4' className="flex justify-center">
            <div 
              className="bg-blue-100/50 rounded-2xl w-full max-w-[240px] h-32 sm:h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-xl sm:text-2xl font-bold text-black/70">FASE 4</span>
            </div>
          </Link>

          {/* FASE 5 */}
          <Link to='/fase5' className="flex justify-center">
            <div 
              className="bg-blue-100/50 rounded-2xl w-full max-w-[240px] h-32 sm:h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              style={{ boxShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <span className="text-xl sm:text-2xl font-bold text-black/70">FASE 5</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Fases;