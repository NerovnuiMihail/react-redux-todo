import React from 'react';
import Button from '../../moduls/Button/Button';

import styles from './Modal.module.css';

const Modal = ({handleClose}) => {
    return (
        <div className={styles.modal_container}>
            <div className={styles.modal_content}>
                <h2>Введите тему и описание заметки!</h2>
                <Button onClick={handleClose} text="Закрыть" className={styles.close_modal__btn} />
            </div>
        </div>
    );
};

export default Modal;