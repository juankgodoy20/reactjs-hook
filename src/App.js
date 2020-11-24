import {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pagina1 from './paginas/Pagina1' 
import Pagina2 from './paginas/Pagina2' 
import Inicio from './paginas/Inicio' 
import Perros from './paginas/Perros'
import PerrosHooks from './paginas/PerrosHooks'
import TemasContexto, {TEMAS} from './contexto/contexto'

function App() {
  const [tema, setTema] = useState(TEMAS.claro);

  const cambiarTema = () =>{
    setTema(() =>{
      return tema === TEMAS.claro ? TEMAS.oscuro : TEMAS.claro 
    })
  }


  return (
    <TemasContexto.Provider value={{ tema, cambiarTema }}>
      <BrowserRouter>
        <Switch>
          <Route path='/pagina1' component={Pagina1}/>
          <Route path='/pagina2' component={Pagina2}/>
          <Route path='/perros' component={Perros}/>
          <Route path='/perroshooks' component={PerrosHooks}/>
          <Route path='/' component={Inicio}/>
        </Switch>
      </BrowserRouter>
    </TemasContexto.Provider>
  );
}

export default App;
