import React, {Fragment, useState} from 'react';
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {agregarLaptopAction} from "../redux/actions/laptopActions";

const NuevaLaptop = () => {
    const [marca, setMarca] = useState(null);
    const [procesador, setProcesador] = useState(null);
    const [ram, setRam] = useState(0);
    const [errorForm, setErrorForm] = useState(null);

    const dispatch = useDispatch();
    const history = useHistory();
    const token = useSelector(state => state.user.token);
    const cargando = useSelector(state => state.laptops.loading);
    const error = useSelector(state => state.laptops.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!marca || !procesador || !ram){
            setErrorForm('Se deben llenar todos los campos');
            return;
        }
        setErrorForm(null);
        dispatch(agregarLaptopAction(token,{marca, procesador, ram}, history));

    }

    return (
        <Fragment>
            <Header />
            <div className="container bg-info text-center mt-5 p-5 col-md-6">
                <h1>Nueva Laptop</h1>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-3 col-form-label font-weight-bold">Marca:
                        </label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control"
                                   id="username"
                                   placeholder="Introduzca la marca"
                                   onChange={e => setMarca(e.target.value)}
                                   autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="procesador"
                               className="col-sm-3 col-form-label font-weight-bold">Procesador:
                        </label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control"
                                   id="procesador"
                                   placeholder="Introduzca el tipo de procesador"
                                   onChange={e => setProcesador(e.target.value)}
                                   autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="ram"
                               className="col-sm-3 col-form-label font-weight-bold">RAM:
                        </label>
                        <div className="col-sm-9">
                            <input type="number" className="form-control"
                                   id="ram"
                                   placeholder="Introduzca la capacidad de RAM"
                                   onChange={e => setRam(e.target.value)}
                                   autoComplete="off"
                            />
                        </div>
                    </div>
                    {cargando && <div><div className="spinner-border text-primary"></div></div>}
                    {errorForm && <p className="alert alert-danger">{errorForm}</p>}
                    {error && <p className="alert alert-danger">{error}</p>}
                    <button className="btn btn-success font-weight-bold p-2">Guardar</button>
                </form>
            </div>
        </Fragment>
    );
};

export default NuevaLaptop;