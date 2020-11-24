import React, {useState, useEffect, useContext} from 'react'
import Mensaje from '../componentes/Mensaje'
import TemasContexto from '../contexto/contexto'

function PerrosHook () {
    const [ imagen, setImagen ] = useState('')
    const [ contador, setContador ] = useState(0)
    const [ listo, setListo ] = useState(false)

    const {tema, cambiarTema} = useContext(TemasContexto)

    

    useEffect(()=>{
        setListo(false);
        fetch("https://dog.ceo/api/breed/hound/images/random")
            .then(res => res.json())
            .then(
                (result) => {
                    const { message } = result;

                    setImagen(message)
                    setListo(true)
                },
                (error) => {
                    console.log('Ha ocurrido un error')
                }
            )

            
    },[contador])

    const aumentar = () => {
        const valor = contador + 1;
        setContador(valor) 
    }

    

    return(
        <div style={tema}>
            <button type='button' onClick={cambiarTema}>Cambiar Tema</button>
            <h1>Perros Hooks</h1>
            <h1>Contador: {contador}</h1>
            <button type='button' onClick={aumentar}>Aumentar</button>
            { listo ?  <img src={imagen} alt=""/> : <Mensaje/>}
        </div>
    )
}

export default PerrosHook;