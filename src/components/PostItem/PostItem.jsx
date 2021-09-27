import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostItem.module.css';


const PostItem = ({id, title, body, className}) => {
    return (
        <>
            {body ? (
                    <div className={styles.postitem_wrapper}>
                        <div className={styles.wrapper_title}>
                            <span className={styles.wrapper_number}>Post № {id}</span>
                            <span className={styles.wrapper_name}>{title}</span>
                        </div>
                        <p className={styles.wrapper_text}>{body}</p>
                    </div>
                )
                : (
                    <div className={styles.post}>
                        <span className={styles.post_number}>Post № {id}</span>
                        <span className={styles.post_title}>{title}</span>
                    </div>
                )
            }
        </>
    );
};

PostItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    className: PropTypes.string,
};

export default PostItem;