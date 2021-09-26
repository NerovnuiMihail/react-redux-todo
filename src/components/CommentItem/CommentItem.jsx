import React from 'react';
import PropTypes from 'prop-types';

import styles from './CommentItem.module.css';

const CommentItem = ({name, email, body}) => {
    return (
        <div className={styles.wrapper_comment}>
            <div className={styles.wrapper_title}>
                <span className={styles.comment_email}>{email}</span>
                <span className={styles.comment_title}>{name}</span>
            </div>
            <p className={styles.comment_body}>{body}</p>
        </div>
    );
};

CommentItem.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
};

export default CommentItem;