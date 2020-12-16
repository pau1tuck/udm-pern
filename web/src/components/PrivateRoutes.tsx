import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useUserQuery } from "~config/graphql";
import { checkAuth, checkAdmin } from "../utils/checkPermissions";

/*
export const DogRoute = ({ path, component: Component }: any) => {
    const history = useHistory();
    const isLoggedIn = checkAuth();

    useEffect(() => {
        if (!isLoggedIn) {
            console.log("Nice try, bastard.");
            <Route render={(props) => <Redirect to="/" />} />;
        }
    }, []);

    return <Route path={path} render={(props) => <Component {...props} />} />;
}; */

export const PrivateRoute = ({
    component: Component,
    isLoggedIn,
    ...rest
}: any) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};
