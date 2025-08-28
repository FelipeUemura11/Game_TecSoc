import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Fases from '../pages/Fases'
import PhaseEngine from '../engine/PhaseEngine'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fases" element={<Fases />} />

      {/* Fase com screen opcional */}
      <Route path="/fase/:phaseId" element={<PhaseEngine />} />
      <Route path="/fase/:phaseId/:screenId" element={<PhaseEngine />} />

      {/* Atalho caso alguém acesse /fase sem id */}
      <Route path="/fase" element={<Navigate to="/fases" replace />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes