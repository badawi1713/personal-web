import React from 'react';
import { IoLogoFigma, IoLogoGithub, IoLogoNodejs, IoLogoReact, IoLogoSass, IoLogoVue } from 'react-icons/io5';

const TechnologiesCard = () => {
    return <div className='flex flex-col gap-4'>
        <h1 className='text-xl text-white font-bold'>Technologies</h1>
        <div className='shadow-md dark:bg-slate-800 p-8 rounded-md bg-white flex flex-col gap-4'>
            <p className='text-base'>I have worked with a range of technologies in the web development and mobile development.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className='grid grid-cols-6 md:flex md:flex-col gap-2'>
                    <IoLogoReact className='text-3xl' />
                    <div className='col-span-5'>
                        <h2 className='text-xl font-bold text-red-400 dark:text-sky-400'>Front End with React </h2>
                        <p className='text-base mt-2'>Experience to create web interfaces with React.js and React Native for mobile platform (Android)</p>
                    </div>
                </div>
                <div className='grid grid-cols-6 md:flex md:flex-col gap-2'>
                    <IoLogoVue className='text-3xl' />
                    <div className='col-span-5'>
                        <h2 className='text-xl font-bold text-red-400 dark:text-sky-400'>Front End with Vue </h2>
                        <p className='text-base  mt-2'>Experience creating web interfaces with Vue.js and vuex for global state management</p>
                    </div>
                </div>
                <div className='grid grid-cols-6 md:flex md:flex-col gap-2'>
                    <IoLogoSass className='text-3xl' />
                    <div className='col-span-5'>
                        <h2 className='text-xl font-bold text-red-400 dark:text-sky-400'>Web Design</h2>
                        <p className='text-base mt-2'>Experience with CSS3 and SASS to make vanilla CSS, also have worked with CSS frameworks like Tailwind</p>
                    </div>
                </div>
                <div className='grid grid-cols-6 md:flex md:flex-col gap-2'>
                    <IoLogoFigma className='text-3xl' />
                    <div className='col-span-5'>

                        <h2 className='text-xl font-bold text-red-400 dark:text-sky-400'>UI/UX Tools </h2>
                        <p className='text-base mt-2'>Experience using tools like Figma, for creating high-fidelity design</p>
                    </div>
                </div>
                <div className='grid grid-cols-6 md:flex md:flex-col gap-2'>
                    <IoLogoNodejs className='text-3xl' />
                    <div className='col-span-5'>

                        <h2 className='text-xl font-bold text-red-400 dark:text-sky-400'>Back End </h2>
                        <p className='text-base mt-2'>Experience build web services and REST API with Node.js (Express) and MongoDB (mongoose)</p>
                    </div>
                </div>
                <div className='grid grid-cols-6 md:flex md:flex-col gap-2'>
                    <IoLogoGithub className='text-3xl' />
                    <div className='col-span-5'>
                        <h2 className='text-xl font-bold text-red-400 dark:text-sky-400'>Repo Tools</h2>
                        <p className='text-base mt-2'>Experience using git command and Github for code repository management</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default TechnologiesCard;
