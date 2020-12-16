import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedInVar } from "~config/cache";

interface IRoute {
    path: string;
    component: any;
}

export const PrivateRoute: React.FC<IRoute> = (route: IRoute) => {
    const isLoggedIn = isLoggedInVar();

    return (
        <Route
            path={route.path}
            render={(props) =>
                isLoggedIn ? (
                    <route.component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};
