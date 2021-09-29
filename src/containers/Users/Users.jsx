import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";
import axios from "axios";

import {BASE_URL, USERS_URL} from "../../api/constants";
import Button from "../../moduls/Button/Button";

import styles from './Users.module.css';


const Users = ({match}) => {

    const goBack = useHistory();
    const [users, setUsers] = useState(null);

    const userID = match.params.id;

    useEffect(() => {
        axios.get(BASE_URL + USERS_URL + "/" + userID)
            .then(res => setUsers(res.data))
    }, [userID]);

    console.log(users)

    return (
        <div className={styles.container}>
            <Button className={styles.container_btn} onClick={() => goBack.goBack()} text="Назад" />

            {users && (
                <div className={styles.wrapper}>
                    <div className={styles.flex_wrapper}>
                        <h2 className={styles.title}>Личная инфорация:</h2>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Никнейм:</span>
                            <span className={styles.column_right}>{users.username}</span>
                        </span>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Имя:</span>
                            <span className={styles.column_right}>{users.name}</span>
                        </span>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Телефон:</span>
                            <span className={styles.column_right}>{users.phone}</span>
                        </span>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>EMAIL:</span>
                            <span className={styles.column_right}>{users.email}</span>
                        </span>
                    </div>

                    <div className={styles.flex_wrapper}>
                        <h2 className={styles.title}>Место жительства:</h2>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Город:</span>
                            <span className={styles.column_right}>{users.address.city}</span>
                        </span>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Улица:</span>
                            <span className={styles.column_right}>{users.address.street}</span>
                        </span>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Дом:</span>
                            <span className={styles.column_right}>{users.address.suite}</span>
                        </span>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Индекс:</span>
                            <span className={styles.column_right}>{users.address.zipcode}</span>
                        </span>
                    </div>

                    <div className={styles.flex_wrapper}>
                        <h2 className={styles.title}>Информация о работе:</h2>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Название компании:</span>
                            <span className={styles.column_right}>{users.company.name}</span>
                        </span>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Вид деятельности:</span>
                            <span className={styles.column_right}>{users.company.bs}</span>
                        </span>
                        <span className={styles.wrapper_column}>
                            <span className={styles.column_left}>Девиз:</span>
                            <span className={styles.column_right}>{users.company.catchPhrase}</span>
                        </span>
                    </div>
                </div>
            )}

            <div className={styles.map_app}>
                {users && (
                    <>
                        <span>LAT:::::  {users.address.geo.lat}</span>
                        <span>LNG:::::  {users.address.geo.lng}</span>
                    </>
                )}
            </div>
        </div>
    );
};

Users.propTypes = {
    match: PropTypes.object
};

export default Users;