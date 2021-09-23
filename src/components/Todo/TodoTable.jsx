import React from 'react';
import Input from "../../moduls/Input/Input";
import Button from "../../moduls/Button/Button";

import styles from "./Todo.module.css";


const TodoTable = ({title, text, handleChangeTitle, handleChangeText, CreateToDos, className}) => {
    return (
        <div className={styles.container}>
            <Input
                className={styles.table_input}
                value={title}
                onChange={handleChangeTitle}
                placeholder="Тема задачи.."
            />
            <textarea
                className={styles.table_textarea}
                placeholder="Описание задачи.."
                onChange={handleChangeText}
                value={text}
            />
            <Button
                text="Добавить"
                onClick={CreateToDos}
                className={styles.table_btn}
            />
        </div>
    );
};

export default TodoTable;