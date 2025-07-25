import Capa from './assets/Code editor.png';
import Chat from './assets/chat.svg';
import Code from './assets/code.svg';
import Share from './assets/share.svg';
import Icone from './assets/userphoto.png';
import './styles.css'

export default function Card() { 
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={Capa} alt="Imagem do Card"/>
            </div>
                <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>Titulo do post</h3>
                    <p>Resumo do post</p>    
                </div>
                <div className="conteudo__rodape">
                    <ul>
                        <li>
                            <img src={Code} alt="Códigos"/>
                            10
                        </li>
                        <li>    
                            <img src={Chat} alt="Mensagens"/>
                            15
                        </li>
                        <li>
                            <img src={Share} alt="Compartilhamentos"/>
                            18
                        </li>
                    </ul>
                    <div className="rodape__usuario">
                        <img src={Icone} alt="Icone do usuário"/>
                    </div>
                </div>
            </div>
        </article>
    )
}