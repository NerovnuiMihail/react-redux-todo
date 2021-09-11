import React from 'react';
import {useDispatch} from "react-redux";

import Button from '../Button/Button';

import './style.css';

const Modal = () => {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({type: "CLOSE_MODAL"})
    };

    return (
        <div className="modal-conteiner">
            <div className="modal-content">
                <h2>Введите тему и описание заметки!</h2>
                <Button onClick={handleClose} text="Закрыть" className="close-modal-btn" />
            </div>
        </div>
    );
};

export default Modal;