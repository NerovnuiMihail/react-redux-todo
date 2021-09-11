import React from 'react';
import PropTypes from "prop-types";

import './style.css';

const Button = ({text, className, type, onClick, ...props}) => {
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

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick:PropTypes.func
}

Button.defaultProps = {
    className: 'my-btn',
    text: 'Отправить',
    onClick: () => {}
}