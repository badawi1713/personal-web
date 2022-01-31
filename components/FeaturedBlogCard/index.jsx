import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const FeaturedBlogCard = ({ featuredPost }) => {
    return <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col-reverse md:flex-row justify-between md:gap-8">

        <div className="py-8 px-4 flex flex-col gap-4">
            <Link href="/blog/post/1">
                <a className="cursor-pointer hover:text-red-500 hover:dark:text-sky-500 text-2xl font-semibold text-red-400 dark:text-sky-400">long established</a>
            </Link>
            <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
        </div>
        <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="illustration"
            className="aspect-video md:bg-cover w-full md:w-72 md:rounded-l-none rounded-t-md md:rounded-r-md"
        />
    </div>
};

FeaturedBlogCard.propTypes = {
    featuredPost: PropTypes.node
};

export default FeaturedBlogCard;
