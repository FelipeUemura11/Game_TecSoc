import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App: FC = () => {
  return (
    // O BrowserRouter é o componente de mais alto nível para o roteamento.
    <BrowserRouter>
      {/* O AppRoutes agora fica sozinho aqui. Ele tem a lógica interna 
        para decidir qual página usa o Layout e qual não usa.
      */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;