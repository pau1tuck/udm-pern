import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkAuth, checkAdmin } from "../utils/checkPermissions";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                checkAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export const AdminRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                checkAdmin() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};
