import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import TodoTable from "./TodoTable";
import ToDoUp from "./content/ToDoUP";
import ToDoDown from "./content/ToDoDown";
import Modal from '../../components/Modal/Modal';

const ToDoPage = () => {
    
    const dispatch = useDispatch();
    const visible = useSelector(state => state.modalReducer.visible);
    const title = useSelector( state => state.todoReducer.title);
    const text = useSelector(state => state.todoReducer.text);
    const arrToDos = useSelector(state => state.todoReducer.arrToDo);
    const changeToDo = useSelector(state => state.todoReducer.changeToDo);

    const handleClose = () => {
        dispatch({type: "CLOSE_MODAL"})
    };

    const handleChangeTitle = ({target:{value}}) => {
        dispatch({type: "CREATE_TITLE", payload: value})
    };

    const handleChangeText = ({target:{value}}) => {
        dispatch({type: "CREATE_TEXT", payload: value})
    };

    const CreateToDos = () => {
        if(title && text) {
            dispatch({type: "CREATE_TODO", payload: {id: Date.now(), title, text}})
            dispatch({type: "RESET"})
        } else {
            dispatch({type: "SHOW_MODAl"})
        }
    };

    const handleChangeDeleteToDo = (e) => {
        const ID = +e.target.dataset.id;
        dispatch({type: "CHANGE_TODO_DELETE", payload: ID})
    };

    const handleDeleteToDo = (e) => {
        const data = +e.target.dataset.name;
        dispatch({type: "DELETE_TODO", payload: data})
    };

    const handleChangeToDoList = (e) => {
        const data = +e.target.dataset.name;
        dispatch({type: "CHANGE_TODO", payload: data})
        dispatch({type: "DELETE_TODO", payload: data})
    };

    return (
        <>
            {visible && <Modal handleClose={handleClose} />}
        
            <div className="todo_page">
                <h1>TODO list</h1>
                <TodoTable 
                    title={title}
                    text={text}
                    handleChangeTitle={handleChangeTitle} 
                    handleChangeText={handleChangeText}
                    CreateToDos={CreateToDos}
                />
                <div className="todo_page_content">
                    <ToDoUp 
                        arrToDos={arrToDos}
                        handleDeleteToDo={handleDeleteToDo}
                        handleChangeToDoList={handleChangeToDoList}
                    />
                    <ToDoDown 
                        changeToDo={changeToDo}
                        handleChangeDeleteToDo={handleChangeDeleteToDo}
                    />
                </div>
            </div>
        </>
    );
};

export default ToDoPage;