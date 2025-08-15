import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header:FC = () => {
  return (
    <header className="bg-gradient-to-b from-green-600 to-green-400 shadow-lg">
        <nav className="container mx-auto px-5 py-5">
            <div className="flex items-center justify-between">
                <Link
                to="/"
                className="flex items-center gap-3 text-2xl font-jersey text-white hover:text-green-200 transition-colors">
                    <img src={logo} alt="logo" className="w-15 h-auto"/>
                    <h1 className="text-white text-4xl font-jersey">
                        GameTecSoc
                    </h1>
                </Link>

                <ul className="flex space-x-10">
                    <li>
                        <Link
                        to="/"
                        className="text-white hover:text-green-200 transition-colors font-medium">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/fases"
                        className="text-white hover:text-green-200 transition-colors font-medium">
                        Fases
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/about"
                        className="text-white hover:text-green-200 transition-colors font-medium">
                        Sobre
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;