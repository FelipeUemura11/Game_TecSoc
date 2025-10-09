// Arquivo: src/components/GenericStage.tsx (Atualizado)

import { FC, useEffect, useMemo, useState } from "react";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

// Tipos
export type Choice = { label: string; toScreenId: string };
export type Result = { title: string; summary: string; effects?: string[]; nextPhaseId?: string };

export type GenericStageProps = {
  id: string;
  phaseTitle?: string;
  screenTitle?: string;
  backgroundUrl: string;
  characterUrl?: string;
  speaker?: string;
  texts: string[];
  choices?: Choice[];
  result?: Result;
  onPickChoice?: (toScreenId: string) => void;
  onFinishResult?: () => void;
};

const GenericStage: FC<GenericStageProps> = ({
  id,
  phaseTitle,
  screenTitle,
  backgroundUrl,
  characterUrl,
  speaker = "NARRADOR",
  texts,
  choices,
  result,
  onPickChoice,
  onFinishResult,
}) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [id]);

  const isLastText = idx === Math.max(0, texts.length - 1);

  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(tag)) return;
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIdx((v) => Math.min(texts.length - 1, v + 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIdx((v) => Math.max(0, v - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [texts.length]);

  const titleBadgeBase = "inline-flex flex-col items-center gap-1 rounded-2xl px-4 py-2 shadow-lg ring-1 ring-white/20 backdrop-blur-md bg-white/15 text-white";

  return (
    <main
      className="relative w-full min-h-dvh overflow-hidden text-white font-sans" // Adicionado font-sans para um fallback padrão
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby={`${id}-title`}
      role="document"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45rem_30rem_at_120%_-10%,rgba(59,130,246,0.15),transparent)]" />

      <div className="relative z-10 flex min-h-dvh flex-col justify-between p-4 sm:p-6 mr-1/2 sm:mr-1/3 md:mr-1/4">
        <header className="flex w-full justify-center pt-4">
          <div className={`${titleBadgeBase} text-center`} aria-live="polite">
            {phaseTitle && (
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-md tracking-wide">
                {phaseTitle}
              </h2>
            )}
            {screenTitle && (
              <span id={`${id}-title`} className="text-white/90 text-xs sm:text-sm md:text-base">
                {screenTitle}
              </span>
            )}
          </div>
        </header>

        <section className="pb-4">
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/15 bg-black/55 p-3 sm:p-4 md:p-5 shadow-2xl backdrop-blur-md" aria-live="polite">
            <h3 className="mb-2 text-sm sm:text-base md:text-lg font-bold tracking-wide text-white/95">
              {speaker}
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-white/95">
              “{texts[idx]}”
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {idx > 0 && !result && (
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIdx((v) => Math.max(0, v - 1))}
                  aria-label="Voltar"
                  title="Voltar"
                >
                  <ChevronLeft aria-hidden className="h-5 w-5" />
                  <span>Voltar</span>
                </button>
              )}

              {!isLastText && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setIdx((v) => Math.min(texts.length - 1, v + 1))}
                  aria-label="Continuar"
                  title="Continuar"
                >
                  <span>Continuar</span>
                  <ChevronRight aria-hidden className="h-5 w-5" />
                </button>
              )}

              {isLastText && !result && choices?.length ? (
                <div className="mt-2 grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                  {choices.map((c) => (
                    <button
                      key={c.toScreenId}
                      onClick={() => onPickChoice?.(c.toScreenId)}
                      className="btn btn-choice"
                      title={c.label}
                    >
                      {/* 1. A classe 'truncate' foi removida e 'text-left' adicionada para melhor alinhamento em múltiplas linhas */}
                      <span className="text-left">{c.label}</span>
                      <ChevronRight aria-hidden className="h-5 w-5 shrink-0" />
                    </button>
                  ))}
                </div>
              ) : null}

              {isLastText && result ? (
                <div className="mt-2 w-full">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                    <h4 className="text-lg font-bold text-white/95">{result.title}</h4>
                    <p className="mt-1 text-base text-white/90">{result.summary}</p>
                    {result.effects?.length ? (
                      <ul className="mt-3 space-y-1 list-inside list-disc text-sm text-white/85">
                        {result.effects.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <button onClick={onFinishResult} className="btn btn-success mt-3 w-full sm:w-auto" title="Avançar">
                    <span>Avançar</span>
                    <Check aria-hidden className="h-5 w-5" />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </div>

      {!!characterUrl && (
        <figure
          className={`pointer-events-none absolute bottom-0 right-0 z-0 w-1/2 max-w-xs sm:w-1/3 md:w-1/4 ${
            prefersReduced ? "" : "character-appear"
          }`}
          aria-hidden
        >
          <img
            src={characterUrl}
            alt="Personagem"
            className="h-auto w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
        </figure>
      )}

      <style>{`
        :root {
          --btn-border: rgba(255,255,255,0.28);
          --btn-shadow: 0 10px 22px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2);
          --btn-hover: linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
          --primary-from: #16a34a; /* green-600 */
          --primary-to: #15803d;   /* green-700 */
          --choice-from: #2563eb;  /* blue-600 */
          --choice-to: #1d4ed8;    /* blue-700 */
          --ghost-from: #6b7280;   /* gray-500 */
          --ghost-to: #4b5563;     /* gray-600 */
          --success-from: #16a34a; /* green-600 */
          --success-to: #15803d;   /* green-700 */
          --ring: rgba(96, 165, 250, 0.7); /* blue-400/70 */
        }
        @keyframes appearAnimation {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .character-appear { animation: appearAnimation 800ms ease-out forwards; }
        .btn {
          --from: var(--ghost-from); --to: var(--ghost-to);
          display: inline-flex; align-items: center; justify-content: center;
          gap: .5rem; white-space: nowrap; border-radius: 0.75rem;
          padding: .65rem 1rem; font-size: 1rem; font-weight: 600;
          background: linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.05));
          position: relative; border: 1px solid var(--btn-border);
          box-shadow: var(--btn-shadow); color: white;
          transform: translateY(0);
          transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
          isolation: isolate; backdrop-filter: blur(6px);
          text-align: center;
        }
        .btn::before {
          content: ""; position: absolute; inset: 0;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--from), var(--to));
          opacity: .5; z-index: -1;
        }
        .btn:hover { transform: translateY(-2px); background: var(--btn-hover); box-shadow: 0 12px 25px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2); }
        .btn:active { transform: translateY(0px) scale(.98); }
        .btn:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--ring); }
        .btn-primary { --from: var(--primary-from); --to: var(--primary-to); }
        .btn-success { --from: var(--success-from); --to: var(--success-to); }
        .btn-choice  { 
          --from: var(--choice-from); 
          --to: var(--choice-to); 
          width: 100%; 
          justify-content: space-between; 
          /* 2. Adicionado para permitir quebra de linha e ajuste de altura */
          white-space: normal;
          height: auto;
          line-height: 1.4;
        }
        .btn-ghost   { --from: var(--ghost-from); --to: var(--ghost-to); }
        @media (hover: none) { .btn:hover { transform: none; } }
      `}</style>
    </main>
  );
};

export default GenericStage;