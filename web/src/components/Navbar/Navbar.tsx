import React from "react";
import { Link as ReactLink } from "react-router-dom";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Link,
    Text,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";

export const Navbar = () => {
    const guestLinks = (
        <ButtonGroup variant="outline" spacing="2">
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

    const userLinks = (
        <Flex alignItems="center">
            <Text mr="15px" fontFamily="heading" fontWeight="600" fontSize="sm">
                Paul Tuck
            </Text>
            <Avatar mr="8px" src="https://bit.ly/sage-adebayo" />
        </Flex>
    );

    return (
        <div>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="0.5rem"
                color="white"
                opacity="0.9"
            >
                <Flex align="center" />

                <Box display={{ base: "block" }}>{userLinks}</Box>
            </Flex>
        </div>
    );
};
