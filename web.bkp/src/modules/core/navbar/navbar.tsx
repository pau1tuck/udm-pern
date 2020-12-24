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
import { NavbarItems } from "./navbar-items";

export const Navbar = ({ user }: any) => {
    return (
        <div>
            <Flex
                as="nav"
                height={12}
                padding="1rem"
                align="center"
                justify="space-between"
                wrap="wrap"
                color="white"
                opacity="0.9"
            >
                <Flex align="center" />
                <NavbarItems user={user} />
            </Flex>
        </div>
    );
};