import moment from "moment";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { IoCalendar } from "react-icons/io5";

const ListBlogCard = ({ blog }) => {
    return <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col">
        <img src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="
            alt="illustration"
            className="aspect-video rounded-t-md "
        />
        <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
            <div className="flex flex-col gap-4">
                <Link href="/blog/post/1">
                    <a className="cursor-pointer hover:text-red-500 hover:dark:text-sky-500 text-2xl font-semibold text-red-400 dark:text-sky-400">long established</a>
                </Link>
                <p className="text-base leading-5">It is a
                    long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <IoCalendar className="text-red-400 dark:text-sky-400" />
                <p>{moment(new Date()).format("MMMM DD, YYYY")}</p>
            </div>
        </div>

    </div>
};

ListBlogCard.propTypes = {
    blog: PropTypes.object
};

export default ListBlogCard;
