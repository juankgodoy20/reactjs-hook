import React from 'react'

export const TEMAS = {
    claro: {
        backgroundColor: '#ffffff',
        color: '#000000'
    },
    oscuro: {
        backgroundColor: '#000000',
        color: '#ffffff'
    }
}

const TemasContexto = React.createContext(TEMAS.claro);

export default TemasContexto;