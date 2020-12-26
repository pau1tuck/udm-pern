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

export const NavbarItems = () => {
    const guestLinks = (
        <ButtonGroup
            visibility={{ base: "hidden", sm: "visible" }}
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
    );
    return (
        <>
            {/* <Heading pl={1} fontFamily="title" color="gray.700">
                UDM
    </Heading> */}
            <Flex align="center" />
            <Box display={{ base: "block" }}>{guestLinks}</Box>
        </>
    );
};
