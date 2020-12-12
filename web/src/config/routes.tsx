import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
};
