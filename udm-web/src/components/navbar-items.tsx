import NextLink from "next/link";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    LightMode,
    Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";

export const NavbarItems = () => {
    const guestLinks = (
        <>
            <ButtonGroup
                display={{ base: "none", sm: "block" }}
                pr={1}
                variant="outline"
                spacing="2"
                fontFamily="heading"
                fontWeight="600"
            >
                <NextLink href="/login" as="/login">
                    <Button colorScheme="white" variant="ghost">
                        Log in
                    </Button>
                </NextLink>
                <NextLink href="/" as="/">
                    <LightMode>
                        <Button colorScheme="blue" variant="solid">
                            Sign up
                        </Button>
                    </LightMode>
                </NextLink>
            </ButtonGroup>
            <ButtonGroup display={{ base: "block", sm: "none" }} pr={1}>
                <FaRegUserCircle fontSize="26px" />
            </ButtonGroup>
        </>
    );
    return (
        <>
            {/*<Heading pt={1} pl={1} fontFamily="title" color="gray.700">
                UDM
    </Heading>*/}
            <ButtonGroup display={{ base: "block", sm: "none" }} pl={1}>
                <GiHamburgerMenu fontSize="26px" />
            </ButtonGroup>
            <Flex align="center" />
            <Box display={{ base: "block" }}>{guestLinks}</Box>
        </>
    );
};
