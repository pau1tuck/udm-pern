import React, { useEffect } from "react";
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
import { useUserQuery } from "~config/graphql";

export const Navbar = () => {
    const { loading, error, data } = useUserQuery({
        fetchPolicy: "network-only",
    });

    const guestLinks = (
        <ButtonGroup
            variant="outline"
            spacing="2"
            fontFamily="heading"
            fontWeight="600"
        >
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
                {data?.CurrentUser?.firstName +
                    " " +
                    data?.CurrentUser?.lastName}
            </Text>
            <Avatar mr="8px" src="https://bit.ly/sage-adebayo" />
        </Flex>
    );

    useEffect(() => {}, [data?.CurrentUser]);

    if (loading) {
    }
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

                <Box display={{ base: "block" }}>
                    {data?.CurrentUser ? userLinks : guestLinks}
                </Box>
            </Flex>
        </div>
    );
};
