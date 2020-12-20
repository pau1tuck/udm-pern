import React from "react";
import { Link as ReactLink } from "react-router-dom";
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Link,
} from "@chakra-ui/react";

export const Navbar = () => {
    const guestLinks = (
        <ButtonGroup variant="outline" spacing="3">
            <Button
                as={ReactLink}
                to="/login"
                colorScheme="white"
                variant="ghost"
            >
                Log in
            </Button>
            <Button
                as={ReactLink}
                to="/register"
                colorScheme="blue"
                variant="solid"
            >
                Sign up
            </Button>
        </ButtonGroup>
    );

    const userLinks = {};

    return (
        <div>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="0.5rem"
                bg="gray.500"
                color="white"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                        UDM
                    </Heading>
                </Flex>

                <Box display={{ base: "block" }}></Box>
            </Flex>
        </div>
    );
};
