import React from 'react'
import { eliminarPrimero, eliminarUltimo } from '../utils';
import { ACTIONS } from '../utils/helpers';

const initialState = {
    resultado : '',
    sync:false
}
export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.agregarNumero:
            return{
                ...state, 
                resultado: state.resultado + action.payload,
                 };
        case ACTIONS.limpiarTodo:
            return{
                ...state, 
                resultado: '',
                };
                
        case ACTIONS.eliminarPrimero:
      
            return{
                ...state, 
                resultado: eliminarPrimero(state.resultado),
                };

        case ACTIONS.eliminarUltimo:
            return{
                ...state, 
                resultado: eliminarUltimo(state.resultado),
                };
            
        default:
            return state
    }
}

