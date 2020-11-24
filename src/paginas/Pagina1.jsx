import React, {useContext} from 'react'
import { withRouter } from 'react-router-dom';
import Cuerpo from '../componentes/Cuerpo'
import TemasContexto from '../contexto/contexto'

function Pagina1 (props) {

    const { history } = props;
    const {tema, cambiarTema} = useContext(TemasContexto)

    const irPagina2 = () => {
        history.push('/pagina2')
    }

    return(
        <div style={tema}>
            <button type='button' onClick={cambiarTema}>Cambiar Tema</button>
            <h1>Pagina1</h1>  
            <button type='button' onClick={irPagina2} >Ir a pagina 2</button>  
            <Cuerpo />
        </div>
    ) 
} 

export default withRouter(Pagina1);