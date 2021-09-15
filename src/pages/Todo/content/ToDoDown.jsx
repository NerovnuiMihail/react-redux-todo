import React from 'react';
import ChangeToDoList from '../ChangeToDoList';
import '../style.css';

const ToDoDown = ({changeToDo, handleChangeDeleteToDo}) => {
    return (
        <div className="todo_down">
            <ChangeToDoList 
                changeToDo={changeToDo}
                handleChangeDeleteToDo={handleChangeDeleteToDo}
            />
        </div>
    );
};

export default ToDoDown;