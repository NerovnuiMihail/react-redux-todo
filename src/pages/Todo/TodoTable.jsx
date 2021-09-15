import React from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import './style.css';


const TodoTable = ({title, text, handleChangeTitle, handleChangeText, CreateToDos}) => {
    return (
        <div className="todo_table">
            <Input value={title} onChange={handleChangeTitle} placeholder="Тема задачи.." />
            <textarea placeholder="Описание задачи.." onChange={handleChangeText} value={text} />
            <Button text="Добавить" onClick={CreateToDos} />
        </div>
    );
};

export default TodoTable;