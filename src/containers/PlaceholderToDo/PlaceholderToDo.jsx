import React, {useEffect, useState} from 'react';
import axios from "axios";

import {INITIAL_URL, USER_ID_URL} from "../../api/constants";
import PlaceholderToDoItem from "../../components/PlaceholderToDo/PlaceholderToDoItem";
import Pagination from "../../components/Pagination/Pagination";

import styles from "./PlaceholderToDo.module.css";


const PlaceholderToDo = props => {

    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(INITIAL_URL+USER_ID_URL+page)
            .then(res => setData(res.data))
    }, [page]);

    const inprogress = [];
    const welldone = [];

    if (data) {
        data.forEach(item => {
            if (item.completed) {
                inprogress.push(item);
            } else {
                welldone.push(item);
            }
        })
    }

    const HandleDownPage = () => {
        setPage(step => step - 1);
    };

    const HandleUpPage = () => {
        setPage(step => step + 1);
    };

    console.log(data)

    return (
        <>

            <Pagination
                wrapperName={styles.wrapper__btns}
                buttonDown={styles.btn}
                buttonUp={styles.btn}
                counterName={styles.pagecount}
                page={page}
                onClickDown={HandleDownPage}
                onClickUp={HandleUpPage}
            />

            <div className={styles.wrapper__todo}>
                {inprogress && (
                    <div className={styles.todo__inprogress}>
                        {inprogress.map(({id, title, completed}) => (
                            <div key={id} className={styles.todo__inprogress_item}>
                                <PlaceholderToDoItem
                                    completed={completed}
                                    id={id}
                                    value={title}
                                />
                            </div>)
                        )}
                    </div>
                )}

                {welldone && (
                    <div className={styles.todo__welldone}>
                        {welldone.map(({id, title, completed}) => (
                            <div key={id} className={styles.todo__welldone_item}>
                                <PlaceholderToDoItem
                                    completed={completed}
                                    id={id}
                                    value={title}
                                />
                            </div>)
                        )}
                    </div>
                )}
            </div>

            <Pagination
                wrapperName={styles.wrapper__btns}
                buttonDown={styles.btn}
                buttonUp={styles.btn}
                counterName={styles.pagecount}
                page={page}
                onClickDown={HandleDownPage}
                onClickUp={HandleUpPage}
            />
        </>
    );
};

export default PlaceholderToDo;