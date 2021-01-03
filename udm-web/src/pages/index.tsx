import { useState } from "react";
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
    Input,
    InputGroup,
    InputLeftElement,
    Square,
    Text,
    ScaleFade,
    Spacer,
    Stack,
    ButtonGroup,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { FaListUl } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { SiAudiomack } from "react-icons/si";
import { withApollo } from "../utils/with-apollo";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

// import { tracks } from "../dummy-data";
import { useTracksQuery } from "../graphql/graphql";

const Home = () => {
    const { loading, error, data, fetchMore, variables } = useTracksQuery({
        fetchPolicy: "cache-first",
        variables: {
            limit: 31,
        },
        notifyOnNetworkStatusChange: true,
    });
    const [mode, setMode] = useState("latest");
    const [viewMode, setViewMode] = useState("grid");
    const [nowPlaying, setNowPlaying] = useState("");
    const [currentTrack, setCurrentTrack] = useState({
        artist: "",
        title: "",
        version: "",
    });

    let listView: any;
    let gridView: any;

    if (!loading && data) {
        const tracks = data.Tracks.tracks;
        listView = tracks.map((track, key) => (
            <Box
                key={key}
                as="button"
                onClick={() => {
                    setNowPlaying(track.trackUrl);
                }}
                w="98%"
                h="60px"
                mb="10px"
                ml="5px"
                bgColor="gray.900"
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

        gridView = tracks.map((track, key) => (
            <Box
                key={key}
                as="button"
                onClick={() => {
                    setNowPlaying(
                        `http://localhost:5000/media/music/${track.trackUrl}`
                    );
                    setCurrentTrack(track);
                }}
                w="210px"
                h="350px"
                ml={4}
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
        ));
    }

    return !data && loading ? (
        <div>Loading...</div>
    ) : (
        <>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <ColorModeScript initialColorMode="light" />
                <Flex color="white">
                    <Box
                        position="fixed"
                        w="200px"
                        height="300px"
                        ml="10px"
                        p="10px"
                    >
                        <Heading
                            as="button"
                            size="md"
                            mb={5}
                            fontWeight="600"
                            color="blue.400"
                        >
                            Latest Tunes
                        </Heading>
                        <Heading
                            as="button"
                            onClick={() => setMode("chart")}
                            size="md"
                            mb={5}
                            fontWeight="600"
                        >
                            UDM Chart
                        </Heading>
                        <Heading as="button" size="md" mb={5} fontWeight="600">
                            Top Tracks
                        </Heading>
                        <Heading as="button" size="md" mb={5} fontWeight="600">
                            Playlists
                        </Heading>
                    </Box>

                    <Box
                        mt="-40px"
                        overflowY="auto"
                        flex="1"
                        w="100%"
                        ml="210px"
                    >
                        <Box mt={1} mb={5} mr={2} right="0" textAlign="right">
                            <ButtonGroup>
                                <Box
                                    as="button"
                                    onClick={() => setViewMode("list")}
                                >
                                    <FaListUl fontSize="1.7rem" color="gray" />
                                </Box>
                                <Box
                                    as="button"
                                    onClick={() => setViewMode("grid")}
                                >
                                    <FiGrid fontSize="1.7rem" color="gray" />
                                </Box>
                            </ButtonGroup>
                        </Box>
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
                                        bgColor="gray.800"
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
                                        bgColor="gray.800"
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
            <Box position="sticky" bottom="0" width="100%">
                <AudioPlayer
                    autoPlay
                    src={nowPlaying}
                    onPlay={(e) => console.log("onPlay")}
                />
            </Box>
            <Box pl={3} position="absolute" z-index="100">
                {currentTrack?.artist && (
                    <span>
                        {currentTrack?.artist} - {currentTrack?.title}{" "}
                        {currentTrack?.version && `(${currentTrack?.version})`}
                    </span>
                )}
            </Box>
        </>
    );
};

export default withApollo({ ssr: false })(Home);
