import React from 'react';
import PropTypes from 'prop-types';

import styles from "./PlaceholderToDoItem.module.css";


const PlaceholderToDoItem = ({id, value, completed}) => {
    return (
        <>
            {completed ? (
                <div className={styles.wrapper}>
                    <h2>Задача №{id}</h2>
                    <p className={styles.wrapper__area}>{value}</p>
                    <h6>Задача еще не завершена</h6>
                </div>)
                :
                (<div className={styles.wrapper}>
                    <h2>Задача №{id}</h2>
                    <p className={styles.wrapper__area}>{value}</p>
                    <h6>Задача завершена</h6>
                </div>)
            }
        </>
    );
};

PlaceholderToDoItem.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
    className: PropTypes.string,
    completed: PropTypes.bool
};

export default PlaceholderToDoItem;