import React from 'react';
import Button from '../Button/Button';
import './style.css';

const Modal = ({handleClose}) => {
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