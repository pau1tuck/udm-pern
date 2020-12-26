import React from "react";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import {
    Box,
    Center,
    Container,
    Flex,
    Image as Img,
    Text,
} from "@chakra-ui/react";

export const Header: React.FC = () => {
    return (
        <Flex justifyContent="center">
            <Container>
                <Flex justifyContent="center">
                    <Box mt="-55px" zIndex="10">
                        <Img
                            objectFit="cover"
                            src="/images/udm-logo.png"
                            alt="UDM"
                        />
                    </Box>
                </Flex>
                <Flex justifyContent="center">
                    <Box mt="-10px" zIndex="11">
                        <img
                            className={utilStyles.title}
                            src="/images/udm-title.png"
                            alt="UNDERGROUND DANCE MUSIC"
                        />
                    </Box>
                </Flex>
            </Container>
        </Flex>
    );
};
