import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from  './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={styles.navbar_container}>
            <ul className={styles.navbar_content}>
                <NavLink activeClassName={styles.active} className={styles.navbar_content__link} exact to="/">
                    <li className={styles.navbar_content__item}>
                        Home
                    </li>
                </NavLink>
                <NavLink activeClassName={styles.active} className={styles.navbar_content__link} exact to="/todos">
                    <li className={styles.navbar_content__item}>
                        Custom-Todo
                    </li>
                </NavLink>
                <NavLink activeClassName={styles.active} className={styles.navbar_content__link} exact to="/place_todos">
                    <li className={styles.navbar_content__item}>
                        Placeholder-ToDo
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;