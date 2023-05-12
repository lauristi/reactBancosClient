import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banco = () => {
  const [banco, setBanco] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/brasilApi/bancos/104')
      .then(response => {
        setBanco(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Banco</h1>
      <div>
        <Link to="/">retornar a página inicial</Link>
      </div>   
      {banco.map(banco => (
        <div key={banco.code}>
          <h2>{banco.fullName}</h2>
          <p>Código: {banco.ispb}</p>
          <p>Código: {banco.name}</p>
        </div>
      ))}
    </div>

  );
};

export default Banco;