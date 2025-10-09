// Arquivo: src/components/Header.tsx (atualizado)

import { FC } from 'react'
import { NavLink } from 'react-router-dom' // Usando NavLink para estilo ativo
import logo from '../../assets/LOGO.png'

const Header: FC = () => {
  const activeLinkStyle = {
    color: '#4ade80', // green-400
    textDecoration: 'underline',
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
          >
            <img src={logo} alt="logo" className="w-12 h-auto" />
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              GameTecSoc
            </h1>
          </NavLink>

          <ul className="flex items-center space-x-4 sm:space-x-8 text-base sm:text-lg">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-white hover:text-green-300 transition-colors font-medium"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fases"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-white hover:text-green-300 transition-colors font-medium"
              >
                Fases
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-white hover:text-green-300 transition-colors font-medium"
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-white hover:text-green-300 transition-colors font-medium"
              >
                Configurações
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header