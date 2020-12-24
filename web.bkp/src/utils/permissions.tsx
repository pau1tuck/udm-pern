import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUserQuery } from "../config/graphql";

export const checkAuth = () => {
    const { loading, data } = useCurrentUserQuery({
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
    const { loading, data } = useCurrentUserQuery({
        fetchPolicy: "network-only",
    });
    const history = useHistory();

    useEffect(() => {
        if (!loading && !data?.CurrentUser?.isAdmin) {
            console.log(data?.CurrentUser);
            history.push("/");
        }
    }, [data]);
};
