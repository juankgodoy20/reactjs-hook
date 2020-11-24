import React from 'react'

function Cabecera (props) {

    const { curso } = props;

    return(
        <header>
            <h1>Curso: {curso}</h1>
        </header>
    )
}

export default Cabecera;