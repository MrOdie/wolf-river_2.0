import "../assets/scss/style.scss";
import "../assets/fonts/typography.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
        />
    </Head>;

    return <Component {...pageProps} />;
}

export default MyApp;
