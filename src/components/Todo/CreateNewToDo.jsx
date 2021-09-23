import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import Input from "../../moduls/Input/Input";
import Button from '../../moduls/Button/Button';

import styles from './Todo.module.css';


const CreateNewToDo = ({arrToDos, handleDeleteToDo, handleChangeToDoList, className}) => {
    return (
        <>
            { arrToDos.length === 0 && <div className={styles.whitout_todo}><h2>Задачи не найдены</h2></div> }

            { arrToDos && arrToDos.map(arrToDo => {
                        return ( 
                            <div key={arrToDo.id} className={styles.wrapper}>
                                <Input className={classNames(styles.table_input, styles.wrapper_input)} value={arrToDo.title} disabled/>
                                <textarea className={classNames(styles.table_textarea, styles.wrapper_textarea)} value={arrToDo.text} disabled />
                                <div className={styles.wrapper__btns}>
                                    <Button text="Редактировать" className={classNames(styles.table_btn)} />
                                    <Button text="Удалить" className={classNames(styles.table_btn)} onClick={handleDeleteToDo} data-name={arrToDo.id} />
                                    <Button text="Завершить" className={classNames(styles.table_btn)} onClick={handleChangeToDoList} data-name={arrToDo.id} />
                                </div>
                            </div>
                        );
                })
            }
        </>
    );
};

CreateNewToDo.propTypes = {
    arrToDos: PropTypes.array,
    handleDeleteToDo: PropTypes.func,
    handleChangeToDoList: PropTypes.func,
    className: PropTypes.string
}

export default CreateNewToDo;