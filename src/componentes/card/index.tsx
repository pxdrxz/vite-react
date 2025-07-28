//import Capa from './assets/Code editor.png';
import Chat from "./assets/chat.svg";
import Code from "./assets/code.svg";
import Share from "./assets/share.svg";
//import Icone from './assets/userphoto.png';
import "./styles.css";

export default function Card(
  id: string,
  imagemUrl: string,
  titulo: string,
  resumo: string,
  LinhasDeCodigo: string,
  compartilhamentos: string,
  comentarios: string,
  usuario: string
) {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="Imagem do Card" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="Códigos" />
              {LinhasDeCodigo}
            </li>
            <li>
              <img src={Chat} alt="Comentarios" />
              {comentarios}
            </li>
            <li>
              <img src={Share} alt="Compartilhamentos" />
              {compartilhamentos}
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario} alt="Icone do usuário" />
            {usuario}
          </div>
        </div>
      </div>
    </article>
  );
}
