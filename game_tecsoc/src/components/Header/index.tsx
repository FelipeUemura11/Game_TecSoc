import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';

const Header:FC = () => {
  return (
    <header className="bg-gradient-to-r from-black to-gray-800 shadow-lg">
        <nav className="container mx-auto px-5 py-5">
            <div className="flex items-center justify-between">
                <Link
                to="/"
                className="text-2xl font-jersey text-white hover:text-green-200 transition-colors">
                    <img src={logo} alt="logo" className="w-15 h-auto"/>
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
                        to="/about"
                        className="text-white hover:text-green-200 transition-colors font-medium">
                        Sobre
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/contact"
                        className="text-white hover:text-green-200 transition-colors font-medium">
                        Contato
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;