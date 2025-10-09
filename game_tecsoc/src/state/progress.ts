// Arquivo: src/state/progress.ts (sem alterações)

const KEY = 'gametecsoc_progress_v1'

export type Progress = {
  unlockedPhaseIds: string[]
}

// A primeira fase ('1') já vem desbloqueada por padrão.
const DEFAULT_PROGRESS: Progress = { unlockedPhaseIds: ['1'] }

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return DEFAULT_PROGRESS
    const parsed = JSON.parse(raw)
    // Validação para garantir que os dados salvos são válidos
    if (!Array.isArray(parsed.unlockedPhaseIds)) return DEFAULT_PROGRESS
    return parsed
  } catch {
    return DEFAULT_PROGRESS
  }
}

export function saveProgress(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p))
}

export function isPhaseUnlocked(phaseId: string): boolean {
  return loadProgress().unlockedPhaseIds.includes(phaseId)
}

export function unlockPhase(phaseId: string) {
  const p = loadProgress()
  if (!p.unlockedPhaseIds.includes(phaseId)) {
    p.unlockedPhaseIds.push(phaseId)
    saveProgress(p)
  }
}

export function resetProgress() {
  saveProgress(DEFAULT_PROGRESS)
}