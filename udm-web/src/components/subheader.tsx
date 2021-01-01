import React from "react";
import utilStyles from "../styles/utils.module.css";
import subheaderStyles from "../styles/subheader.module.css";

import Typed from "react-typed";
import { Box, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export const Subheader = () => {
    return (
        <Flex
            display={{ base: "none", sm: "flex" }}
            mt={4}
            mb={8}
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
        </Flex>
    );
};
