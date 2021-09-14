import React from 'react';
import {useSelector} from "react-redux";

import TodoTable from "./TodoTable";
import ToDoUp from "./content/ToDoUP";
import ToDoDown from "./content/ToDoDown";
import Modal from '../../components/Modal/Modal';

const ToDoPage = () => {

    const visible = useSelector(state => state.modalReducer.visible);

    return (
        <>
            {visible && <Modal />}
        
            <div className="todo_page">
                <h1>TODO list</h1>
                <TodoTable />
                <div className="todo_page_content">
                    <ToDoUp />
                    <ToDoDown />
                </div>
            </div>
        </>
    );
};

export default ToDoPage;