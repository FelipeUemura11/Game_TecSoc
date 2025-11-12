import { FC, useState, useEffect } from 'react'; // 1. Importar useState e useEffect
import { Link } from 'react-router-dom';
import { story } from '../../data/story';
import { loadProgress } from '../../state/progress'; // 2. Importar loadProgress em vez de isPhaseUnlocked
import { Lock } from 'lucide-react';

const Fases: FC = () => {
  const mapaParanaUrl = ''; // Substitua pela sua URL

  // 3. Criar um estado para guardar as fases desbloqueadas
  const [unlockedPhaseIds, setUnlockedPhaseIds] = useState<string[]>([]);

  // 4. Usar useEffect para carregar o progresso do localStorage QUANDO o componente montar
  useEffect(() => {
    const progress = loadProgress();
    setUnlockedPhaseIds(progress.unlockedPhaseIds);
  }, []); // O array vazio [] garante que isso só roda uma vez, quando a página carrega

  return (
    <main
      className="relative w-full min-h-dvh overflow-hidden text-white"
      style={{
        backgroundImage: `url(${mapaParanaUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex min-h-dvh flex-col items-center p-4 sm:p-8">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Selecione a Fase
          </h1>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {story.phases.map((phase, index) => {
            const isUnlocked = unlockedPhaseIds.includes(phase.id);

            if (!isUnlocked) {
              return (
                <div
                  key={phase.id}
                  className="bg-black/40 rounded-2xl w-36 h-40 sm:w-40 sm:h-44 flex flex-col items-center justify-center p-3 border border-white/10 opacity-60 cursor-not-allowed"
                  title="Conclua a fase anterior para desbloquear"
                >
                  <Lock className="w-10 h-10 text-white/50 mb-3" />
                  <h2 className="text-base sm:text-lg font-semibold text-white/50 text-center">
                    {phase.title}
                  </h2>
                </div>
              );
            }

            return (
              <Link
                key={phase.id}
                to={`/fase/${phase.id}`}
                className="group rounded-2xl w-36 h-40 sm:w-40 sm:h-44 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-2xl p-3 flex flex-col justify-between items-center border border-white/20 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30">
                  <div className="absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-xl border-2 border-white/50 shadow-md">
                    {index + 1}
                  </div>
                  <div />
                  <h2 className="text-base sm:text-lg font-semibold text-white text-center drop-shadow-md">
                    {phase.title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Fases;
