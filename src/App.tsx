import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./componentes/sidebar/index";
import BarraDePesquisa from "./componentes/BarraDePesquisa/index.tsx";
import Filtro from "./componentes/Filtros/index.tsx";
import Card from "./componentes/card/index.tsx";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    console.log(dados);
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <ul className="lista-cards">
          {dados ? dados.map((item: any, index) => (
                <li key={index}>
                  <Card
                    id={item.id}
                    imagemUrl={item.imagem_capa}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    LinhasDeCodigo={item.linhas_de_codigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuarios}
                  />
                </li>
              )): null}
        </ul>
      </div>
    </div>
  );
}

export default App;
