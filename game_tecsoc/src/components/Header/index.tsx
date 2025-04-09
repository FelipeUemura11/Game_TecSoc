import { FC } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png';

const Header:FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-500 shadow-lg">
        <nav className="container mx-auto px-5 py-5">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img src={LOGO} alt="LOGO" className="w-17 h-17" />
                </Link>
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/" className="text-white hover:text-green-100 transition-colors font-medium">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-green-100 transition-colors font-medium">
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