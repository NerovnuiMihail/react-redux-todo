import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import Input from "../../moduls/Input/Input";
import Button from '../../moduls/Button/Button';

import styles from './Todo.module.css';


const ChangeToDoList = ({changeToDo, handleChangeDeleteToDo, className}) => {
    return (
        <>
            {changeToDo.length === 0 && <div className={styles.whitout_todo}><h2>Вы еще не завершили задания!</h2></div> }

            {changeToDo && changeToDo.map(ToDo => {
                    return (
                        <div key={ToDo.id} className={styles.wrapper}>
                            <Input className={classNames(styles.table_input, styles.wrapper_input, className)} value={ToDo.title} disabled/>
                            <textarea className={classNames(styles.table_textarea, styles.wrapper_textarea, className)} value={ToDo.text} disabled />
                            <Button text="Удалить" onClick={handleChangeDeleteToDo} className={classNames(styles.table_btn, className)} data-id={ToDo.id} />
                        </div>
                    );
                }) 
            }
        </>
    );
};

ChangeToDoList.propTypes = {
    changeToDo: PropTypes.array,
    handleChangeDeleteToDo: PropTypes.func,
    className: PropTypes.string
}

export default ChangeToDoList;