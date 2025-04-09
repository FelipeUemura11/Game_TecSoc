import { FC } from 'react'

const Footer:FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-600 shadow-lg">
        <div className="container mx-auto my-2 px-4 py-2">
            <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-400">
                <p>&copy; 2025 GameTecSoc. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;