import React from "react";
import { Redirect, Route as MyRoute } from "react-router-dom";
import { checkAuth } from "~/utils/permissions";
import { isLoggedInVar } from "~config/cache";

interface IRoute {
    restricted?: boolean;
    exact?: boolean;
    path: string;
    component: any;
}

export const Route: React.FC<IRoute> = ({
    restricted,
    exact,
    path,
    component: Component,
}: IRoute) => {
    restricted && checkAuth();
    return (
        <MyRoute
            exact={exact}
            path={path}
            render={(props) => <Component {...props} />}
        />
    );
};

export const PrivateRoute: React.FC<IRoute> = ({
    path,
    component: Component,
}: IRoute) => {
    const isLoggedIn = isLoggedInVar();

    return (
        <MyRoute
            path={path}
            render={(props) =>
                isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};
