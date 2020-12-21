import React from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

export const Header: React.FC = () => {
    return (
        <div>
            <Flex justifyContent="center">
                <Box mt="-60px" zIndex="10">
                    <Image
                        objectFit="cover"
                        src="/images/udm-logo.png"
                        alt="Segun Adebayo"
                    />
                </Box>
            </Flex>
            <Center>
                <Text
                    fontFamily="Michroma"
                    fontSize="1rem"
                    fontWeight="600"
                    color="lightgrey"
                >
                    UNDERGROUND &nbsp; &nbsp; DANCE &nbsp; &nbsp; MUSIC
                </Text>
            </Center>
        </div>
    );
};
