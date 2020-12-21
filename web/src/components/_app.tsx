import React from "react";
import { isLoggedInVar } from "~config/cache";
import { useUserQuery } from "~config/graphql";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Routes } from "~/config/routes";

const App = () => {
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
