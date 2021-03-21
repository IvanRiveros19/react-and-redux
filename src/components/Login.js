import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {autenticacionAction} from "../redux/actions/userActions";

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorForm, setErrorForm] = useState(null);

    const dispatch = useDispatch();
    const history = useHistory();
    const token = useSelector(state => state.user.token);
    const error = useSelector(state => state.user.error);
    const cargando = useSelector(state => state.user.loading);

    useEffect(() => {
        if (token) {
            history.push('/laptops');
        }
        // eslint-disable-next-line
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setErrorForm('Por favor llene los campos Usuario y Contraseña');
            return;
        }
        setErrorForm(null);
        dispatch(autenticacionAction(history, {username, password}));
    }

    return (
        <div className="container bg-secondary text-center mt-5 p-5 col-md-6">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label font-weight-bold">Email: </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                               id="username"
                               placeholder="Introduzca su nombre de usuario"
                               onChange={e => setUsername(e.target.value)}
                               autoComplete="off"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label font-weight-bold">Password: </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                               id="password"
                               placeholder="Introduzca su password"
                               onChange={e => setPassword(e.target.value)}
                               autoComplete="off"
                        />
                    </div>
                </div>
                {errorForm && <p className="alert alert-danger">{errorForm}</p>}
                {error && <p className="alert alert-danger">{error}</p>}
                {cargando &&<div><div className="spinner-border text-primary"></div></div>}
                <button className="btn btn-info">Iniciar</button>
            </form>
        </div>
    );
};

export default Login;