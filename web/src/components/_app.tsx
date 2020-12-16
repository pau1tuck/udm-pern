import React from "react";
import { isLoggedInVar } from "~config/cache";
import { useUserQuery } from "~config/graphql";
import { Routes } from "../config/routes";

function App() {
    const { data, loading } = useUserQuery({
        fetchPolicy: "network-only",
    });
    if (loading) {
    }
    if (data?.CurrentUser) {
        console.log(data.CurrentUser);
        isLoggedInVar(true);
    }
    return (
        <div>
            <Routes />
        </div>
    );
}

export default App;
