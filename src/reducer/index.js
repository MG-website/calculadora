import React from 'react'
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
                sync:!state.sync
                 }
    
        default:
            return state
    }
}

