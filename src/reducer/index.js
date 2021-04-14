import React from 'react'
import { eliminarPrimero, eliminarUltimo } from '../utils';
import { ACTIONS } from '../utils/helpers';
import { resultado } from '../utils'

const initialState = {
    resultado : '',
    operacion:''
}
export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.agregarNumero:
            return{
                ...state, 
                operacion: state.operacion + action.payload,
                 };
        case ACTIONS.limpiarTodo:
            return{
                ...state, 
                resultado: '',
                operacion:''
                };
                
        case ACTIONS.eliminarPrimero:
      
            return{
                ...state, 
                operacion: eliminarPrimero(state.operacion),
                };

        case ACTIONS.eliminarUltimo:
            return{
                ...state, 
                operacion: eliminarUltimo(state.operacion),
                };
            
        case ACTIONS.restar:
            return{
                ...state, 
                operacion: state.operacion + action.payload,
                resultado: resultado(state.operacion)
                };
        case ACTIONS.sumar:
            return{
                ...state, 
                operacion: state.operacion + action.payload,
                resultado: resultado(state.operacion)
                };
        case ACTIONS.multiplicar:
            return{
                ...state, 
                operacion: state.operacion + action.payload,
                resultado: resultado(state.operacion)
                };
        case ACTIONS.dividir:
            return{
                ...state, 
                operacion: state.operacion + action.payload,
                resultado: resultado(state.operacion)
                };
        case ACTIONS.punto:
            return{
                ...state, 
                operacion: state.operacion + action.payload,
                resultado: resultado(state.operacion)
                };
        case ACTIONS.igual:
            return{
                ...state, 
                operacion: resultado(state.operacion) + '',
                resultado: resultado(state.operacion),
                };
            
            
        default:
            return state
    }
}

