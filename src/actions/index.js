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

export const sumar = ()=>{
    return {type: ACTIONS.sumar}
}