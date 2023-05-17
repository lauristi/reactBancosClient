import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Loader from './common/Loader'; 

interface Banco {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

// React.FC = () =>  É necessario para que o arquivo typescript interprete os comandos JSX 
const Bancos: React.FC = () => {
  
  const [bancos, setBancos] = useState<Banco[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<Banco[]>("https://nodewebapi.onrender.com/api/brasilApi/bancos")
      .then((res) => setBancos(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Bancos</h1>
       
       <div>
         <Link to="/">retornar a página inicial</Link>
       </div>   

      {/* Loader */}
      {loading ? <Loader /> : null}

        <table>
          <thead>
            <tr>
              <th>ISPB</th>
              <th>Nome</th>
              <th>Código</th>
              <th>Nome Completo</th>
            </tr>
          </thead>
          <tbody>
            {bancos.map((banco) => (
              <tr key={banco.ispb}>
                <td>{banco.ispb}</td>
                <td>{banco.name}</td>
                <td>{banco.code}</td>
                <td>{banco.fullName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    </div>
  );
}

export default Bancos;
