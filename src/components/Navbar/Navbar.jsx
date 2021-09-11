import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

const Navbar = () => {
    return (
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/todos">Todos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;