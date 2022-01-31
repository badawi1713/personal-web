import PropTypes from "prop-types";
import React from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObject = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1
};

const ListBlog = ({ children }) => {
    return <Masonry
        breakpointCols={breakpointColumnsObject}
        className="my-masonry-grid flex w-full gap-8 "
        columnClassName="my-masonry-grid_column flex flex-col gap-8">
        {children}
    </Masonry>
};

ListBlog.propTypes = {
    children: PropTypes.node.isRequired
};

export default ListBlog;
