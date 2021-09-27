import React from 'react';
import PropTypes from 'prop-types';

import styles from './User.module.css';


const User = ({name, email, username, phone, company}) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.wrapper_name}>{name}</span>
            <span className={styles.wrapper_username}>{username}</span>
            <span className={styles.wrapper_email}>{email}</span>
            <span className={styles.wrapper_phone}>{phone}</span>
            <span className={styles.wrapper_company}>{company}</span>
        </div>
    );
};

User.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    username: PropTypes.string,
    phone: PropTypes.string,
    company: PropTypes.string,
};

export default User;