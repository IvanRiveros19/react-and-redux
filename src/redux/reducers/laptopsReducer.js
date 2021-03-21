import {
    COMENZAR_DESCARGA_LAPTOPS, DESCARGA_LAPTOPS_EXITO, DESCARGA_LAPTOPS_ERROR,
    AGREGAR_LAPTOP, AGREGAR_LAPTOP_EXITO, AGREGAR_LAPTOP_ERROR
} from "../types";

const initialState = {
    laptops: [],
    loading: false,
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case COMENZAR_DESCARGA_LAPTOPS:
            return {
                ...state,
                loading: true
            }
        case DESCARGA_LAPTOPS_EXITO:
            return {
                ...state,
                laptops: action.payload,
                loading: false
            }
        case DESCARGA_LAPTOPS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case AGREGAR_LAPTOP:
            return {
                ...state,
                loading: true
            }
        case AGREGAR_LAPTOP_EXITO:
            return {
                ...state,
                loading: false
            }
        case AGREGAR_LAPTOP_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}