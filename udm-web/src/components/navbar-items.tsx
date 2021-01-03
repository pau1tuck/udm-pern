import { useRouter } from "next/router";
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
import { useApolloClient } from "@apollo/client";
import { useUserQuery, useLogoutMutation } from "../graphql/graphql";

export const NavbarItems = () => {
    const router = useRouter();
    const [logout, { loading: logoutLoading }] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const { data, loading } = useUserQuery({
        fetchPolicy: "cache-first",
    });

    let items = null;

    if (loading) {
    }
    if (!loading && data.CurrentUser) {
        const items = (
            <Flex mt={3} alignItems="center">
                <Text
                    mr="15px"
                    fontFamily="heading"
                    fontWeight="600"
                    fontSize="sm"
                >
                    {`${data.CurrentUser.firstName} ${data.CurrentUser.lastName}`}
                </Text>
                <Avatar as="button" mr={3}>
                    <img src="images/avatar2.png" />
                </Avatar>
            </Flex>
        );
    } else {
        const items = (
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
    }

    return (
        <>
            {/*<Heading pt={1} pl={1} fontFamily="title" color="gray.700">
                UDM
    </Heading>*/}
            <ButtonGroup display={{ base: "block", sm: "none" }} pl={1}>
                <GiHamburgerMenu fontSize="26px" />
            </ButtonGroup>
            <Flex align="center" />
            <Box display={{ base: "block" }}>{items}</Box>
        </>
    );
};
