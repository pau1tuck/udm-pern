import playerStyles from "../styles/player.module.css";
import trackStyles from "../styles/tracks.module.css";
import {
    Box,
    Button,
    ColorModeScript,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    LightMode,
    Square,
    Text,
    ScaleFade,
    Spacer,
    Stack,
    ButtonGroup,
} from "@chakra-ui/react";
import { HiOutlineThumbUp } from "react-icons/hi";

export const GridBox = ({ track }: any) => {
    return (
        <Box w="210px" ml={4}>
            <Box
                as="button"
                display="block"
                w="210px"
                h="350px"
                mb={4}
                bgColor="gray.900"
                borderRadius={5}
                opacity="0.8"
                textAlign="center"
            >
                <Box
                    position="static"
                    w="150px"
                    h="150px"
                    mt="-150px"
                    ml="auto"
                    mr="auto"
                >
                    <img
                        src={`http://localhost:5000/media/artwork/${track.image}`}
                        className={playerStyles.image}
                    />
                </Box>

                <Box
                    position="absolute"
                    m="0px"
                    pl="10px"
                    pr="10px"
                    w="210px"
                    mt="10px"
                    textAlign="center"
                >
                    <Text fontFamily="track" fontSize="md">
                        <span className={trackStyles.title}>{track.title}</span>
                        <br />
                        <span className={trackStyles.artist}>
                            {track.artist}
                        </span>
                        <br />
                        {track.version ? (
                            <>
                                <span className={trackStyles.version}>
                                    ({track.version})
                                </span>
                                <br />
                            </>
                        ) : (
                            ""
                        )}
                        {track.label ? (
                            <span className={trackStyles.label}>
                                {track.label}
                            </span>
                        ) : (
                            ""
                        )}
                    </Text>
                </Box>
            </Box>
            <Box zIndex="1000" position="absolute" width="210px">
                <Flex mt="-60px" justifyContent="center">
                    <HiOutlineThumbUp />
                    <Box display="block" opacity="0.8">
                        <img src="images/buy.png" />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};
