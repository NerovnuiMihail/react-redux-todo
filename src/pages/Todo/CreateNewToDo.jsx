import React from 'react';
import Button from '../../components/Button/Button';

const CreateNewToDo = ({arrToDos, handleDeleteToDo, handleChangeToDoList}) => {
    return (
        <>
            { arrToDos.length === 0 && <div><h2>Задачи не найдены</h2></div> }

            { arrToDos && arrToDos.map(arrToDo => {
                        return ( 
                            <div key={arrToDo.id} className="new_todos">
                                <h2>{arrToDo.title}</h2>
                                <p>{arrToDo.text}</p>
                                <div className="new_todos_btn">
                                    <Button text="Редактировать" className="todo_btn_edit" />
                                    <Button text="Удалить" className="todo_btn_delete" onClick={handleDeleteToDo} data-name={arrToDo.id} />
                                    <Button text="Завершить" className="todo_btn_complite" onClick={handleChangeToDoList} data-name={arrToDo.id} />
                                </div>
                            </div>
                        );
                })
            }
        </>
    );


};

export default CreateNewToDo;