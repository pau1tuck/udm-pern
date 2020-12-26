import React from "react";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import { Box, Center, Flex, Image as Img, Text } from "@chakra-ui/react";

export type TSize = "base" | "md" | "max";

interface IContainer {
    children: React.ReactNode;
    size?: TSize;
}

export const Container = ({ children, size = "max" }: IContainer) => {
    return <Box maxW={size === "max" ? "1200px" : "400px"}>{children}</Box>;
};
