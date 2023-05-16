import React, { useState } from 'react';
import axios from 'axios';

interface DadosBanco {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

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
      <input
        type="number"
        value={codigo}
        onChange={event => setCodigo(event.target.value)}
      />
      <button onClick={buscarDados}>Buscar</button>
      {loading ? <div>Carregando...(O primeiro acesso pode demorar um pouco mais...)</div> : null}
      {dados ? (
        <div>
          <h1>Dados</h1>
          <p>ISPB..........: {dados.ispb}</p>
          <p>Nome..........: {dados.name}</p>
          <p>Código........: {dados.code}</p>
          <p>Nome completo.: {dados.fullName}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Banco;