import { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface LayoutProps{
    children: React.ReactNode;
}

const Layout:FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow">
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout