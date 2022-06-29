import { Navbar } from "components";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ title, children }) => {
    return <>
        <Head>
            <meta charset="UTF-8" />
            <meta property="og:title" content="Dzaky Badawi | Frontend Engineer" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dbadawi.id" />
            <meta property="og:description" content="Dzaky Badawi" />
            <meta property="og:image" content="https://www.dbadawi.id/_next/image?url=%2Fimages%2Fimg-profile.jpg&w=1920&q=75" />
            <meta name="description" content="Hello, I'm Dzaky Badawi" />
            <meta name="keywords" content="dbadawi.id, dzaky ahmad badawi, dzaky, dzaky badawi, dzaky id, dzaky react developer, dzaky, dzaky ahmad badawi web, dzaky badawi web, dbadawi web, dzaky web, web dzaky, nextjs web, dzaky portofolio, dzaky ahmad badawi portofolio" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content="Dzaky Badawi" />
            <meta name="next-head-count" content="15" />
            <title>{title}</title>
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
