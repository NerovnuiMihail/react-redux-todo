import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from "../containers/Home/Home";
import PageNotFound from '../containers/PageNotFound';
import ToDoPage from "../containers/Todo/ToDoPage";
import PlaceholderToDo from "../containers/PlaceholderToDo/PlaceholderToDo";

const RouterApp = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/todos">
                <ToDoPage />
            </Route>
            <Route exact path="/place_todos">
                <PlaceholderToDo />
            </Route>
            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
    );
};

export default RouterApp;