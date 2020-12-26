import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {
    Box,
    ColorModeScript,
    Container,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Square,
    Text,
    Spacer,
    Stack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import { withApollo } from "../utils/withApollo";

const Home = () => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <ColorModeScript initialColorMode="dark" />
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
                    <Heading as="button" size="md" mb={5} fontWeight="600">
                        UDM Chart
                    </Heading>
                    <Heading as="button" size="md" mb={5} fontWeight="600">
                        Playlists
                    </Heading>
                </Box>
                <Box
                    overflowY="auto"
                    flex="1"
                    w="100%"
                    height="900px"
                    ml="200px"
                >
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<Search2Icon color="gray.600" />}
                        />
                        <Input w="98%" mb={5} />
                    </InputGroup>
                    <Box
                        as="button"
                        w="98%"
                        h="60px"
                        mb="10px"
                        pl="20px"
                        bgColor="gray.900"
                        borderRadius={5}
                        opacity="0.8"
                        textAlign="left"
                    >
                        <Text fontFamily="track" fontSize="lg">
                            Gorgon City - Nobody (Extended Mix) [EMI]
                        </Text>
                    </Box>

                    <Box
                        as="button"
                        w="98%"
                        h="60px"
                        mb="10px"
                        pl="20px"
                        bgColor="#d3003b"
                        borderRadius={5}
                        opacity="0.8"
                        textAlign="left"
                    >
                        <Text fontFamily="track" fontSize="lg" fontWeight="600">
                            Front Bench & Tom Jarmey - Paper Clouds
                        </Text>
                    </Box>
                    <Box
                        as="button"
                        w="98%"
                        h="60px"
                        mb="10px"
                        pl="20px"
                        bgColor="gray.900"
                        borderRadius={5}
                        opacity="0.8"
                        textAlign="left"
                    >
                        <Text fontFamily="track" fontSize="lg">
                            Men I Trust - Lucky Sue (Bernardo Mota Edit)
                        </Text>
                    </Box>
                    {/* <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin dapibus rutrum lobortis. Phasellus bibendum
                        malesuada magna, a suscipit massa tincidunt at. Praesent
                        accumsan aliquam sapien sed maximus. Cras nec ex
                        molestie dolor accumsan hendrerit. Nullam id aliquam
                        orci, vel interdum lectus. Praesent leo sapien, viverra
                        nec erat id, placerat sodales sapien. Quisque vitae erat
                        mi. Aenean tincidunt, sem ut rhoncus porta, orci massa
                        molestie odio, vel tincidunt eros orci ut tortor. Aenean
                        bibendum, erat ut tincidunt suscipit, nisl metus ornare
                        tellus, quis porta ligula neque id nunc. Proin et
                        ultricies ipsum. Mauris malesuada, lacus vel blandit
                        finibus, augue dolor tempor velit, ut euismod sapien
                        nisl tempor dui. Aliquam sem metus, ultricies in rutrum
                        nec, malesuada vel lacus. Aliquam mi nulla, lobortis
                        faucibus elit sit amet, tempus viverra nibh. In sed
                        feugiat ipsum, nec euismod sapien. Pellentesque semper
                        urna a tortor luctus, et commodo lectus consequat.
                        Mauris maximus finibus lorem sed tempor. Nunc a lorem
                        luctus, vestibulum elit semper, pulvinar dolor. Ut non
                        ex quis metus porttitor auctor. Maecenas tristique
                        dictum ipsum ac bibendum. Donec sed lobortis sem. Nunc
                        non mollis metus, sed ultricies massa. In id ex nec ante
                        sodales aliquam nec quis justo. Praesent et tellus
                        posuere, tempus ex eu, imperdiet metus. Etiam ut mi
                        aliquam, molestie massa lacinia, lobortis est. Sed ut
                        tellus et metus maximus luctus ut sit amet odio.
                        Vestibulum eget augue at tellus malesuada ullamcorper.
                        Curabitur ac tortor metus. Pellentesque nec fermentum
                        turpis. In rutrum fringilla magna, quis porta libero
                        malesuada vel. Nam facilisis consectetur dolor quis
                        placerat. Praesent porta laoreet posuere. Vestibulum ut
                        leo aliquam dolor pulvinar sollicitudin ut vel leo.
                        Quisque in sem egestas, rutrum nisi ac, rutrum turpis.
                        Sed eleifend mi lacus, eu condimentum risus dapibus in.
                        Integer vestibulum placerat dui, vel maximus felis
                        vestibulum nec. Nulla porta vestibulum sollicitudin.
                        Aliquam a molestie lectus. Maecenas a quam ut elit
                        luctus facilisis quis at sem. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia curae; Fusce nulla neque, imperdiet eu eros et,
                        porttitor feugiat turpis. Maecenas a odio id urna
                        convallis porta aliquam in eros. Integer ac erat risus.
                        Aenean malesuada velit a ex egestas tempus. Aliquam in
                        commodo est, non luctus velit. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Interdum et malesuada fames ac ante
                        ipsum primis in faucibus. Duis egestas sit amet neque ac
                        placerat. Quisque dapibus ligula non neque pellentesque
                        bibendum. Nullam risus ligula, ultrices in dolor ut,
                        maximus mattis nibh. Phasellus ultrices malesuada
                        ornare. Aliquam dictum felis turpis, sit amet
                        pellentesque dolor finibus sed. Fusce bibendum elit quis
                        tortor lobortis semper. Aenean ac consectetur ligula, in
                        maximus dolor. Morbi et est quis ante vehicula lacinia.
                        Aliquam facilisis sem eros, et dignissim enim consequat
                        ut. Suspendisse faucibus urna at lacus bibendum
                        bibendum. Duis eget pretium augue. Pellentesque
                        imperdiet imperdiet erat, dictum accumsan libero
                        volutpat vel. Donec eu metus sagittis, viverra dui
                        eleifend, efficitur turpis. Nam ultrices mollis libero,
                        vitae tristique lacus luctus id. Integer eget augue
                        tellus. Donec aliquet odio tortor, id egestas sapien
                        sodales a. Vestibulum varius sollicitudin nibh, ac
                        placerat ante vulputate eget. Nulla congue fermentum
                        varius. Morbi mollis libero nunc, nec pellentesque arcu
                        molestie ut. Proin at enim metus. Pellentesque ac quam
                        ac nisl aliquam auctor. In id ante orci. Sed ac
                        tincidunt arcu. Ut dapibus nibh nunc. Praesent vitae
                        pellentesque augue. Ut rhoncus elit at sem posuere,
                        laoreet lobortis lacus fringilla. Etiam turpis purus,
                        dictum sed tristique nec, pretium id tortor. Nulla quis
                        augue a nisl rutrum imperdiet. Pellentesque et massa
                        tortor. Morbi est orci, sagittis nec porta nec, mollis
                        at augue. Pellentesque lorem justo, pulvinar ac tellus
                        quis, faucibus rhoncus dui. Nulla id porta mi. Phasellus
                        rhoncus gravida eleifend. Cras sed magna in neque rutrum
                        ultricies. Morbi ultricies orci id tellus viverra
                        pretium. Suspendisse sit amet convallis quam, ut mattis
                        sem. Nunc mollis viverra nulla sit amet placerat. Nunc
                        vulputate a quam at scelerisque. Vestibulum rhoncus
                        cursus pulvinar. Pellentesque eget tellus quam.
                        Phasellus eu porta lorem, eu ultrices turpis. Vestibulum
                        hendrerit posuere malesuada. Nulla tincidunt turpis et
                        facilisis facilisis. Proin quis eros elit. Nunc id
                        elementum eros. Mauris auctor commodo nibh, ac
                        scelerisque enim placerat in. Integer eget varius nulla,
                        nec pretium justo. Vestibulum commodo varius augue et
                        facilisis. Mauris tristique eros erat. Duis finibus
                        ornare odio, id gravida mi pulvinar sit amet. Cras
                        bibendum risus tortor. Integer feugiat malesuada nisi,
                        vel suscipit sapien gravida quis. Nulla id orci at
                        tortor finibus euismod. Phasellus sodales ut augue vitae
                        feugiat. Suspendisse tempor fermentum maximus. Donec
                        nisi lorem, laoreet et enim in, feugiat semper magna.
                        Pellentesque quis dapibus est, at rhoncus risus. In
                        convallis eleifend metus et malesuada. Pellentesque
                        pharetra eget sem sed cursus. Duis aliquam suscipit
                        orci, rhoncus blandit ex. Nunc in rutrum turpis, non
                        dignissim lectus. Pellentesque ac magna quis sem
                        facilisis egestas. Proin aliquet mi ut euismod
                        fringilla. Integer molestie velit neque, ac sagittis leo
                        finibus vitae. Integer placerat leo quis ante pharetra
                        laoreet. Nulla aliquet facilisis nibh id posuere. Proin
                        feugiat molestie iaculis. Vestibulum aliquam, libero non
                        faucibus volutpat, magna nibh tempor leo, non
                        pellentesque tortor leo vel justo. Vestibulum eu tellus
                        sed quam facilisis vehicula non accumsan diam. Morbi
                        odio sapien, efficitur nec lectus ac, porta vestibulum
                        nisl. Nullam sagittis nec mi ut condimentum. Suspendisse
                        et libero nec risus convallis varius a id eros. In hac
                        habitasse platea dictumst. Pellentesque velit nisi,
                        scelerisque non libero quis, tempor feugiat dolor.
                        Aenean iaculis velit commodo, feugiat justo et, auctor
                        erat. Sed dignissim eros magna. Proin sed vulputate
                        massa. Aliquam in convallis ex, sed posuere felis. Sed
                        vitae ultricies metus, at ornare sapien. Curabitur vel
                        semper dolor, id mollis quam. Phasellus scelerisque mi
                        in augue mollis, ac dictum mauris scelerisque.
                        Pellentesque rhoncus tempus dui, et imperdiet nisi
                        ultricies nec. Donec interdum magna sem, id semper nibh
                        vulputate sed. Sed sem quam, aliquet nec ultricies eu,
                        porta sed lorem. Donec ut hendrerit eros. Phasellus
                        viverra leo ac nisl semper, eget elementum neque
                        gravida. Sed cursus, risus ut tempor aliquam, dui augue
                        dignissim risus, non tempus purus ex sed libero.
                        Suspendisse auctor metus et faucibus ultricies. Duis
                        eleifend lorem id nisl congue, quis mollis dolor
                        imperdiet. Vestibulum dictum, quam in tincidunt
                        pharetra, lorem neque ultrices nunc, nec laoreet elit
                        arcu sed enim. Etiam quis erat eu lectus laoreet
                        viverra. Pellentesque orci leo, porttitor quis purus eu,
                        feugiat rhoncus dui. Integer sit amet mattis nisl.
                        Vestibulum aliquet quam a mi dapibus, et mattis urna
                        feugiat. Cras et tellus mollis, dignissim mi sed,
                        porttitor nunc. Aliquam id ex pellentesque, vulputate
                        nisi eget, ultricies leo. Etiam sem lectus, scelerisque
                        eu tellus vitae, vulputate suscipit odio. Donec maximus
                        ipsum eget accumsan rhoncus. Praesent in purus ut lectus
                        fringilla feugiat. Praesent commodo urna eu augue congue
                        hendrerit non vitae arcu. Vivamus diam sapien,
                        scelerisque ut tempus at, varius nec dui. Aliquam nec
                        ultricies ex. Sed non mattis magna. Nam commodo sapien
                        ac sem iaculis egestas eu in eros. Aenean consequat
                        neque vel laoreet euismod. In eget dictum massa, eu
                        porttitor nulla. Nullam dolor ligula, tincidunt
                        tincidunt feugiat sit amet, eleifend ut augue.
                        Suspendisse pharetra dolor a malesuada porttitor. Sed
                        commodo lectus non consectetur ornare. In tincidunt nisi
                        nunc, facilisis mattis erat facilisis in. In diam nulla,
                        faucibus eget lacus sit amet, consequat semper purus.
                        Vestibulum eget sodales libero. Integer consequat tortor
                        sed pretium commodo. Morbi dapibus mollis dictum. Mauris
                        vitae sagittis ipsum. Suspendisse aliquet finibus mi, ac
                        ultricies ipsum cursus eu. Suspendisse dictum diam in
                        massa ornare aliquet. Vestibulum iaculis eu urna
                        sollicitudin gravida. Aenean tellus lorem, malesuada in
                        nunc pharetra, venenatis scelerisque enim. Nullam tempor
                        egestas turpis a dignissim. Phasellus gravida nisi a
                        arcu ultricies lobortis. Suspendisse nisi ex, maximus
                        eget risus sit amet, porttitor egestas eros. Praesent
                        consequat faucibus tellus vitae bibendum. Donec non
                        varius nibh. Suspendisse vel ipsum odio. In condimentum
                        libero eget fermentum pretium. Donec sagittis dui in
                        justo bibendum, eget rhoncus urna venenatis. Nullam
                        dictum cursus mauris, ac facilisis lectus eleifend vel.
                        Etiam id magna eros. Cras id elementum elit, in cursus
                        sem. Aliquam gravida euismod metus, id varius ligula
                        tempus nec. Phasellus non fringilla eros. Sed
                        sollicitudin felis massa, vel varius quam gravida
                        rhoncus. Vestibulum eget convallis ligula. Sed sapien
                        enim, egestas sit amet pellentesque non, ultrices non
                        nisi. Sed sit amet lorem egestas, ornare urna ut,
                        fermentum enim. Aliquam non dolor augue. Duis at
                        ullamcorper dolor. Praesent condimentum imperdiet est,
                        sit amet consequat tellus tincidunt in. Ut convallis
                        posuere elementum. Mauris sit amet finibus nunc.
                        Praesent eu lacus et nulla ultrices mattis. Nulla ac
                        tincidunt arcu, quis rutrum augue. Morbi facilisis nisl
                        elit, nec feugiat nisi tempus ut. Suspendisse nec leo
                        dignissim lectus tristique tempus. Quisque consectetur
                        porttitor tristique. Nunc nec metus id velit efficitur
                        hendrerit ut a nunc. Duis rutrum tristique sapien, quis
                        viverra felis. Etiam ultrices fermentum ex, at convallis
                        ex. Integer tempor, quam vel auctor pellentesque, augue
                        dui semper lorem, id blandit purus sapien eget lacus.
                        Quisque dapibus, sem non viverra vestibulum, arcu eros
                        viverra ante, eu euismod augue lacus et magna. In hac
                        habitasse platea dictumst. Mauris porta aliquet nisi,
                        nec gravida urna feugiat ut. Nulla id venenatis urna,
                        non venenatis justo. Fusce sagittis, dolor in vestibulum
                        bibendum, metus est cursus nulla, vitae bibendum erat
                        ante ut eros. Sed a eros commodo, rutrum nulla a,
                        tincidunt libero. Nullam posuere vel sapien non dictum.
                        Morbi imperdiet ante quis diam convallis, eu gravida
                        felis porttitor. Suspendisse ac mauris condimentum,
                        blandit lectus nec, semper velit. Aliquam imperdiet,
                        neque nec cursus posuere, massa lectus viverra nisi, eu
                        aliquet felis neque in turpis. Pellentesque egestas
                        ipsum vel rhoncus dapibus. Etiam efficitur turpis eu est
                        ornare, quis tincidunt lacus cursus. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Suspendisse eget vestibulum
                        risus. Nunc ante eros, condimentum vel ligula eu,
                        convallis auctor turpis. Ut luctus, mauris sed luctus
                        porta, metus ex vestibulum risus, ac luctus nunc justo
                        ac dui. Cras elementum quis libero non fermentum.
                        Integer tempor neque lacus, lobortis auctor dolor tempor
                        feugiat. Cras mattis vestibulum quam. Cras porttitor
                        neque suscipit ante interdum, ac cursus purus finibus.
                        Duis sollicitudin leo varius nisl viverra, in posuere
                        nunc semper. Donec varius diam sapien. Phasellus
                        suscipit urna nec arcu placerat, ac auctor mi feugiat.
                        Nunc consectetur arcu sed mattis varius. Vestibulum non
                        ex risus. Nunc ullamcorper vulputate convallis. Etiam
                        quam lectus, elementum sed tristique in, scelerisque a
                        tortor. Cras id purus ultrices, aliquam dolor ut, varius
                        nisl. Nulla dignissim est est, at interdum arcu rutrum
                        sit amet. Nunc ac dictum tortor. Vestibulum ut erat
                        nibh. Suspendisse non tellus rhoncus, aliquam justo sit
                        amet, elementum tellus. Vivamus quis placerat dui, id
                        ultrices odio. Mauris venenatis ex vel sem dapibus, sed
                        ornare risus iaculis. Ut eu orci id libero vehicula
                        molestie quis in neque. Vivamus eu tempus quam, in
                        viverra magna. Sed congue id dolor in imperdiet.
                    </Text> */}
                </Box>
            </Flex>
        </Layout>
    );
};

export default withApollo({ ssr: true })(Home);
