import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar/Navbar";
import { Header } from "./Header";
import { Routes } from "~/config/routes";
import { Container, Flex } from "@chakra-ui/react";

const App = () => {
    return (
        <Box
            height="100vh"
            bgImage="url('public/images/background.jpg')"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
        >
            <Navbar />
            <Header />
            <Flex justifyContent="center">
                <Container maxW="1200px" margin="30px 10px" overflow="hidden">
                    <Routes />
                </Container>
            </Flex>
        </Box>
    );
};

export default App;
