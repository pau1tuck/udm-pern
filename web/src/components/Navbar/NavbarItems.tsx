import React, { useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import { useCurrentUserQuery } from "~config/graphql";
import { Avatar, Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export const NavbarItems: React.FC = () => {
    const { loading, error, data } = useCurrentUserQuery({
        fetchPolicy: "cache-only",
    });

    const user = data?.CurrentUser;

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
                {user?.firstName + " " + user?.lastName}
            </Text>
            <Avatar mr="8px" src="/images/avatar2.png" />
        </Flex>
    );

    useEffect(() => {}, [user]);

    if (loading) {
        return (
            <Box display={{ base: "block" }}>
                <Text
                    mr="5px"
                    fontFamily="heading"
                    fontWeight="600"
                    fontSize="sm"
                >
                    Loading...
                </Text>
            </Box>
        );
    }
    return (
        <Box display={{ base: "block" }}>
            {data?.CurrentUser ? userLinks : guestLinks}
        </Box>
    );
};
