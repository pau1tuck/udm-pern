import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "~components/Route";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "~pages/Profile";
import { CreateTrack } from "~pages/admin/CreateTrack";

const UserRoutes = [
    {
        name: "Register",
        path: "/register",
        restricted: false,
    },
    {
        name: "Login",
        path: "/login",
        restricted: false,
    },
    {
        name: "Forgot Password",
        path: "/forgot",
        restricted: false,
    },
    {
        name: "Profile",
        path: "/profile",
        restricted: true,
    },
    {
        name: "Playlists",
        path: "/playlists",
        restricted: true,
    },
    {
        name: "Playlist",
        path: "/playlists/:id",
        restricted: true,
    },
];

const AdminRoutes = [];

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route restricted path="/profile" component={Profile} />
                <Route admin path="/admin/add-track" component={CreateTrack} />
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
};
//
