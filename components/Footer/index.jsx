import React from 'react';

const Footer = () => {
    return <footer className="p-8 flex justify-center dark:bg-slate-800">
        <p>&copy;{new Date().getFullYear()} - <span className='text-red-400 dark:text-sky-400'>Dzaky Badawi</span></p>
    </footer>
};

export default Footer;
