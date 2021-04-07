import React from 'react'
import { ContenedorNumerosStyled, NumerosStyled } from '../styles'
import { numeros} from '../../utils'
import { useDispatch } from 'react-redux'
import { agregarNumero, eliminarPrimero, eliminarUltimo } from '../../actions'


export function Numeros() {
    const dispatch= useDispatch();
    
    const enviarDatos = (e) =>{
        if(e === '</x') {dispatch(eliminarPrimero())}
        else
        if(e === 'x/>') {dispatch(eliminarUltimo())}
        else
        dispatch(agregarNumero(e))
    }
    return (
        <ContenedorNumerosStyled>
            {numeros().map(e => {

             return <NumerosStyled key={e} onClick={ () => enviarDatos(e)}> 
                 <h2>{e}</h2>
                  </NumerosStyled>
            })}
        </ContenedorNumerosStyled>
    )
}

