import React from 'react'
import { ContenedorOperadoresStyled , OperadoresStyled} from '../styles'
import { operadores } from '../../utils'
import { useDispatch } from 'react-redux'
import { dividir, igual, limpiarTodo, multiplicar, punto, restar, sumar } from '../../actions'
export function Operadores() {

    const dispatch = useDispatch()

    const operaciones = (e)=>{
        if(e == 'C') dispatch(limpiarTodo())
        if(e === '-') dispatch(restar(e))
        if(e === '+') dispatch(sumar(e))
        if(e=== '*')dispatch(multiplicar(e))
        if(e === '/')dispatch(dividir(e))
        if(e === '.') dispatch(punto(e))
        if(e === '=')dispatch(igual())
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

