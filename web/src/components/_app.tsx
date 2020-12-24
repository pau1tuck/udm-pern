import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../modules/core/navbar/navbar";
import { Header } from "./Header";
import { Routes } from "~/config/routes";
import { Container, Flex } from "@chakra-ui/react";
import { useCurrentUserQuery } from "~config/graphql";
import { userVar } from "~/config/cache";

const App = () => {
    const { loading, error, data } = useCurrentUserQuery({
        fetchPolicy: "cache-first",
    });
    if (loading) {
    }
    if (!loading && data?.CurrentUser) {
        userVar(data.CurrentUser);
    }
    return (
        <Box
            bgImage="url('/images/background.jpg')"
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
