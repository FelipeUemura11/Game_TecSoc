import { FC } from 'react'
import { Link } from 'react-router-dom'
import { story } from '../../data/story'
import { isPhaseUnlocked } from '../../state/progress'

const Fases: FC = () => {
  return (
    <div className="relative min-h-screen game-container bg-gradient-to-br from-emerald-900 to-emerald-700">
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-4">
          {story.phases.map((p) => {
            const unlocked = isPhaseUnlocked(p.id)
            return (
              <div key={p.id} className="flex justify-center">
                {unlocked ? (
                  <Link to={`/fase/${p.id}`} className="flex justify-center w-full">
                    <div
                      className="bg-white/10 backdrop-blur rounded-2xl w-full max-w-[240px] h-32 sm:h-36 flex items-center justify-center hover:scale-105 transition-all cursor-pointer border border-white/20"
                    >
                      <span className="text-xl sm:text-2xl font-bold text-white drop-shadow">{p.title}</span>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="bg-black/30 rounded-2xl w-full max-w-[240px] h-32 sm:h-36 flex items-center justify-center border border-white/10 opacity-60"
                    title="Conclua a fase anterior para desbloquear"
                  >
                    <span className="text-xl sm:text-2xl font-bold text-white/60">{p.title}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Fases