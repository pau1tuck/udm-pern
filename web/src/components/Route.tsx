import React from "react";
import { Redirect, Route as MyRoute } from "react-router-dom";
import { checkAuth } from "~/utils/permissions";
import { isLoggedInVar } from "~config/cache";

interface IRoute {
    exact?: boolean;
    path: string;
    component: any;
    restricted?: boolean;
    admin?: boolean;
}

export const Route: React.FC<IRoute> = ({
    exact,
    path,
    component: Component,
    restricted,
    admin,
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
