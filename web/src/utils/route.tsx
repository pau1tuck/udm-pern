import React from "react";
import { Redirect, Route as MyRoute } from "react-router-dom";
import { checkAuth, checkAdmin } from "~/utils/permissions";

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
    admin && checkAdmin();
    return (
        <MyRoute exact={exact} path={path}>
            <Component />
        </MyRoute>
    );
};
