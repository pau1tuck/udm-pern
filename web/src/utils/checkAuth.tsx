import React from "react";
import { useUserQuery } from "../config/graphql";

export const checkAuth = () => {
    const { data, loading, error } = useUserQuery({
        fetchPolicy: "cache-first",
    });

    if (data?.CurrentUser) {
        console.log(data.CurrentUser);
        return true;
    }
    return false;
};
