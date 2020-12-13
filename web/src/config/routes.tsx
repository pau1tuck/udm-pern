import React from "react";
import { Route, Switch } from "react-router-dom";
import { AdminRoute } from "../components/PrivateRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ListTracks } from "../pages/admin/ListTracks";

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <AdminRoute path="/admin/users" component={ListTracks} />
            </Switch>
        </div>
    );
};
// <Route path="/login" component={Login} />
