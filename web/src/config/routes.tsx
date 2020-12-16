import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "~pages/Profile";
import { ListTracks } from "../pages/admin/ListTracks";
import { useUserQuery } from "./graphql";

export const Routes = () => {
    const { data, loading } = useUserQuery({
        fetchPolicy: "cache-first",
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if (loading) {
    }
    if (data?.CurrentUser) {
        setIsLoggedIn(true);
    }
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute
                    path="/profile"
                    component={Profile}
                    isLoggedIn={isLoggedIn}
                />
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
};
//
