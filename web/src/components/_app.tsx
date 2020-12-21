import React from "react";
import { isLoggedInVar } from "~config/cache";
import { useUserQuery } from "~config/graphql";
import { Box, Container } from "@chakra-ui/react";
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
        <Box
            height="100vh"
            bgImage="url('/images/background.jpg')"
            bgSize="cover"
            bgRepeat="no-repeat"
        >
            <Navbar />
            <Routes />
        </Box>
    );
};

export default App;
