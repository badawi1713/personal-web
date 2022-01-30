import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const RecentBlog = ({ post }) => {
    return <section className="px-4 w-full py-8 self-start bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">recent posts</h1>
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <span className="text-white p-2 w-10 h-10 flex flex-col items-center rounded-full shrink-0 bg-red-400 dark:bg-sky-400">01</span>
                <Link href='/blog/post/1'>
                    <a className="cursor-pointer hover:text-red-500 hover:dark:text-sky-500 text-base">long established</a>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white p-2 w-10 h-10 flex flex-col items-center rounded-full shrink-0 bg-red-400 dark:bg-sky-400">01</span>
                <Link href='/blog/post/1'>
                    <a className="cursor-pointer hover:text-red-500 hover:dark:text-sky-500 text-base">long established</a>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white p-2 w-10 h-10 flex flex-col items-center rounded-full shrink-0 bg-red-400 dark:bg-sky-400">01</span>
                <Link href='/blog/post/1'>
                    <a className="cursor-pointer hover:text-red-500 hover:dark:text-sky-500 text-base">long established</a>
                </Link>
            </div>
        </div>
    </section>
};

RecentBlog.propTypes = {
    post: PropTypes.node
};

export default RecentBlog;
