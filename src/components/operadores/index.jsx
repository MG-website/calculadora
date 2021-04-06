import React from 'react'
import { ContenedorOperadoresStyled , OperadoresStyled} from '../styles'
import { operadores } from '../../utils'

export function Operadores() {
    return (
        <ContenedorOperadoresStyled>
            {operadores().map(e => {
                
            return <OperadoresStyled key={e}>
                <h3>{e}</h3>
            </OperadoresStyled>
            })}
        </ContenedorOperadoresStyled>
    )
}

