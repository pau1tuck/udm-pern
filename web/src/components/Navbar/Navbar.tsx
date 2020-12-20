import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
    return (
        <div>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1.5rem"
                bg="teal.500"
                color="white"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                        UDM
                    </Heading>
                </Flex>
            </Flex>
        </div>
    );
};
