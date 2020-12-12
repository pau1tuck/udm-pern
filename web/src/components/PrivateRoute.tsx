import React from "react";
import { useUserQuery } from "../config/graphql";

export const Home = () => {
    const { data, loading, error } = useUserQuery({
        fetchPolicy: "cache-first",
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (data) {
        return (
            <span>
                <p>Hello, User.</p>
            </span>
        );
    }
};
