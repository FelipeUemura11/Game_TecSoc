// Arquivo: src/routes/AppRoutes.tsx (atualizado)

import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Fases from '../pages/Fases'
import Settings from '../pages/Settings' // ROTA NOVA
import PhaseEngine from '../engine/PhaseEngine'
import Layout from '../components/Layout' // Importando o Layout

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/settings" element={<Layout><Settings /></Layout>} />

      {/* ===== MUDANÇA AQUI: Adicionando o Layout às rotas de jogo ===== */}
      
      {/* Envolvemos a tela de seleção de Fases com o Layout */}
      <Route 
        path="/fases" 
        element={
          <Layout>
            <Fases />
          </Layout>
        } 
      />

      {/* Envolvemos o motor do jogo com o Layout */}
      <Route 
        path="/fase/:phaseId" 
        element={
          <Layout>
            <PhaseEngine />
          </Layout>
        } 
      />
      <Route 
        path="/fase/:phaseId/:screenId" 
        element={
          <Layout>
            <PhaseEngine />
          </Layout>
        } 
      />

      <Route path="/fase" element={<Navigate to="/fases" replace />} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;