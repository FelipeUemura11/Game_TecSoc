import { FC } from 'react';

const Home:FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4x1 font-bold text-gray-900 mb-4">
          Bem-vindo ao GameTecSoc
        </h1>
        <p className="text -x1 text-gray-600 max-w-2x1 mx-auto">
          Descubra os melhores jogos e mergulhe no universo dos games!
        </p>
      </section>
    </div>
  )
}

export default Home;