import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserQuery } from "../config/graphql";

export const checkAuth = () => {
    const { loading, data } = useUserQuery({
        fetchPolicy: "cache-first",
    });
    const history = useHistory();

    useEffect(() => {
        if (!loading && !data?.CurrentUser) {
            history.push("/login");
        }
    }, [loading, data]);
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
