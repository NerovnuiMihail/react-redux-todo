import React from 'react';
import Button from '../../../moduls/Button/Button';

const ChangeToDoList = ({changeToDo, handleChangeDeleteToDo}) => {
    return (
        <>
            {changeToDo.length === 0 && <div><h2>Вы еще не завершили задания!</h2></div> }

            {changeToDo && changeToDo.map(ToDo => {
                    return (
                        <div key={ToDo.id} className="change_todo">
                            <h2>{ToDo.title}</h2>
                            <p>{ToDo.text}</p>
                            <Button text="Удалить" onClick={handleChangeDeleteToDo} className="todo_btn_delete" data-id={ToDo.id} />
                        </div>
                    );
                }) 
            }
        </>
    );
};

export default ChangeToDoList;