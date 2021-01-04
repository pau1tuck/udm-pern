import React, { useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    Text,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import NavbarItems from "./navbar-items";

export const Navbar = ({ user }: any) => {
    return (
        <div>
            <Container maxWidth="1200px">
                <Flex
                    as="nav"
                    height="60px"
                    margin="0px"
                    align="center"
                    justify="space-between"
                    wrap="wrap"
                    color="white"
                    opacity="0.9"
                >
                    <NavbarItems />
                </Flex>
            </Container>
        </div>
    );
};
