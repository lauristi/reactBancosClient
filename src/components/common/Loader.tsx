
// Loader genrico para usar em todos os componentes
import React from 'react';
import loadingImage from '../../assets/images/gear.gif'

const Loader: React.FC = () => {
  return (
    <div>
      Carregando...(O primeiro acesso pode demorar um pouco mais...)
        <img src={loadingImage} alt="Loading" />
    </div>
  );
};

export default Loader;

