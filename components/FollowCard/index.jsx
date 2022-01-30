import React from 'react';
import Link from 'next/link';
import { IoLogoInstagram, IoLogoTwitter, IoLogoCodepen } from 'react-icons/io5'

const FollowCard = () => {
    return <section className="sticky md:top-0 px-4 w-full py-8 self-start bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">follow me</h1>
        <div className="grid grid-cols-3 gap-4 justify-center content-center">
            <Link href='https://codepen.io/badawi1713'>
                <a  target={'_blank'} className="cursor-pointer text-red-400 dark:text-sky-400 hover:text-red-500 hover:dark:text-sky-500 text-4xl lg:text-5xl mx-auto">
                    <IoLogoCodepen />
                </a>
            </Link>
            <Link href='https://www.instagram.com/telur_ramen'>
                <a target={'_blank'} className="cursor-pointer text-red-400 dark:text-sky-400 hover:text-red-500 hover:dark:text-sky-500 text-4xl lg:text-5xl mx-auto">
                    <IoLogoInstagram />
                </a>
            </Link>
            <Link href='https://twitter.com/TelurRamen'>
                <a target={'_blank'} className="cursor-pointer text-red-400 dark:text-sky-400 hover:text-red-500 hover:dark:text-sky-500 text-4xl lg:text-5xl mx-auto">
                    <IoLogoTwitter />
                </a>
            </Link>
        </div>
    </section>
};

export default FollowCard;
