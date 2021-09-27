import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import complitedIcon from './img/happy.png';
import NotComplitedIcon from './img/thinking.png';

import styles from "./PlaceholderToDoItem.module.css";


const PlaceholderToDoItem = ({id, value, completed, classNameWrapper}) => {
    return (
        <>
            {completed ? (
                <div className={classNames(styles.wrapper, classNameWrapper)}>
                    <span className={styles.number}>Задача №{id}</span>
                    <p className={styles.wrapper__area}>{value}</p>
                    <div className={styles.wrapper_inside}>
                        <span className={styles.cheked}>Задача еще не завершена</span>
                        <img src={NotComplitedIcon} alt="NotComplitedIcon"/>
                    </div>
                </div>)
                :
                (<div className={styles.wrapper}>
                    <span className={styles.number}>Задача №{id}</span>
                    <p className={styles.wrapper__area}>{value}</p>
                    <div className={styles.wrapper_inside}>
                        <span className={styles.cheked}>Задача завершена</span>
                        <img src={complitedIcon} alt="complitedIcon"/>
                    </div>
                </div>)
            }
        </>
    );
};

PlaceholderToDoItem.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
    classNameWrapper: PropTypes.string,
    completed: PropTypes.bool
};

export default PlaceholderToDoItem;