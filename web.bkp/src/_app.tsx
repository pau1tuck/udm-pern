import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./modules/core/navbar/navbar";
import { Header } from "./components/Header";
import { Routes } from "~/config/routes";
import { Container, Flex } from "@chakra-ui/react";
import { useCurrentUserQuery } from "~config/graphql";
import { cache, userVar } from "~/config/cache";
import { client } from "~config/apollo";
import { gql } from "@apollo/client";

const App = () => {
    const { loading, error, data } = useCurrentUserQuery({
        fetchPolicy: "cache-first",
    });
    const { CurrentUser } = client.readQuery({
        query: gql`
            query currentUser {
                CurrentUser {
                    firstName
                }
            }
        `,
    });
    console.log("Current user is: " + CurrentUser);
    let user: any = null;
    if (loading) {
        <div>Loading...</div>;
    }
    if (!loading && data?.CurrentUser) {
        user = data.CurrentUser;
        localStorage.setItem("user", user.firstName + " " + user.lastName);
        userVar(user.firstName + " " + user.lastName);
    }
    return (
        <Box
            bgImage="url('/images/background.jpg')"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
        >
            <Navbar user={user} />
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
