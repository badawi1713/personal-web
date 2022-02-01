import moment from "moment";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { IoCalendar } from "react-icons/io5";
import Image from 'next/image'

const RelatedPostCard = ({ post }) => {
    return <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col">
        <div className="w-full h-52 relative">
            <Image src="/images/img-default.jpg"
                alt="illustration"
                layout="fill"
                objectFit="cover"
                className="aspect-video rounded-t-md w-full"
            />
        </div>
        <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
            <div className="flex flex-col gap-4">
                <Link href="/blog/post/1">
                    <a className="cursor-pointer hover:text-red-500 hover:dark:text-sky-500 text-2xl font-semibold text-red-400 dark:text-sky-400">long established</a>
                </Link>
                <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <IoCalendar className="text-red-400 dark:text-sky-400" />
                <p>{moment(new Date()).format("MMMM DD, YYYY")}</p>
            </div>
        </div>
    </div>
};

RelatedPostCard.propTypes = {
    post: PropTypes.node
};

export default RelatedPostCard;
