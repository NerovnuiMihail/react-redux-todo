import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import ToDoPage from "../pages/Todo/ToDoPage";

const RouterApp = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/todos">
                    <ToDoPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default RouterApp;