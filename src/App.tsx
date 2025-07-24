import './App.css';
import Sidebar from './componentes/sidebar/index';
import BarraDePesquisa from './componentes/BarraDePesquisa/index.tsx';
import Filtro from './componentes/Filtros/index.tsx';
import Card from './componentes/card/index.tsx';

function App() {
 
  return ( 
    <div className='container'>
      <Sidebar/>
      <div>
        <BarraDePesquisa/>
        <Filtro/>  
        <Card/>
    </div>
  </div>
  )
}

export default App


