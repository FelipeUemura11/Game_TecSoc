import { FC, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GenericStage from '../components/GenericStage'
import { story } from '../data/story'
import { isPhaseUnlocked, unlockPhase } from '../state/progress'

const PhaseEngine: FC = () => {
  const { phaseId = '1', screenId } = useParams()
  const navigate = useNavigate()

  // Fase atual
  const phase = useMemo(() => story.phases.find(p => p.id === phaseId), [phaseId])

  // Guard de desbloqueio
  if (!phase) return <div className="p-6 text-white">Fase inexistente.</div>
  if (!isPhaseUnlocked(phase.id)) return <div className="p-6 text-white">Fase bloqueada.</div>

  // Tela atual
  const currentScreenId = screenId ?? phase.startScreenId
  const screen = phase.screens.find(s => s.id === currentScreenId)
  if (!screen) return <div className="p-6 text-white">Tela não encontrada.</div>

  const goToScreen = (toId: string) => {
    navigate(`/fase/${phase.id}/${toId}`)
  }

  const handleFinishResult = () => {
    // Desbloqueia próxima fase (se houver)
    const nextId = screen.result?.nextPhaseId
    if (nextId) unlockPhase(nextId)
    // Se tiver próxima fase definida, manda pra ela, senão volta para /fases
    if (nextId) navigate(`/fase/${nextId}`)
    else navigate('/fases')
  }

  return (
    <GenericStage
      id={screen.id}
      phaseTitle={phase.title}
      screenTitle={screen.title}
      backgroundUrl={screen.backgroundUrl}
      characterUrl={screen.characterUrl}
      speaker={screen.speaker}
      texts={screen.texts}
      choices={screen.choices}
      result={screen.result}
      onPickChoice={goToScreen}
      onFinishResult={handleFinishResult}
    />
  )
}

export default PhaseEngine