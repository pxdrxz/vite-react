import Logo from '../assets/Logo.svg';
import Feed from '../assets/Feed.svg';
import Logout from '../assets/Logout.svg';
import Perfil from '../assets/account_circle.svg';
import Info from '../assets/info.svg';
// import LogoName from './assets/codeconnect.svg';

export default function Sidebar() {    //definimos que deste arquivo sera exportada a função Sidebar
    return (                                //componentes que sao formados por uma função 
        <aside>
            <img src={Logo} alt='Logo do CodeConnect' />
            <nav>
                <ul>
                    <li>
                        <a href='#'>Publicar</a>
                    </li>
                    <li>
                        <a href='#'>
                        <img src={Perfil} alt='' /> 
                        <span>Perfil</span>
                    </a>
                </li>
                    <li>
                    <a href='#'>
                        <img src={Feed} alt='' /> 
                        <span>Feed</span>
                    </a>
                </li>
                    <li>
                        <a href='#'>
                            <img src={Info} alt='' />
                            <span>Sobre Nós</span>
                        </a>
                    </li>
                        <li>
                            <a href='#'>
                            <img src={Logout} alt='' />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

