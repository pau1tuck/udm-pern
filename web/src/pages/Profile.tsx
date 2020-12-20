import React from "react";
import { useUserQuery } from "~/config/graphql";

export const Profile = () => {
    const { loading, error, data } = useUserQuery({
        fetchPolicy: "network-only",
    });
    if (loading) {
    }
    if (error) {
        console.log(error);
    }
    return (
        <div>
            Welcome, {data?.CurrentUser?.firstName}{" "}
            {data?.CurrentUser?.lastName}.
        </div>
    );
};
