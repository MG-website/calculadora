import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { resultadoSelector, syncSelector } from '../../utils/selectors'
import { PantallaStyled } from '../styles'

export function Pantalla() {
const resultado = useSelector(resultadoSelector);
 const [state,setState]=useState(resultado)

useLayoutEffect(()=>{
   if(resultado !== state){
           setState(resultado)
   }     
},[resultado])

return (
        //     <PantallaStyled> 
        //         <h3> { state }</h3>
        //         </PantallaStyled>
        <PantallaStyled value={state} readOnly/>
        )
}

