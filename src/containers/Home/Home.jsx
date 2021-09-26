import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import {BASE_URL, POSTS_URL, USER_ID_URL} from "../../api/constants";
import PostItem from "../../components/PostItem/PostItem";
import Pagination from "../../components/Pagination/Pagination";

import styles from './Home.module.css';


const Home = () => {

    const [post, setPost] = useState(null);
    const [postCounter, setPostCounter] = useState(1);

    useEffect(() => {
        axios.get(BASE_URL + POSTS_URL + USER_ID_URL + postCounter)
            .then(res => setPost(res.data));
    }, [postCounter]);

    console.log(post)

    const handleClickUp = () => {
        setPostCounter(state => state + 1);
    };
    const handleClickDown = () => {
        setPostCounter(state => state - 1);
    };

    return (
        <div className={styles.home_container}>
            <div className={styles.post_wrapper}>
                <Pagination
                    wrapperName={styles.post_wrapper__pagination}
                    page={postCounter}
                    buttonDown={styles.post_btns}
                    buttonUp={styles.post_btns}
                    onClickDown={handleClickDown}
                    onClickUp={handleClickUp}
                    counterName={styles.post_wrapper__counter}
                />
                {post && post.map(({id, title, body, userId}) => {
                    return <Link key={id} className={styles.post_link} to={`/post/${id}`}>
                        <PostItem
                            id={id}
                            title={title}
                        />
                    </Link>
                })}
                <Pagination
                    wrapperName={styles.post_wrapper__pagination}
                    page={postCounter}
                    buttonDown={styles.post_btns}
                    buttonUp={styles.post_btns}
                    onClickDown={handleClickDown}
                    onClickUp={handleClickUp}
                    counterName={styles.post_wrapper__counter}
                />
            </div>
        </div>
    );
};

export default Home;