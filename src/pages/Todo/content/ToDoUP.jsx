import React from 'react';
import CreateNewToDo from "../CreateNewToDo";

import '../style.css';

const ToDoUp = ({arrToDos, handleDeleteToDo, handleChangeToDoList}) => {
    return (
        <div className="todo_up">
            <CreateNewToDo 
                arrToDos={arrToDos}
                handleDeleteToDo={handleDeleteToDo}
                handleChangeToDoList={handleChangeToDoList}
            />
        </div>
    );
};

export default ToDoUp;