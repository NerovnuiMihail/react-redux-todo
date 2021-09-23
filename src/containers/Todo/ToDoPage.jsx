import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import TodoTable from "../../components/Todo/TodoTable";
import Modal from '../../components/Modal/Modal';
import ChangeToDoList from "../../components/Todo/ChangeToDoList";
import CreateNewToDo from "../../components/Todo/CreateNewToDo";

import styles from "./Todo.module.css";

const ToDoPage = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    const dispatch = useDispatch();

    const visible = useSelector(state => state.modalReducer.visible);
    const arrToDos = useSelector(state => state.todoReducer.arrToDo);
    const changeToDo = useSelector(state => state.todoReducer.changeToDo);

    const handleClose = () => {
        dispatch({type: "CLOSE_MODAL"})
    };

    const handleChangeTitle = ({target:{value}}) => {
        setTitle(value);
    };

    const handleChangeText = ({target:{value}}) => {
        setText(value);
    };

    const CreateToDos = () => {
        if(title && text) {
            dispatch({type: "CREATE_TODO", payload: {id: Date.now(), title, text}});
            setTitle('');
            setText('');
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
        
            <div className={styles.container}>

                <h1 className={styles.container__title}>НОВАЯ ЗАДАЧА</h1>

                <div className={styles.container__table}>
                    <TodoTable
                        title={title}
                        text={text}
                        handleChangeTitle={handleChangeTitle}
                        handleChangeText={handleChangeText}
                        CreateToDos={CreateToDos}
                    />
                </div>


                <div className={styles.wrapper}>
                    <div className={styles.container__newtodo}>
                        <CreateNewToDo
                            arrToDos={arrToDos}
                            handleDeleteToDo={handleDeleteToDo}
                            handleChangeToDoList={handleChangeToDoList}
                        />
                    </div>

                    <div className={styles.container__changetodo}>
                        <ChangeToDoList
                            changeToDo={changeToDo}
                            handleChangeDeleteToDo={handleChangeDeleteToDo}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoPage;