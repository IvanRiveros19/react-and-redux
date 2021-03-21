import {
    COMENZAR_DESCARGA_LAPTOPS, DESCARGA_LAPTOPS_EXITO, DESCARGA_LAPTOPS_ERROR,
    AGREGAR_LAPTOP, AGREGAR_LAPTOP_EXITO, AGREGAR_LAPTOP_ERROR
} from "../types";
import Swal from "sweetalert2";
import Axios from "../../config/axios";

export function obtenerLaptopsAction(token) {
    return async (dispatch) => {
        dispatch(obtenerLaptops());
        try {
            const respuesta = await Axios.put('/laptops', {}, {
                headers: {
                    "x-access-token": token
                }
            });

            if (respuesta.data.status) dispatch(obtenerLaptopsExito(respuesta.data.laptops));
            else dispatch(obtenerLaptopsError(respuesta.data.message));
        } catch (e) {
            dispatch(obtenerLaptopsError(e.message));
        }
    }
}

const obtenerLaptops = () => ({
    type: COMENZAR_DESCARGA_LAPTOPS
});

const obtenerLaptopsExito = (laptops) => ({
    type: DESCARGA_LAPTOPS_EXITO,
    payload: laptops
});

const obtenerLaptopsError = (error) => ({
    type: DESCARGA_LAPTOPS_ERROR,
    payload: error
});

export function agregarLaptopAction(token, laptop, history) {
    return async (dispatch) => {
        dispatch(agregarLaptop());
        try {
            const respuesta = await Axios.post('/laptops', laptop, {
                headers: {
                    "x-access-token": token
                }
            });
            if (respuesta.data.status) {
                dispatch(agregarLaptopExito(laptop));
                Swal.fire(
                    'Exito!',
                    'Laptop añadida correctamente',
                    'success'
                );
                history.push('/laptops');
            }
            else dispatch(agregarLaptopError(respuesta.data.message));
        } catch (e) {
            dispatch(agregarLaptopError(e.message));
        }
    }
}

const agregarLaptop = () => ({
    type: AGREGAR_LAPTOP
});

const agregarLaptopExito = (laptop) => ({
    type: AGREGAR_LAPTOP_EXITO
});

const agregarLaptopError = (error) => ({
    type: AGREGAR_LAPTOP_ERROR,
    payload: error
});