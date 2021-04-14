import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { agregarNumero, dividir, igual, multiplicar, restar, sumar } from '../../actions'
import { Numeros } from '../../components/numeros'
import { Operadores } from '../../components/operadores'
import { Pantalla } from '../../components/pantalla'
import { ContenedorBotonesStyled, ContenedorStyled, PantallaStyled } from '../../components/styles'

export function Calculadora() {
    const dispatch= useDispatch()
//     const usarTeclas = (e) => {
//         let teclas = {
//             1:true,
//             2:true,
//             3:true,
//             4:true,
//             5:true,
//             6:true,
//             7:true,
//             8:true,
//             9:true,
//             '.':true,
//             '+': ()=> dispatch(sumar('+')),
//             '-': ()=> dispatch(restar('-')),
//             '*': ()=> dispatch(multiplicar('*')),
//             '/': ()=> dispatch(dividir('/')),
//             'Enter': ()=> dispatch(igual()),
//         }
//         if(typeof teclas[e.key] === 'function'){
//             teclas[e.key]()
//         }
//         if(typeof teclas[e.key] === 'boolean'){
//             dispatch(agregarNumero(e.key))
//         }
//     }
// document.addEventListener('keyup', usarTeclas)
    return (
        <ContenedorStyled>
            <Pantalla></Pantalla>
            <ContenedorBotonesStyled>
                <Numeros ></Numeros>
            <Operadores></Operadores>
            </ContenedorBotonesStyled>
        </ContenedorStyled>
    )
}

