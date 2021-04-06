import React from 'react'
import { ContenedorOperadoresStyled , OperadoresStyled} from '../styles'
import { operadores } from '../../utils'
import { useDispatch } from 'react-redux'
import { limpiarTodo } from '../../actions'
export function Operadores() {

    const dispatch = useDispatch()

    const operaciones = (e)=>{
        if(e == 'C') dispatch(limpiarTodo())
    }
    return (
        <ContenedorOperadoresStyled>
            {operadores().map(e => {
                
            return <OperadoresStyled key={e} onClick={ ()=> operaciones(e)}>
                <h3>{e}</h3>
            </OperadoresStyled>
            })}
        </ContenedorOperadoresStyled>
    )
}

