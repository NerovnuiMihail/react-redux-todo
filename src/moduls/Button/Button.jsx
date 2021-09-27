import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from './Button.module.css';

const Button = ({text, className, type, onClick, ...props}) => {
    return (
        <button
            className={classNames(styles.custom_btn, className)}
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