import React from "react";
import { useUserQuery } from "../config/graphql";

export const checkAuth = () => {
    const { data, loading } = useUserQuery({
        fetchPolicy: "cache-first",
    });
    if (loading) {
    }
    if (data?.CurrentUser) {
        console.log(data.CurrentUser);
        return true;
    }
    return false;
};

export const checkAdmin = () => {
    const { data, loading } = useUserQuery({
        fetchPolicy: "cache-first",
    });
    if (loading) {
    }
    if (data?.CurrentUser?.isAdmin) {
        console.log("User is admin: " + data.CurrentUser.isAdmin);
        return true;
    }
    return false;
};
