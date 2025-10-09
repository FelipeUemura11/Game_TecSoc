// Arquivo: src/pages/Settings.tsx (NOVO)

import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetProgress } from '../../state/progress'
import { RefreshCw, AlertTriangle } from 'lucide-react'

const Settings: FC = () => {
  const navigate = useNavigate()

  const handleResetProgress = () => {
    const isConfirmed = window.confirm(
      'Você tem certeza que deseja apagar todo o seu progresso? Esta ação não pode ser desfeita.'
    )

    if (isConfirmed) {
      resetProgress()
      alert('Seu progresso foi resetado!')
      navigate('/fases') // Leva o usuário de volta para a tela de fases
    }
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <h1 className="text-4xl font-bold mb-8 text-white">Configurações</h1>

      <div className="bg-white/5 rounded-xl border border-white/10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Progresso do Jogo
        </h2>
        <p className="text-gray-300 mb-6">
          Aqui você pode gerenciar os dados salvos do seu jogo.
        </p>

        <div className="bg-red-900/40 border border-red-500/50 rounded-lg p-4 flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-red-300">Atenção</h3>
            <p className="text-red-300/90 mt-1">
              Resetar o progresso irá apagar todas as fases que você desbloqueou,
              fazendo com que você recomece do zero.
            </p>
          </div>
        </div>

        <button
          onClick={handleResetProgress}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white shadow-md transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <RefreshCw className="w-5 h-5" />
          Resetar Progresso
        </button>
      </div>
    </div>
  )
}

export default Settings