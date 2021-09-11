import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import './style.css';


const TodoTable = () => {

    const dispatch = useDispatch();
    const title = useSelector( state => state.todoReducer.title);
    const text = useSelector(state => state.todoReducer.text);


    const handleChangeTitle = ({target:{value}}) => {
        dispatch({type: "CREATE_TITLE", payload: value})
    };

    const handleChangeText = ({target:{value}}) => {
        dispatch({type: "CREATE_TEXT", payload: value})
    };

    const CreateToDos = () => {
        if(title && text) {
            dispatch({type: "CREATE_TODO", payload: {id: Date.now(), title, text, ready: false}})
            dispatch({type: "RESET"})
            dispatch({type: "DONT_SHOW_MODAL"})
        } else {
            dispatch({type: "SHOW_MODAl"})
        }
    };

    return (
        <div className="todo_table">
            <Input type="text" value={title} onChange={handleChangeTitle} placeholder="Тема задачи.." />
            <textarea placeholder="Описание задачи.." onChange={handleChangeText} value={text} />
            <Button text="Добавить" onClick={CreateToDos} />
        </div>
    );
};

export default TodoTable;