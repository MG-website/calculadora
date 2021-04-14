import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resultadoSelector, syncSelector } from '../../utils/selectors'
import { PantallaResultadoDinamico, PantallaStyled } from '../styles'
import {  resultado } from '../../utils'
import { agregarNumero, dividir, igual, multiplicar, restar, sumar } from '../../actions'
export function Pantalla() {
const res = useSelector(resultadoSelector);
 const [state,setState]=useState(res)
 const resultadoDinamico = resultado(res)
 const dispatch = useDispatch()
 useLayoutEffect(()=>{

         window.addEventListener('keyup', usarTeclas)
         if(res !== state){
                 setState(res)
                }     
                return ()=>{
                        window.removeEventListener('keyup', usarTeclas)
                }
},[res])
const usarTeclas = (e) => {
        let teclas = {
                0:true,
                1:true,
                2:true,
                3:true,
            4:true,
            5:true,
            6:true,
            7:true,
            8:true,
            9:true,
            '.':true,
            '+': ()=> dispatch(sumar('+')),
            '-': ()=> dispatch(restar('-')),
            '*': ()=> dispatch(multiplicar('*')),
            '/': ()=> dispatch(dividir('/')),
            'Enter': ()=> dispatch(igual()),
        }
        if(typeof teclas[e.key] === 'function'){
            teclas[e.key]()
        }
        if(typeof teclas[e.key] === 'boolean'){
                console.log(e.key)
            dispatch(agregarNumero(e.key))
        }
    }
return (
        <div style={{width:'310px'}}>

                <PantallaStyled value={state} readOnly/>
                <PantallaResultadoDinamico readOnly value={resultadoDinamico}></PantallaResultadoDinamico>
        </div>
        )
}

