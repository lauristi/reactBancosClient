
// Loader genrico para usar em todos os componentes
import React from 'react';
import loadingImage from '../../assets/images/gear.gif'
import '../../assets/css/Loader.css'; 

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader-message">Carregando...(O primeiro acesso pode demorar um pouco mais...)</div>
      <img className="loader-image" src={loadingImage} alt="Loading" />
    </div>  );
};

export default Loader;

