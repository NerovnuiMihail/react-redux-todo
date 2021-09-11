import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Button from '../../components/Button/Button';

const ChangeToDoList = () => {

    const changeToDo = useSelector(state => state.todoReducer.changeToDo);
    const dispatch = useDispatch();

    const handleDeleteToDo = (e) => {
        const ID = +e.target.dataset.id;
        dispatch({type: "CHANGE_TODO_DELETE", payload: ID})
    };

    return (
        <>
            {changeToDo.length === 0 && <div><h2>Вы еще не завершили задания!</h2></div> }

            {changeToDo && changeToDo.map(ToDo => {
                    return (
                        <div key={ToDo.id} className="change_todo">
                            <h2>{ToDo.title}</h2>
                            <p>{ToDo.text}</p>
                            <Button text="Удалить" onClick={handleDeleteToDo} className="todo_btn_delete" data-id={ToDo.id} />
                        </div>
                    );
                }) 
            }
        </>
    );
};

export default ChangeToDoList;