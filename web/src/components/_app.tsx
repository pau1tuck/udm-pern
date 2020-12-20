import React from "react";
import { isLoggedInVar } from "~config/cache";
import { useUserQuery } from "~config/graphql";
import { Navbar } from "./Navbar/Navbar";
import { Routes } from "~/config/routes";

const App = () => {
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
            <Navbar />
            <Routes />
        </div>
    );
};

export default App;
