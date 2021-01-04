import React from "react";
import Image from "next/image";
import Link from "next/link";
import headerStyles from "../styles/header.module.css";
import {
    Box,
    Center,
    Container,
    Flex,
    Image as Img,
    Text,
} from "@chakra-ui/react";

export const Header = () => {
    return (
        <Flex justifyContent="center">
            <Container>
                <Flex justifyContent="center">
                    <Link href="/">
                        <Box as="button" mt="-55px" zIndex="10">
                            <Img
                                objectFit="cover"
                                src="/images/udm-logo.png"
                                alt="UDM"
                            />
                        </Box>
                    </Link>
                </Flex>
                <Flex justifyContent="center">
                    <Box mt="-10px" zIndex="11">
                        <img
                            className={headerStyles.title}
                            src="/images/udm-title.png"
                            alt="UNDERGROUND DANCE MUSIC"
                        />
                    </Box>
                </Flex>
            </Container>
        </Flex>
    );
};
