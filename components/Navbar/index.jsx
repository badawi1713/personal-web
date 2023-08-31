import { ActiveLink } from 'components';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoClose, IoMenu, IoMoon, IoSunny } from 'react-icons/io5';
import Switch from 'react-switch';

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [checked, setChecked] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const { asPath } = useRouter()


    useEffect(() => {
        const onResize = () => {
            window.innerWidth >= 768 && setOpenSidebar(false)
        }

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    useEffect(() => setMounted(true), [])

    useEffect(() => {

        const currentTheme = window.localStorage.getItem('theme')
        if (!currentTheme) {
            setChecked(true)
            setTheme('light')
        }

        if (theme === 'dark') {
            setChecked(false)
        } else {
            setChecked(true)
        }

    }, [theme, setTheme])
    if (!mounted) return null

    return (
        openSidebar ? <div className='md:hidden w-full h-full fixed z-30 top-0 left-0'>
            <div className='fixed z-40 bg-black h-full w-full opacity-40' />
            <div className='z-50 fixed w-full shadow-lg flex flex-col bg-white dark:bg-slate-800 p-8 gap-8'>
                <div className='flex items-center justify-between'>
                    <Switch
                        aria-label='toggle-theme'
                        offColor='#7dd3fc'
                        onColor='#f87171'
                        checked={checked}
                        checkedIcon={
                            <IoSunny className='text-xl h-full flex items-center justify-center ml-1 text-white' />
                        }
                        uncheckedIcon={
                            <IoMoon className='text-xl h-full flex items-center justify-center ml-1 text-white' />
                        }
                        onChange={() => {
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                            setChecked(!checked)
                        }}
                    />
                    <button aria-label='nav-menu-close' onClick={() => setOpenSidebar(false)} className='h-8 w-8 rounded-md text-xl shadow-md flex justify-center items-center border border-red-400 dark:border-sky-300'>
                        <IoClose />
                    </button>

                </div>
                <nav className='md:hidden flex-col flex gap-8'>
                    <ActiveLink activeClassName={'text-red-400 dark:text-sky-400'} href='/'><a onClick={() => setOpenSidebar(false)} className='hover:text-red-400 hover:dark:text-sky-400 font-semibold text-lg' >Home</a></ActiveLink>
                    {/* <ActiveLink activeClassName={'text-red-400 dark:text-sky-400'} href='/blog'><a onClick={() => setOpenSidebar(false)} className='hover:text-red-400 hover:dark:text-sky-400 font-semibold text-lg' >Blog</a></ActiveLink> */}
                    <ActiveLink activeClassName={'text-red-400 dark:text-sky-400'} href='/portfolio'><a onClick={() => setOpenSidebar(false)} className='hover:text-red-400 hover:dark:text-sky-400 font-semibold text-lg'>Portfolio</a></ActiveLink>
                </nav>
            </div>
        </div> :
            <nav className={`w-full  ${asPath !== '/' ? ' dark:bg-slate-800 ' : 'absolute top-0'}`}>
                <div className='max-w-7xl mx-auto p-8 gap-8 flex justify-between items-center '>
                    <Switch
                        aria-label='toggle-theme'
                        offColor='#7dd3fc'
                        onColor='#f87171'
                        checked={checked}
                        checkedIcon={
                            <IoSunny className='text-xl h-full flex items-center justify-center ml-1 text-white' />
                        }
                        uncheckedIcon={
                            <IoMoon className='text-xl h-full flex items-center justify-center ml-1 text-white' />
                        }
                        onChange={() => {
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                            setChecked(!checked)
                        }}
                    />
                    <div className='block md:hidden'>
                        <button aria-label='nav-menu' onClick={() => setOpenSidebar(true)} className='h-8 w-8 rounded-md text-xl shadow-md flex justify-center items-center border border-red-400 dark:border-sky-300'>
                            <IoMenu />
                        </button>
                    </div>
                    <div className='hidden md:flex items-center gap-8'>
                        <ActiveLink activeClassName={'text-red-400 dark:text-sky-400'} href='/'><a className='hover:text-red-400 hover:dark:text-sky-400 font-semibold text-lg' >Home</a></ActiveLink>
                        {/* <ActiveLink activeClassName={'text-red-400 dark:text-sky-400'} href='/blog'><a className='hover:text-red-400 hover:dark:text-sky-400 font-semibold text-lg' >Blog</a></ActiveLink> */}
                        <ActiveLink activeClassName={'text-red-400 dark:text-sky-400'} href='/portfolio'><a className='hover:text-red-400 hover:dark:text-sky-400 font-semibold text-lg'>Portfolio</a></ActiveLink>
                    </div>
                </div>
            </nav>
    )
};

export default Navbar;
