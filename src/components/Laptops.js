import React, {useEffect} from 'react';
import Header from "./Header";
import Laptop from "./Laptop";
import {useDispatch, useSelector} from "react-redux";
import {obtenerLaptopsAction} from "../redux/actions/laptopActions";

const Laptops = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const cargando = useSelector(state => state.laptops.loading);

    const cargarLaptops = () => dispatch(obtenerLaptopsAction(token));

    useEffect(() => {
        cargarLaptops();
        // eslint-disable-next-line
    }, []);

    const laptops = useSelector(state => state.laptops.laptops);
    const error = useSelector(state => state.laptops.error);

    return (
        <div>
            <Header />
            <div className="container mt-5 ">
                {cargando && <div className="spinner-border text-primary"></div>}
                {error && <p className="alert alert-danger text-center">{error}</p>}
                <table className="table table-hover text-center">
                    <thead className="bg-success">
                        <tr>
                            <td>Marca: </td>
                            <td>Procesador: </td>
                            <td>Memoria RAM: </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            laptops.map(laptop =>
                                <Laptop key={laptop.id}
                                    laptop={laptop}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Laptops;