import React from "react";
import utilStyles from "../styles/utils.module.css";
import subheaderStyles from "../styles/subheader.module.css";

import Typed from "react-typed";
import { Box, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { FaListUl } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

export const Subheader = () => {
    return (
        <Flex
            display={{ base: "none", sm: "flex" }}
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
            <ButtonGroup>
                <Box as="button">
                    <FaListUl fontSize="1.7rem" color="gray" />
                </Box>
                <Box as="button">
                    <FiGrid fontSize="1.7rem" color="gray" />
                </Box>
            </ButtonGroup>
        </Flex>
    );
};
