import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar bg-secondary">
            <div className="container">
                <h1>
                    <Link to='/laptops' className="text-light">React And Redux</Link>
                </h1>
            </div>
            <Link to="/laptops/nueva"
                  className="btn btn-success">
                Agregar Laptop 💻
            </Link>
        </nav>
    );
};

export default Header;