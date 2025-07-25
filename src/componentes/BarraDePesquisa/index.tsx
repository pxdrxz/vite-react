import React, { useState } from 'react';
import './styles.css';

const BarraDePesquisa: React.FC = () => {
const [termoPesquisa, setTermoPesquisa] = useState<string>(''); //termoPesquisa -> Variavel de estado que guarda o valor digitado no `imput`
console.log(termoPesquisa);                                  //setTermoPesquisa -> Funcao que atualiza o estado

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermoPesquisa(event.target.value);
  };

  return (
    <input
      type="search"
      className="barra-pesquisa"
      placeholder="Digite o que você procura"
      value={termoPesquisa}
      onChange={handleChange}
    />
  );
};

export default BarraDePesquisa;
