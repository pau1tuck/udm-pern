import React from "react";
import { Link as ReactLink } from "react-router-dom";
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";

export const Home = () => {
    const trackContainer = (
        <Box
            width="250px"
            height="300px"
            margin="0px 10px 20px 10px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="darkgray"
        ></Box>
    );
    return (
        <>
            <Flex flexWrap="wrap" justifyContent="center">
                {trackContainer}
                {trackContainer}
                {trackContainer}
                {trackContainer}

                {trackContainer}
                {trackContainer}
                {trackContainer}
                {trackContainer}
            </Flex>
            <Button as={ReactLink} to="/admin/add-track">
                Add Track
            </Button>
        </>
    );
};
