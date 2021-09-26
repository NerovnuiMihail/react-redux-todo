import React from 'react';
import { Route, Switch } from "react-router-dom";

import {routs} from "./routs";

const RouterApp = () => {
    return (
        <Switch>
            {routs.map((route,index) => (
                <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Switch>
    );
};

export default RouterApp;