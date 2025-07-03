import Logo from './assets/ccsymbol.svg';
import Feed from './assets/feed.svg';
import Logout from './assets/logout.svg';
import Perfil from './assets/perfil.svg';
import Info from './assets/info.svg';
import LogoName from './assets/codeconnect.svg';

export default function Sidebar () {    //definimos que deste arquivo sera exportada a função Sidebar
    return (                                //componentes que sao formados por uma função
        <>
            <aside>
                <img src={Logo} alt='Logo do CodeConnect' />
                <nav>
                    <ul>
                        <li>
                            <a href='#'>Publicar</a>
                        </li>
                        <li>
                            <a href='#'>
                            <img src={Perfil} alt=''/> 
                            <span>Perfil</span>
                        </a>
                    </li>
                        <li>
                        <a href='#'>
                            <img src={Feed} alt=''/> 
                            <span>Feed</span>
                        </a>
                    <li/>
                    <li>
                        <a href='#'>
                            <img src={Info} alt=''/>
                            <span>Info</span>
                        </a>
                        <li>
                            <a href='#'/>
                            <img src={Logout} alt=''/>
                            <span>Logout</span>
                        </li>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}