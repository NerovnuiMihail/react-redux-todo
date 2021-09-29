import React from 'react';
import PropTypes from 'prop-types';

import styles from './User.module.css';



const User = ({name, email, phone}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_item}>
                <span className={styles.item_bold}>USER NAME:</span>
                <span className={styles.wrapper_name}>{name}</span>
            </div>
            <div className={styles.wrapper_item}>
                <span className={styles.item_bold}>EMAIL:</span>
                <span className={styles.wrapper_email}>{email}</span>
            </div>
            <div className={styles.wrapper_item}>
                <span className={styles.item_bold}>PHONE:</span>
                <span className={styles.wrapper_phone}>{phone}</span>
            </div>
        </div>
    );
};

User.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
};

export default User;