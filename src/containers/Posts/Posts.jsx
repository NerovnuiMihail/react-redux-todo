import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
// import PropTypes from 'prop-types';

import {BASE_URL, POST_ID_URL, ID_URL, POSTS_URL, COMMENTS_URL} from "../../api/constants";
import PostItem from "../../components/PostItem/PostItem";
import CommentItem from "../../components/CommentItem/CommentItem";
import PropTypes from "prop-types";

import styles from "./Posts.module.css";


const Posts = ({match}) => {
    const goBack = useHistory();
    const [postItem, setPostItem] = useState([]);
    const [commentItem, setCommentItem] = useState([]);

    const idPage = match.params.id;

    useEffect(() => {
        axios.get(BASE_URL + POSTS_URL + ID_URL + idPage)
            .then(res => setPostItem(res.data))
    }, [idPage]);

    useEffect(() => {
        axios.get(BASE_URL + COMMENTS_URL + POST_ID_URL + idPage)
            .then(res => setCommentItem(res.data))
    }, [idPage]);

    console.log(commentItem)
    console.log(postItem)

    const handleGoBack = () => {
        goBack.goBack();
    }

    return (
        <div className={styles.post_wrapper}>
            <button onClick={handleGoBack}>GO BACK</button>

            {postItem && postItem.map(({id, title, body}) => (
                <PostItem
                    key={id}
                    id={id}
                    title={title}
                    body={body}
                />)
            )}
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