import { ACTIONS } from "../utils/helpers"
import { utilsEliminarPrimero } from '../utils'
export const agregarNumero = (numero) => {
    return { type: ACTIONS.agregarNumero, payload:numero }
}

export const limpiarTodo = () =>{
    return {type: ACTIONS.limpiarTodo}
}

export const eliminarPrimero = ()=>{
    
    return {type: ACTIONS.eliminarPrimero}
}

export const eliminarUltimo = ()=>{
    return {type: ACTIONS.eliminarUltimo}
}

export const sumar = (op)=>{
    return {type: ACTIONS.sumar, payload:op}
}

export const restar = (op)=>{
    return { type: ACTIONS.restar, payload:op}
}

export const dividir =(op)=>{
    return { type: ACTIONS.dividir, payload:op}
}

export const multiplicar = (op)=>{
return { type: ACTIONS.multiplicar, payload:op}
}
export const punto = (op)=>{
    return {type: ACTIONS.punto, payload:op}
}
export const igual = ()=>{
    return {type:ACTIONS.igual}
}