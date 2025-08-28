import { FC, useState, useEffect } from 'react'

type Choice = { label: string; toScreenId: string }

type Result = { title: string; summary: string; effects?: string[]; nextPhaseId?: string }

type GenericStageProps = {
  id: string // screenId
  phaseTitle?: string
  screenTitle?: string
  backgroundUrl: string
  characterUrl?: string
  speaker?: string
  texts: string[]
  choices?: Choice[]
  result?: Result
  onPickChoice?: (toScreenId: string) => void
  onFinishResult?: () => void // chamado quando usuário finaliza a tela de resultado
}

const GenericStage: FC<GenericStageProps> = ({
  id,
  phaseTitle,
  screenTitle,
  backgroundUrl,
  characterUrl,
  speaker = 'NARRADOR',
  texts,
  choices,
  result,
  onPickChoice,
  onFinishResult
}) => {
  const [idx, setIdx] = useState(0)

  // Reset idx to 0 whenever the screen id changes
  useEffect(() => {
    setIdx(0)
  }, [id])

  const isLastText = idx === texts.length - 1

  return (
    <div
      className="relative game-container w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-labelledby={`${id}-title`}
      role="document"
    >
      <style>
        {`
          @keyframes appearAnimation { 0% { opacity: 0; transform: translateX(50px); } 100% { opacity: 1; transform: translateX(0); } }
          .character-appear { animation: appearAnimation 1s ease-out forwards; }
          .responsive-container { display: flex; flex-direction: column; justify-content: space-between; min-height: 100dvh; padding: 1rem; }
          @media (min-width: 768px) { .responsive-container { flex-direction: row; align-items: flex-end; } }
          .text-box { max-width: 100%; word-wrap: break-word; }
        `}
      </style>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-center">
        {phaseTitle && <h2 className="text-white text-2xl md:text-4xl font-jersey drop-shadow">{phaseTitle}</h2>}
        {screenTitle && <p id={`${id}-title`} className="text-white/90 text-sm md:text-base">{screenTitle}</p>}
      </div>

      <div className="responsive-container">
        <section className="absolute bottom-4 left-4 w-[calc(100%-2rem)] md:w-2/3 max-w-2xl bg-black/70 p-3 sm:p-4 rounded-lg text-box z-10" aria-live="polite">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2">{speaker}</h3>
          <p className="text-white text-xs sm:text-sm md:text-base">“{texts[idx]}”</p>

          {/* Área de botões */}
          <div className="mt-3 flex flex-wrap gap-2">
            {idx > 0 && !result && (
              <button
                type="button"
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                onClick={() => setIdx((v) => Math.max(0, v - 1))}
              >
                Voltar
              </button>
            )}

            {/* Botão Continuar aparece enquanto ainda há falas; no último passo ele some e dá lugar ao resultado */}
            {result && !isLastText && (
              <button
                type="button"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={() => setIdx((v) => Math.min(texts.length - 1, v + 1))}
              >
                Continuar
              </button>
            )}

            {/* Botão Continuar aparece enquanto ainda há falas; no último passo ele some e dá lugar às choices */}
            {!result && !isLastText && (
              <button
                type="button"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={() => setIdx((v) => Math.min(texts.length - 1, v + 1))}
              >
                Continuar
              </button>
            )}

            {/* Choices aparecem apenas no fim do texto */}
            {!result && choices?.length && isLastText && (
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                {choices.map((c) => (
                  <button
                    key={c.toScreenId}
                    onClick={() => onPickChoice?.(c.toScreenId)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md w-full sm:w-auto"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}

            {/* Tela de resultado só aparece no último texto */}
            {result && isLastText && (
              <div className="w-full">
                <div className="bg-white/10 border border-white/20 rounded-md p-3 mb-2">
                  <h4 className="text-white font-semibold">{result.title}</h4>
                  <p className="text-white/90 text-sm mt-1">{result.summary}</p>
                  {result.effects?.length ? (
                    <ul className="list-disc list-inside text-white/80 text-sm mt-2">
                      {result.effects.map((e) => (<li key={e}>{e}</li>))}
                    </ul>
                  ) : null}
                </div>
                <button
                  onClick={onFinishResult}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                >
                  Avançar
                </button>
              </div>
            )}
          </div>
        </section>

        {!!characterUrl && (
          <div className="absolute bottom-0 right-0 w-1/2 sm:w-1/3 md:w-1/4 max-w-xs z-10">
            <img src={characterUrl} alt="Personagem" className="w-full h-auto character-appear" />
          </div>
        )}
      </div>
    </div>
  )
}

export default GenericStage