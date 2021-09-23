import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from  './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar_container}>
            <ul className={styles.navbar_content}>
                <li className={styles.navbar_content__item}>
                    <NavLink className={styles.navbar_content__link} to="/">Home</NavLink>
                </li>
                <li className={styles.navbar_content__item}>
                    <NavLink className={styles.navbar_content__link} to="/todos">Todos</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;