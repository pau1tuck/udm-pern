import Head from "next/head";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Navbar } from "./navbar";
import { Header } from "./header";
import { DarkMode } from "@chakra-ui/react";

const name = "Paul Tuck";
export const siteTitle = "Underground Dance Music";

const Layout = ({
    children,
    size,
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
                </Head>
                <img
                    src="/images/profile.jpg"
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                <main>{children}</main>
            </div>
        </>
    );
};

export default Layout;
