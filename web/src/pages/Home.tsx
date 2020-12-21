import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

export const Home = () => {
    return (
        <Flex justifyContent="center">
            <Container
                maxW="1200px"
                margin="30px 10px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
            >
                <div>Welcome to UDM.</div>;
            </Container>
        </Flex>
    );
};
