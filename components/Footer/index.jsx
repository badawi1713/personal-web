import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return <footer className="p-8 flex justify-center dark:bg-slate-800">
        <Link href={'/'}>
            <a>&copy;{new Date().getFullYear()} - <span className='text-red-400 dark:text-sky-400'>Dzaky Badawi</span></a>
        </Link>
    </footer>
};

export default Footer;
