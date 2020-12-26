import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { ColorModeScript } from "@chakra-ui/react";

import { withApollo } from "../utils/withApollo";

const Home = () => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <ColorModeScript initialColorMode="dark" />
            <section className={utilStyles.headingMd}></section>
        </Layout>
    );
};

export default withApollo({ ssr: true })(Home);
