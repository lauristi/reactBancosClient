import React from 'react';
import { Link } from 'react-router-dom';

//# O componente home foi estuturado para ser a pagina inicial do front

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/banco">Banco</Link>
          </li>
          <li>
            <Link to="/bancos">Bancos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;