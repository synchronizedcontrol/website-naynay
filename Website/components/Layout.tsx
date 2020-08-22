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
            <script
                src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossOrigin="anonymous"
            ></script>
        </div>
    );
};

export default Layout;
