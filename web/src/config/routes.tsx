import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "~pages/Profile";
import { ListTracks } from "../pages/admin/ListTracks";
import { useUserQuery } from "./graphql";
import { PrivateRoute } from "~components/PrivateRoutes";

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
};
//
