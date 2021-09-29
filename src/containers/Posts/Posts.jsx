import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import PropTypes from 'prop-types';
import axios from "axios";

import {BASE_URL, POST_ID_URL, ID_URL, POSTS_URL, COMMENTS_URL} from "../../api/constants";
import PostItem from "../../components/PostItem/PostItem";
import CommentItem from "../../components/CommentItem/CommentItem";
import Button from "../../moduls/Button/Button";

import styles from "./Posts.module.css";


const Posts = ({match}) => {
    const goBack = useHistory();
    const [postItem, setPostItem] = useState([]);
    const [commentItem, setCommentItem] = useState([]);

    const idPage = match.params.id;

    const handleGoBack = () => {
        goBack.goBack();
    };

    useEffect(() => {
        axios.get(BASE_URL + POSTS_URL + ID_URL + idPage)
            .then(res => setPostItem(res.data))
    }, [idPage]);

    useEffect(() => {
        axios.get(BASE_URL + COMMENTS_URL + POST_ID_URL + idPage)
            .then(res => setCommentItem(res.data))
    }, [idPage]);

    return (
        <div className={styles.post_wrapper}>
            <Button
                className={styles.post_btn}
                onClick={handleGoBack}
                text="Назад"
            />

            {postItem && postItem.map(({id, title, body}) => (
                <PostItem
                    key={id}
                    id={id}
                    title={title}
                    body={body}
                />)
            )}

            <h2>Comments:</h2>

            {commentItem && commentItem.map(({id, email, name, body}) => (
                <CommentItem
                    key={id}
                    email={email}
                    name={name}
                    body={body}
                />)
            )}
        </div>
    );
};

Posts.propTypes = {
    match: PropTypes.object
};

export default Posts;