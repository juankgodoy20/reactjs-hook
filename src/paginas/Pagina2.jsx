import React, {useState} from 'react'
import { useContador } from '../hooks/useContador'


function Pagina2 () {
    const { contador, setContador } = useContador(25)

    const aumentar = () => {
        const valor = contador + 1;
        setContador(valor)
    }

    return (
        <>
            <h1>Pagina2</h1>
            <h2>Contador: {contador}</h2>
            <button type='button' onClick={aumentar}>Cambiar</button>
        </>
    )
} 

export default Pagina2;