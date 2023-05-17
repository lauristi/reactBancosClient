import React, { useState } from 'react';
import axios from 'axios';
import Loader from './common/Loader';
import { Link } from 'react-router-dom';
import '../assets/css/DadosBanco.css'

interface DadosBanco {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

// React.FC = () =>  É necessario para que o arquivo typescript interprete os comandos JSX 
// Permite parametrizar as propos de componentes como button, por exemplo.
const Banco: React.FC = () => {

  const [codigo, setCodigo] = useState('');
  const [dados, setDados] = useState<DadosBanco | null>(null);
  const [loading, setLoading] = useState(false);

  const buscarDados = () => {
    setLoading(true);
    axios
      .get<DadosBanco>(`https://nodewebapi.onrender.com/api/brasilApi/banco/${codigo}`)
      .then(response => {
        setDados(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <p></p>
      <label>Digite o código do banco</label>
      <p></p>
      <div className="input-container">
        <input
          type="number"
          value={codigo}
          onChange={event => setCodigo(event.target.value)}
        />
        <button onClick={buscarDados}>Buscar</button>
      </div>

      <div>
        <Link to="/">retornar a página inicial</Link>
      </div>
      {/* Loader */}
      {loading ? <Loader /> : null}

      {dados ? (
        <div className="container">
          <div className="dado-banco">
            <h1>Dados do banco: {codigo}</h1>
            <p>ISPB..........: {dados.ispb}</p>
            <p>Nome..........: {dados.name}</p>
            <p>Código........: {dados.code}</p>
            <p>Nome completo.: {dados.fullName}</p>
          </div>
        </div>
      ) : null}

    </div>
  );
};

export default Banco;