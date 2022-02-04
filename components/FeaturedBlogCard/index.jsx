import Image from 'next/image';
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const FeaturedBlogCard = ({ post }) => {
    return <div className="bg-white dark:bg-slate-700 border dark:border-slate-600 rounded-md shadow-md flex flex-col-reverse md:flex-row justify-between md:gap-8">

        <div className="py-8 px-4 flex flex-col gap-4">
            <Link href={`/blog/post/${post?.slug}`}>
                <a className="cursor-pointer hover:text-red-500 hover:dark:text-sky-500 text-2xl font-semibold text-red-400 dark:text-sky-400">{post?.title}</a>
            </Link>
            <p className="text-base leading-5">{post?.excerpt}</p>
        </div>
        <div className="
        w-full md:w-96 h-52 md:h-full relative
        ">
            <Image
                alt="illustration"
                src={post?.featuredImage?.url || "/images/img-default.jpg"}
                layout='fill'
                objectFit='cover'
                className="aspect-video md:bg-cover md:rounded-l-none rounded-t-md md:rounded-r-md"
            />
        </div>

    </div>
};

FeaturedBlogCard.propTypes = {
    post: PropTypes.object
};

export default FeaturedBlogCard;
