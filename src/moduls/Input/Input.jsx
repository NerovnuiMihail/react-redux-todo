import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = ({type, placeholder, value, className = styles.custom_input, onChange, disabled }) => {
    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
}

Input.defaultProps = {
    className: 'my_input',
    type: 'text',
    placeholder: '...'
}

export default Input;