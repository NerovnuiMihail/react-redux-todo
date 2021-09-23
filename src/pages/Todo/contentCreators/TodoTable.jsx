import React from 'react';
import Input from "../../../moduls/Input/Input";
import Button from "../../../moduls/Button/Button";

import '../Todo.module.css';


const TodoTable = ({title, text, handleChangeTitle, handleChangeText, CreateToDos}) => {
    return (
        <div className="todo_table">
            <Input
                className="todo_table__input"
                value={title}
                onChange={handleChangeTitle}
                placeholder="Тема задачи.."
            />
            <textarea
                placeholder="Описание задачи.."
                onChange={handleChangeText}
                value={text}
            />
            <Button
                text="Добавить"
                onClick={CreateToDos}
            />
        </div>
    );
};

export default TodoTable;