import Head from "next/head";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Navbar } from "./navbar";
import { Header } from "./header";
import { Subheader } from "./subheader";
import { Container, DarkMode, Flex } from "@chakra-ui/react";

const name = "Paul Tuck";
export const siteTitle = "Underground Dance Music";

const Layout = ({
    children,
    size = "max",
    home,
}: {
    children: React.ReactNode;
    size?: string;
    home?: boolean;
}) => {
    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.container}>
                {home && <Subheader />}
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Learn how to build a personal website using Next.js"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.now.sh/${encodeURI(
                            siteTitle
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <link href="/fonts/font-face.css" rel="stylesheet" />
                    <link href="/lib/animate.min.css" rel="stylesheet" />
                </Head>
                <Container
                    margin="auto"
                    maxW={size === "max" ? "1200px" : "500px"}
                >
                    {children}
                </Container>
            </div>
        </>
    );
};

export default Layout;
