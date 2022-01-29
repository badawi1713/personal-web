import { Footer, Layout } from 'components';
import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return <Layout title='About Me'>
    <main>
      <section className='flex flex-col items-center justify-center w-full dark:bg-slate-800'>
        <div className='container flex-col-reverse md:flex-row flex items-center px-8 pb-8 md:py-20 gap-8'>
          <section className='flex flex-1 flex-col gap-8 md:items-start'>
            <h1 className='text-5xl leading-tight md:leading-snug font-bold'>
              Hi, I am Dzaky,
              <br />
              Front-End Developer
            </h1>
            <p className='md:w-4/6 text-lg'>
              I described myself as a creative, and willing to learn new.
              As a front-end developer I'm very interested in topics about
              web application development using React.js and UI/UX design.
            </p>
            <button className=' bg-red-400 hover:bg-red-500 dark:bg-sky-400 hover:dark:bg-sky-500 text-white py-4 px-8 rounded-lg hover:-translate-y-1 transition '>Download CV</button>
          </section>
          <section className='w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-red-400 dark:bg-sky-300 relative rounded-full'>
            <div className="h-44 w-44 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white rounded-full absolute top-0 right-0">
              <div className="h-full w-full rounded-full relative">
                <Image src={'/images/img-profile.jpg'} className='rounded-full' layout='fill' alt='profile-dzaky' />
              </div>
            </div>
          </section>
        </div>


      </section>

      <section className='flex flex-col items-center justify-center w-full dark:bg-slate-700 bg-red-400'>
        <div className='container flex-col px-8 py-20 gap-8'>
          <h2>Hello</h2>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center w-full dark:bg-slate-800'>
        <div className='container flex-col px-8 py-20 gap-8'>
          <h2>Test</h2>
        </div>
      </section>
    </main>
    <Footer />
  </Layout>
};

export default Portfolio;
