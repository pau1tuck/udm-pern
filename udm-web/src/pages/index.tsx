import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
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
    Icon,
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
import { Search2Icon } from "@chakra-ui/icons";
import { FaListUl, FaPlus } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { SiAudiomack } from "react-icons/si";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdPauseCircleFilled } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";

import { IoPlayBackSharp } from "react-icons/io5";
import { IoPlayForwardSharp } from "react-icons/io5";
import { RiThumbUpFill } from "react-icons/ri";
import { withApollo } from "../utils/with-apollo";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useTracksQuery } from "../graphql/graphql";
import { GridBox } from "../components/grid-box";

const Home = () => {
    const {
        loading: tracksLoading,
        error,
        data: tracksData,
        fetchMore,
        variables,
    } = useTracksQuery({
        fetchPolicy: "cache-first",
        variables: {
            limit: 31,
        },
        notifyOnNetworkStatusChange: true,
    });

    const [mode, setMode] = useState("latest");
    const [viewMode, setViewMode] = useState("grid");
    const [currentTrack, setCurrentTrack] = useState("");
    const [nowPlaying, setNowPlaying] = useState({
        artist: "",
        title: "",
        version: "",
    });
    const [isPlaying, setIsPlaying] = useState(false);

    let user: any;
    let listView: any;
    let gridView: any;

    const player = useRef(null);

    const handleTrack = (track: any) => {
        setCurrentTrack(`http://localhost:5000/media/tracks/${track.trackUrl}`);
        setNowPlaying(track);
        setIsPlaying(true);
    };

    const handlePlayPause = () => {
        if (isPlaying === true) {
            player.current.pause();
            setIsPlaying(false);
        } else {
            player.current.play();
            setIsPlaying(true);
        }
    };

    if (!tracksLoading && tracksData) {
        const tracks = tracksData.Tracks.tracks;
        console.log(tracks);

        /* LIST VIEW */

        listView = tracks.map((track, key) => (
            <Box
                key={key}
                as="button"
                onClick={() => {
                    if (nowPlaying === track) {
                        setIsPlaying(false);
                    } else {
                        setCurrentTrack(
                            `http://localhost:5000/media/tracks/${track.trackUrl}`
                        );
                        setNowPlaying(track);
                        setIsPlaying(true);
                    }
                }}
                w="98%"
                h="60px"
                mb="10px"
                ml="5px"
                bgColor="#0d0d0d"
                borderRadius={5}
                opacity="0.8"
                textAlign="left"
            >
                <Text pl="20px" fontFamily="track" fontSize="lg">
                    {track.artist} - {track.title}{" "}
                    {track.version ? `(${track.version})` : ""}{" "}
                    {track.label ? `[${track.label}]` : ""}
                </Text>
            </Box>
        ));

        /* GRID VIEW */

        gridView = tracks.map((track, key) => (
            <Box w="210px" ml={4}>
                <Box
                    key={key}
                    as="button"
                    onClick={() => {
                        setCurrentTrack(
                            `http://localhost:5000/media/tracks/${track.trackUrl}`
                        );
                        setNowPlaying(track);
                        setIsPlaying(true);
                    }}
                    zIndex="1"
                    w="210px"
                    height="305px"
                    mt={4}
                >
                    <GridBox track={track} />
                </Box>
                <Box
                    zIndex="1000"
                    width="210px"
                    height="35px"
                    pt="2px"
                    bgColor="#0d0d0d"
                    borderBottomRadius={5}
                    opacity="0.9"
                >
                    <Flex justifyContent="center">
                        <Box
                            aria-label="Buy track"
                            display="block"
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
                                <img src="/images/bp.png" />
                            </a>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        ));

        return !tracksData && tracksLoading ? (
            <div>Loading...</div>
        ) : (
            <>
                <Layout home>
                    <Head>
                        <title>{siteTitle}</title>
                    </Head>
                    <ColorModeScript initialColorMode="light" />
                    <Flex color="white">
                        <Box w="200px" height="300px" ml="10px" p="10px">
                            <Heading
                                as="button"
                                size="md"
                                mb={5}
                                fontWeight="600"
                                color="blue.400"
                            >
                                Latest Tunes
                            </Heading>
                        </Box>
                        <Box mt="0px" overflowY="auto" flex="1" w="100%">
                            <Flex mb={8} as="nav" justify="space-between">
                                <Flex
                                    zIndex="100"
                                    ml={2}
                                    alignItems="center"
                                    opacity="0.7"
                                >
                                    {/*<Box as="button">
                                    <IoPlayBackSharp
                                        display="inline-block"
                                        fontSize="1.5rem"
                                        color="#474747"
                                    />
                                    </Box>*/}
                                    {isPlaying ? (
                                        <IconButton
                                            variant="no-border"
                                            ml={2}
                                            onClick={handlePlayPause}
                                            aria-label="Pause button"
                                            _focus={{
                                                borderWidth: "0px",
                                                boxShadow: "none",
                                            }}
                                            icon={
                                                <MdPauseCircleFilled
                                                    display="inline-block"
                                                    fontSize="2.8rem"
                                                    color="#ff195a"
                                                />
                                            }
                                        />
                                    ) : (
                                        <IconButton
                                            variant="no-border"
                                            ml={2}
                                            onClick={handlePlayPause}
                                            aria-label="Play button"
                                            _focus={{
                                                borderWidth: "0px",
                                                boxShadow: "none",
                                            }}
                                            icon={
                                                <AiFillPlayCircle
                                                    display="inline-block"
                                                    fontSize="2.8rem"
                                                    color="#1DD05D"
                                                />
                                            }
                                        />
                                    )}

                                    {/* <Box as="button" ml={2}>
                                    <IoPlayForwardSharp
                                        display="inline-block"
                                        fontSize="1.5rem"
                                        color="#1DD05D"
                                    />
                                    </Box>*/}

                                    {nowPlaying.artist && (
                                        <Box mt="-2px" ml={4} overflow="hidden">
                                            <Text
                                                fontFamily="track"
                                                fontSize="lg"
                                            >
                                                {nowPlaying.artist} -{" "}
                                                {nowPlaying.title}{" "}
                                                {nowPlaying.version
                                                    ? nowPlaying.version
                                                    : ""}
                                            </Text>
                                        </Box>
                                    )}
                                </Flex>
                                <Flex align="center" />

                                <Box
                                    mr={2}
                                    mb="-5px"
                                    right="0"
                                    textAlign="right"
                                >
                                    <IconButton
                                        aria-label="List mode"
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
                                        onClick={() => setViewMode("list")}
                                        icon={
                                            <FaListUl
                                                fontSize="1.7rem"
                                                color="gray"
                                            />
                                        }
                                    />
                                    <IconButton
                                        aria-label="Grid mode"
                                        ml="2px"
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
                                        onClick={() => setViewMode("grid")}
                                        icon={
                                            <FiGrid
                                                fontSize="1.7rem"
                                                color="gray"
                                            />
                                        }
                                    />
                                </Box>
                            </Flex>
                            <InputGroup>
                                <InputLeftElement
                                    ml={2}
                                    pointerEvents="none"
                                    children={<Search2Icon color="gray.400" />}
                                />
                                <Input w="97%" ml={2} mb={5} borderWidth={2} />
                            </InputGroup>

                            <Flex wrap="wrap">
                                {viewMode === "grid" ? gridView : listView}
                            </Flex>
                            <Flex
                                as="nav"
                                align="center"
                                justify="space-between"
                                wrap="nowrap"
                            >
                                {/* <Flex
                                w="80%"
                                h="60px"
                                mt={5}
                                mb="10px"
                                ml="5px"
                                mr={2}
                                pl="20px"
                                borderRadius={5}
                                bgColor="blue.800"
                                textAlign="left"
                                align="center"
                                opacity="0.6"
                                color="white"
                            >
                                <Text
                                    fontFamily="title"
                                    fontSize="1.5rem"
                                    color="white"
                                >
                                    <SiAudiomack />
                                </Text>
                            </Flex> */}
                                <Flex align="center" />
                                <Box display={{ base: "block" }}>
                                    <ButtonGroup>
                                        <Flex
                                            as="button"
                                            w="60px"
                                            h="60px"
                                            mt={5}
                                            mb="10px"
                                            ml="5px"
                                            mr={2}
                                            borderRadius={5}
                                            bgColor="#0d0d0d"
                                            textAlign="center"
                                            justifyContent="center"
                                            align="center"
                                            opacity="0.6"
                                            color="white"
                                        >
                                            <Text
                                                fontFamily="title"
                                                fontSize="2rem"
                                                color="white"
                                            >
                                                {`<`}
                                            </Text>
                                        </Flex>
                                        <Flex
                                            as="button"
                                            w="60px"
                                            h="60px"
                                            mt={5}
                                            mb="10px"
                                            ml="5px"
                                            mr={4}
                                            borderRadius={5}
                                            bgColor="#0d0d0d"
                                            textAlign="center"
                                            justifyContent="center"
                                            align="center"
                                            opacity="0.6"
                                            color="white"
                                        >
                                            <Text
                                                fontFamily="title"
                                                fontSize="2rem"
                                                color="white"
                                            >
                                                {`>`}
                                            </Text>
                                        </Flex>
                                    </ButtonGroup>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Layout>
                <audio ref={player} src={currentTrack} autoPlay></audio>;
            </>
        );
    } else return null;
};

export default withApollo({ ssr: false })(Home);
