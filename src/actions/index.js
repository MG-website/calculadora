import { ACTIONS } from "../utils/helpers"

export const agregarNumero = (numero) => {
    return { type: ACTIONS.agregarNumero, payload:numero }
}