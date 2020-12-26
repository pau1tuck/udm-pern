import React from "react";
import utilStyles from "../styles/utils.module.css";
import subheaderStyles from "../styles/subheader.module.css";

import Typed from "react-typed";
import { Box, Flex, Text } from "@chakra-ui/react";
import Date from "./date";

export const Subheader = () => {
    return (
        <Flex
            mt={10}
            ml={3}
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
        >
            <Typed
                strings={[
                    "Delivering the finest new underground house and techno.",
                ]}
                typeSpeed={50}
                className={subheaderStyles.typed}
            />
            <Flex align="center" />
            <Box display={{ base: "block" }}>
                <Text fontFamily="track" fontSize="lg">
                    December 27, 2020
                </Text>
            </Box>
        </Flex>
    );
};
