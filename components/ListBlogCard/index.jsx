import moment from "moment";
import Image from 'next/image';
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { IoCalendar } from "react-icons/io5";

const ListBlogCard = ({ post }) => {
    return <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col border dark:border-slate-600">
        <div className="relative h-52 w-full">
            <Image
                src={post?.featuredImage?.url || "/images/img-default.jpg"}
                alt="illustration"
                layout="fill"
                objectFit="cover"
                className="aspect-video rounded-t-md w-full"
            />
        </div>

        <div className="pt-4 pb-8 px-4 flex flex-col justify-between flex-1 gap-4">
            <div className="flex items-center gap-2 justify-end">
                <IoCalendar className="text-red-400 dark:text-sky-400" />
                <p>{moment(post?.createdAt || new Date()).format("MMMM DD, YYYY")}</p>
            </div>
            <div className="flex flex-col gap-4">
                <Link href={`/blog/post/${post?.slug}`}>
                    <a className="cursor-pointer hover:text-red-500 hover:dark:text-sky-500 text-2xl font-semibold text-red-400 dark:text-sky-400">{post?.title}</a>
                </Link>
                <p className="text-base leading-5">{post?.excerpt}</p>
            </div>
        </div>

    </div>
};

ListBlogCard.propTypes = {
    post: PropTypes.object
};

export default ListBlogCard;
