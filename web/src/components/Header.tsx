import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

export const Header: React.FC = () => {
    return (
        <Flex>
            <Box boxSize="sm">
                <Image
                    boxSize="100px"
                    objectFit="cover"
                    src="https://bit.ly/sage-adebayo"
                    alt="Segun Adebayo"
                />
            </Box>
        </Flex>
    );
};
