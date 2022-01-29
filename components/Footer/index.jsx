import React from 'react';

const Footer = () => {
    return <footer className="p-8 flex justify-center dark:bg-slate-700 bg-red-400">
        <p>&copy;{new Date().getFullYear()} - Dzaky Badawi</p>
    </footer>
};

export default Footer;
