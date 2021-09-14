import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home/Home";
import PageNotFound from '../pages/PageNotFound';
import ToDoPage from "../pages/Todo/ToDoPage";

const RouterApp = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/todos">
                <ToDoPage />
            </Route>
            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
    );
};

export default RouterApp;