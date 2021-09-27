import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";

import {BASE_URL, POSTS_URL, TODOS_URL, USER_ID_URL, USERS_URL} from "../../api/constants";
import PostItem from "../../components/PostItem/PostItem";
import User from "../../components/User/User";
import PlaceholderToDoItem from "../../components/PlaceholderToDo/PlaceholderToDoItem";
import CreateNewToDo from "../../components/Todo/CreateNewToDo";

import styles from './Home.module.css';


const Home = () => {

    const dispatch = useDispatch();
    const count = useSelector(state => state.homeReducer.count);
    const arrToDos = useSelector(state => state.todoReducer.arrToDo);

    const [post, setPost] = useState(null);
    const [users, setUsers] = useState(null);
    const [plTodo, setPlTodo] = useState(null);

    const plTodoArr = [];
    let homeArrToDos = [];

    if(arrToDos) {
        homeArrToDos = arrToDos.slice(0,2);
    }

    if(plTodo) {
        for(let i = 0; i < 3; i++) {
            plTodoArr.push(plTodo[i])
        }
    }

    useEffect(() => {
        axios.get(BASE_URL + POSTS_URL + USER_ID_URL + count)
            .then(res => setPost(res.data));
    }, [count]);

    useEffect(() => {
        axios.get(BASE_URL + USERS_URL)
            .then(res => setUsers(res.data));
    }, []);

    useEffect(() => {
        axios.get(BASE_URL + TODOS_URL + USER_ID_URL + 1)
            .then(res => setPlTodo(res.data))
    }, []);

    const handleClickUp = () => {
        if(count !== 10){
            dispatch({type: "COUNTER_UP"});
        }
    };
    const handleClickDown = () => {
        if(count !== 1){
            dispatch({type: "COUNTER_DOWN"});
        }
    };

    return (
        <div className={styles.home_container}>
            <div className={styles.wrapper_one}>

                <div className={styles.wrapper_users}>
                    {users && users.map(({id, name, email, phone, username, company}) => (
                        <Link key={id} to={`/users/${id}`}>
                            <User
                                name={name}
                                email={email}
                                company={company.name}
                                phone={phone}
                                username={username}
                            />
                        </Link>
                    ))}
                </div>

                <div className={styles.pag_pos}>
                    <div onClick={handleClickDown} className={styles.btn_goback}>НАЗАД</div>
                    <div className={styles.post_wrapper}>
                        {post && post.map(({id, title}) => {
                            return <Link key={id} className={styles.post_link} to={`/post/${id}`}>
                                <PostItem
                                    id={id}
                                    title={title}
                                />
                            </Link>
                        })}
                    </div>
                    <div onClick={handleClickUp} className={styles.btn_goforward}>ВПЕРЕД</div>
                </div>
            </div>

            <div className={styles.wrapper_two}>
                <div className={styles.wrapper_custom_todos}>
                    <CreateNewToDo arrToDos={homeArrToDos} />
                </div>

                <div className={styles.wrapper_placeholder_todos}>
                    {plTodoArr && plTodoArr.map(({completed, id, title}) => (
                        <PlaceholderToDoItem
                            key={id}
                            completed={completed}
                            id={id}
                            value={title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;