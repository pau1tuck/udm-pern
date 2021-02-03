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
    Icon,
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
import { RiThumbUpFill } from "react-icons/ri";
import { BsFillStarFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";

export const GridBox = ({ track }: any) => {
    return (
        <>
            <Box
                display="block"
                w="210px"
                h="305px"
                bgColor="#0d0d0d"
                borderTopRadius={5}
                opacity="0.9"
                textAlign="center"
            >
                <Box w="150px" h="150px" pt="20px" ml="auto" mr="auto">
                    <img
                        src={`http://localhost:5000/media/artwork/${track.image}`}
                        className={playerStyles.image}
                    />
                </Box>

                <Box
                    w="210px"
                    h="190px"
                    pt="30px"
                    pr="10px"
                    pl="10px"
                    textAlign="center"
                    overflow="auto"
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
        </>
    );
};
