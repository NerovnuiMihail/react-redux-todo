import React from 'react';
import PropTypes from "prop-types";

import styles from './Button.module.css';

const Button = ({text, className = styles.custom_btn, type, onClick, ...props}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick:PropTypes.func
}

Button.defaultProps = {
    text: 'Отправить'
}

export default Button;