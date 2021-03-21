import {
    COMENZAR_AUTENTICACION, EXITO_AUTENTICACION, ERROR_AUTENTICACION
} from "../types";

const initialState = {
    token: null,
    loading: false,
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case COMENZAR_AUTENTICACION:
            return {
                ...state,
                loading: true,
                error: null
            }
        case EXITO_AUTENTICACION:
            return {
                ...state,
                loading: false,
                token: action.payload
            }
        case ERROR_AUTENTICACION:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}