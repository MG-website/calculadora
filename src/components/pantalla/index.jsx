import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { resultadoSelector, syncSelector } from '../../utils/selectors'
import { PantallaStyled } from '../styles'
import {  resultado } from '../../utils'
export function Pantalla() {
const res = useSelector(resultadoSelector);
 const [state,setState]=useState(res)
const resultadoDinamico = resultado(res)
useLayoutEffect(()=>{
   if(res !== state){
           setState(res)
   }     
},[res])

return (
        <div>

                <PantallaStyled value={state} readOnly/>
                <input type="text" readOnly value={resultadoDinamico}/>
        </div>
        )
}

