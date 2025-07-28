import "./styles.css";

export default function Filtro() {
  return (
    <div className="container-filtro">
      <ul>
        <li>Programação</li>
      </ul>
      <ul>
        <li>React</li>
      </ul>
      <ul>
        <li>Angular</li>
      </ul>
      <ul>
        <li>NodeJs</li>
      </ul>
      <ul>
        <li>VueJs</li>
      </ul>
      <div className="container-buttom">
        <button>Limpar Tudo</button>
      </div>
    </div>
  );
}
