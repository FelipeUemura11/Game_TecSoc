const KEY = 'webnovel_progress_v1'


export type Progress = {
unlockedPhaseIds: string[]
}


const DEFAULT_PROGRESS: Progress = { unlockedPhaseIds: ['1'] }


export function loadProgress(): Progress {
try {
const raw = localStorage.getItem(KEY)
if (!raw) return DEFAULT_PROGRESS
const parsed = JSON.parse(raw)
// sanity
if (!Array.isArray(parsed.unlockedPhaseIds)) return DEFAULT_PROGRESS
return parsed
} catch {
return DEFAULT_PROGRESS
}
}


export function saveProgress(p: Progress) {
localStorage.setItem(KEY, JSON.stringify(p))
}


export function isPhaseUnlocked(phaseId: string) {
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