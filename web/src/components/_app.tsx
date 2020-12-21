import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar/Navbar";
import { Header } from "./Header";
import { Routes } from "~/config/routes";

const App = () => {
    return (
        <Box
            height="100vh"
            bgImage="url('/images/background.jpg')"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
        >
            <Navbar />
            <Header />
            <Routes />
        </Box>
    );
};

export default App;
