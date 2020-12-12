import React from "react";
import { Link } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { useUserQuery } from "~src/config/graphql";

export const Home = () => {
    const client = useApolloClient();
    const { data, loading, error } = useUserQuery({
        fetchPolicy: "network-only",
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
