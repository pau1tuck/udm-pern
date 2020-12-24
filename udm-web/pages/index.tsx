import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { withApollo } from "../utils/withApollo";

const Home = () => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>The finest new underground house and techno.</p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this in{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
                <Link href="/login">
                    <a>Log in</a>
                </Link>
            </section>
        </Layout>
    );
};

export default withApollo({ ssr: true })(Home);
