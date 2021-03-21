import {
    COMENZAR_AUTENTICACION, EXITO_AUTENTICACION, ERROR_AUTENTICACION
} from "../types";
import Axios from "../../config/axios";

export function autenticacionAction(history, usuario) {
    return async (dispatch) => {
        dispatch(autenticarUsuario());
        try {
            const respuesta = await Axios.put('/auth', usuario);
            const status = respuesta.data.status;
            if (status) {
                dispatch(autenticarUsuarioExito(respuesta.data.token));
                history.push('/laptops');
            } else {
                dispatch(autenticarUsuarioError(respuesta.data.message));
            }
        } catch (e) {
            dispatch(autenticarUsuarioError(e.message));
        }
    }
}

const autenticarUsuario = () => ({
    type: COMENZAR_AUTENTICACION
});

const autenticarUsuarioExito = (token) => ({
    type: EXITO_AUTENTICACION,
    payload: token
});

const autenticarUsuarioError = (error) => ({
    type: ERROR_AUTENTICACION,
    payload: error
});