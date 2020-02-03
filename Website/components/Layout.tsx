import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { ReactElement } from 'react';

type PropsInt = {
    pageTitle?: string;
    children: ReactElement | ReactElement[];
};

const Layout = (props: PropsInt): JSX.Element => {
    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preload" href="/_next/static/css/styles.chunk.css" as="style"></link>
                <link rel="stylesheet" href="/_next/static/css/styles.chunk.css"></link>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
                <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
                {/* <link rel="manifest" href="/manifest.json"> */}
                <link rel="mask-icon" href="/favicon.png" color="#5bbad5" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <Header />
            <div>{props.children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
