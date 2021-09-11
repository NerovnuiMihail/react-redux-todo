import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Input = ({type, placeholder, value, className, onChange }) => {
    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
}

Input.defaultProps = {
    className: 'my_input',
}