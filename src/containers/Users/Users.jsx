import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";
import axios from "axios";

import {BASE_URL, USERS_URL} from "../../api/constants";

// import styles from './Users.module.css';


const Users = ({match}) => {

    const goBack = useHistory();
    const [user, setUser] = useState(null);

    const userID = match.params.id;

    useEffect(() => {
        axios.get(`${BASE_URL}${USERS_URL}/${userID}`)
            .then(res => setUser(res.data));
    }, [userID]);

    console.log(user)

    return (
        <div>
            <button onClick={() => goBack.goBack()}>GOBACK</button>

        </div>
    );
};

Users.propTypes = {
    match: PropTypes.object
};

export default Users;