import { useState } from 'react'

export const useContador = (numeroPorDefecto) => {
    
    const [contador, setContador] = useState(numeroPorDefecto)

    return {contador, setContador}
}