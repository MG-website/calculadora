import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Numeros } from '../../components/numeros'
import { Operadores } from '../../components/operadores'
import { Pantalla } from '../../components/pantalla'
import { ContenedorBotonesStyled, ContenedorStyled, PantallaStyled } from '../../components/styles'

export function Calculadora() {

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

