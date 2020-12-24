import React from "react";
import { useCurrentUserQuery } from "~/config/graphql";

export const Profile = () => {
    const { loading, error, data } = useCurrentUserQuery({
        fetchPolicy: "network-only",
    });
    if (loading) {
    }
    if (error) {
        console.log(error);
    }
    const user = data?.CurrentUser;
    return (
        <div>
            Welcome, {user.firstName} {user.lastName}.
        </div>
    );
};
