import { Navbar } from "components";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ title, children }) => {
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Hello, I'm Dzaky Badawi" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        {children}
    </>
};

Layout.defaultProps = {
    title: "Blog"
}

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Layout;
