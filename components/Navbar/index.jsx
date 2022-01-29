import { ActiveLink } from 'components';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from "react-icons/io5";
import Switch from "react-switch";

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [checked, setChecked] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { asPath } = useRouter()


    useEffect(() => setMounted(true), [])

    useEffect(() => {

        if (theme === 'dark') {
            setChecked(false)
        } else {
            setChecked(true)
        }

    }, [theme])
    if (!mounted) return null

    return <nav className={`w-full ${asPath !== "/" ? " dark:bg-slate-800 " : 'absolute top-0'}`}>
        <div className=" p-8 gap-8 flex justify-between items-center">
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
            <div className='hidden md:flex items-center gap-8'>
                <ActiveLink activeClassName={'text-red-400 dark:text-sky-400'} href='/'><a className='hover:text-red-400 hover:dark:text-sky-400 font-semibold text-lg' >Home</a></ActiveLink>
                <ActiveLink activeClassName={'text-red-400 dark:text-sky-400'} href='/blog'><a className='hover:text-red-400 hover:dark:text-sky-400 font-semibold text-lg' >Blog</a></ActiveLink>
                <ActiveLink activeClassName={'text-red-400 dark:text-sky-400'} href='/resume'><a className='hover:text-red-400 hover:dark:text-sky-400 font-semibold text-lg' >Resume</a></ActiveLink>
            </div>

        </div>
    </nav>
};

export default Navbar;
