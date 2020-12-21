import React from "react";
import { Box, Center, Container, Flex, Wrap, WrapItem } from "@chakra-ui/react";

export const Home = () => {
    const trackContainer = (
        <Box
            width="250px"
            height="300px"
            margin="0px 10px 20px 10px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="darkgray"
        ></Box>
    );
    return (
        <Flex justifyContent="center">
            <Container maxW="1200px" margin="30px 10px" overflow="hidden">
                <Flex flexWrap="wrap" justifyContent="center">
                    {trackContainer}
                    {trackContainer}
                    {trackContainer}
                    {trackContainer}

                    {trackContainer}
                    {trackContainer}
                    {trackContainer}
                    {trackContainer}
                </Flex>
            </Container>
        </Flex>
    );
};
