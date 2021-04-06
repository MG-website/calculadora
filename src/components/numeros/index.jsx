import React from 'react'
import { ContenedorNumerosStyled, NumerosStyled } from '../styles'
import {numeros} from '../../utils'
import { useDispatch } from 'react-redux'
import { agregarNumero } from '../../actions'


export function Numeros() {
    const dispatch= useDispatch();
    
    const enviarNumero = (e) =>{
        dispatch(agregarNumero(e))
    }
    return (
        <ContenedorNumerosStyled>
            {numeros().map(e => {

             return <NumerosStyled key={e} onClick={ () => enviarNumero(e)}> 
                 <h2>{e}</h2>
                  </NumerosStyled>
            })}
        </ContenedorNumerosStyled>
    )
}

