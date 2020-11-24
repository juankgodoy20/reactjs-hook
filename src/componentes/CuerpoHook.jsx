import React, {useState} from 'react'

function CuerpoHook () {
    const [contador, setContador] = useState(0)
    const [nombre, setNombre] = useState('')

    const aumentar = () => {
        const numero = contador + 1;
        setContador(numero);
    }

    const manejarNombre = (evento) => {
        const valor = evento.target.value
        setNombre(valor)
    }

    return(
        <>
            <h1>Cotador: { contador }</h1>
            <h1>Nombre: { nombre }</h1>
            <input type="text" onChange={manejarNombre} />
            <button type='button' onClick={aumentar}>Aumentar</button>
        </>
    )
}

export default CuerpoHook;