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
import { AiFillPlayCircle } from "react-icons/ai";
import { MdPauseCircleFilled } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";

export const GridBox = ({ track }: any) => {
    return (
        <>
            <Box
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
                    <IconButton
                        aria-label="Like button"
                        background="none"
                        _hover={{
                            background: "none",
                        }}
                        _active={{
                            background: "none",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                    >
                        <RiThumbUpFill fontSize="1.1rem" color="#5b5b5b" />
                    </IconButton>
                    <IconButton
                        aria-label="Favorite button"
                        ml={2}
                        background="none"
                        _hover={{
                            background: "none",
                        }}
                        _active={{
                            background: "none",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                    >
                        <BsFillStarFill fontSize="1.1rem" color="#5b5b5b" />
                    </IconButton>
                    <IconButton
                        aria-label="Add track button"
                        ml={2}
                        pt="1px"
                        background="none"
                        _hover={{
                            background: "none",
                        }}
                        _active={{
                            background: "none",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                    >
                        <BiPlusMedical fontSize="1.3rem" color="#5b5b5b" />
                    </IconButton>
                    <IconButton
                        aria-label="Buy track"
                        display="block"
                        ml={4}
                        background="none"
                        opacity="0.9"
                        _hover={{
                            background: "none",
                        }}
                        _active={{
                            background: "none",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                    >
                        <a href={track.buyUrl} target="_blank">
                            <img src="images/bp.png" />
                        </a>
                    </IconButton>
                </Flex>
            </Box>
        </>
    );
};
