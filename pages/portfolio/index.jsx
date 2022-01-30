import { Footer, Layout } from 'components';
import Image from 'next/image';
import React from 'react';
import { IoLogoFigma, IoLogoGithub, IoLogoLinkedin, IoLogoNodejs, IoLogoReact, IoLogoSass, IoLogoVue, IoLogoWhatsapp, IoMail } from 'react-icons/io5';
import Masonry from 'react-masonry-css';

const breakpointColumnsObject = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1
};

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
            <button className=' bg-red-400 hover:bg-red-500 dark:bg-sky-400 hover:dark:bg-sky-500 text-white py-4 px-8 rounded-lg hover:-translate-y-1 transition '>Download Resume</button>
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
        <div className='container flex flex-col px-8 py-20 gap-8'>
          <div className='flex flex-col gap-4'>
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
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl text-white font-bold'>Work Experience</h1>
            <div className='shadow-md dark:bg-slate-800 p-8 rounded-md bg-white flex flex-col gap-4'>
              <h2 className='text-xl font-bold text-red-400 dark:text-sky-400'>Front End Developer <br /> (React.js Developer) </h2>
              <div className='font-semibold text-base flex flex-col-reverse md:flex-row md:items-center gap-2 md:gap-4'>
                <p>2020 - 2022</p>
                <span className='hidden md:block text-xl'>|</span>
                <p>PT. Sarana Maju Lestari, Surabaya</p>
              </div>
              <p className='text-base'>As front-end developer at PT. Sarana Maju Lestari, I managed to contribute for their ongoing projects like built many user interfaces for SOKKET system and Boiler Auto Tuning dashboard using React.js and tools like Redux thunk, FusionChart, Figma, FuseTheme template, and Tailwind.css.</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl text-white font-bold'>Education</h1>
            <div className='shadow-md dark:bg-slate-800 p-8 rounded-md bg-white flex flex-col gap-4'>
              <h2 className='text-xl font-bold text-red-400 dark:text-sky-400'>Informatics <br /> (Bachelor's Degree/S1) </h2>
              <div className='font-semibold text-base flex flex-col-reverse md:flex-row md:items-center gap-2 md:gap-4'>
                <p>2015 - 2019</p>
                <span className='hidden md:block text-xl'>|</span>
                <p>Islamic University of Indonesia, Sleman</p>
              </div>
              <p className='text-base'>
                I'm majoring in informatics degree at Islamic University of Indonesia for 4 years. My last project is about to build a verification system for digital forensic documents based on Blockchain technology using Node.js. While I’m in university I also applied for teaching as a web programming practicum assistant.
              </p>
            </div>
          </div>

        </div>

      </section>
      <section className='flex flex-col items-center justify-center w-full dark:bg-slate-800'>
        <div className='container px-8 pt-20 pb-8'>
          <h1 className='text-xl mb-4 font-bold'>Featured Works</h1>
          <Masonry
            breakpointCols={breakpointColumnsObject}
            className="my-masonry-grid flex w-full gap-8 "
            columnClassName="my-masonry-grid_column flex flex-col gap-8">
            <div className='rounded-md shadow-md bg-white dark:bg-slate-700 pb-8 flex flex-col gap-4'>
              <img className='bg-cover aspect-video rounded-t-md w-full' src='https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE=' />
              <div className='px-8 flex flex-col gap-4'>
                <h1 className='text-xl font-bold text-center'>SOKKET Tools</h1>
                <div className='py-1 px-10 flex items-center justify-center bg-red-400 dark:bg-sky-400 rounded-full mx-auto'>
                  <p className='text-white'>2021</p>
                </div>
                <p className='text-base my-4'>
                  The main project from my work at PT. Sarana Maju Lestari. SOKKET (Sistem Pengoptimuman Ketersediaan, Keandalan, dan Efisiensi Terintegrasi Unit Pembangkitan) is a web application for our client PT. PJB (Pembangkit Jawa Bali) that used to help monitoring process from plant unit, shows reliability and efficiency value, also to manage reports. For this project I contribute in some modules like to create main dashboard at home page, profile setting, cost benefit analysis reliability module, and case management module.
                </p>
              </div>
              <div className='flex flex-col md:flex-row gap-4 md:justify-end px-8'>
                <button className=' bg-red-400 hover:bg-red-500 dark:bg-sky-400 hover:dark:bg-sky-500  py-2 px-4 rounded-lg hover:-translate-y-1 transition text-white '>Source Code</button>
                <button className=' border border-red-400 hover:border-red-500 dark:border-sky-400 hover:dark:border-sky-500 py-2 px-4 rounded-lg hover:-translate-y-1 transition'>View Demo</button>
              </div>
            </div>

            <div className='rounded-md shadow-md bg-white dark:bg-slate-700 pb-8 flex flex-col gap-4'>
              <img className='bg-cover aspect-video rounded-t-md w-full' src='https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
              <div className='px-8 flex flex-col gap-4'>
                <h1 className='text-xl font-bold text-center'>Boiler Auto Tuning</h1>
                <div className='py-1 px-10 flex items-center justify-center bg-red-400 dark:bg-sky-400 rounded-full mx-auto'>
                  <p className='text-white'>2021</p>
                </div>
                <p className='text-base my-4'>
                  One of projects from my work at PT. Sarana Maju Lestari. Boiler Auto Tuning dashboard is a web application thats used to monitor sootblow and combustion process in plant unit (Tanjung Awar-Awar and Tenayan), also to show sootblow effiency value in form of chart.
                </p>
              </div>
              <div className='flex flex-col md:flex-row gap-4 md:justify-end px-8'>
                <button className=' bg-red-400 hover:bg-red-500 dark:bg-sky-400 hover:dark:bg-sky-500  py-2 px-4 rounded-lg hover:-translate-y-1 transition text-white '>Source Code</button>
                <button className=' border border-red-400 hover:border-red-500 dark:border-sky-400 hover:dark:border-sky-500 py-2 px-4 rounded-lg hover:-translate-y-1 transition'>View Demo</button>
              </div>
            </div>

            <div className='rounded-md shadow-md bg-white dark:bg-slate-700 pb-8 flex flex-col gap-4'>
              <img className='bg-cover aspect-video rounded-t-md w-full' src='https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE=' />
              <div className='px-8 flex flex-col gap-4'>
                <h1 className='text-xl font-bold text-center'>SOKKET Tools</h1>
                <div className='py-1 px-10 flex items-center justify-center bg-red-400 dark:bg-sky-400 rounded-full mx-auto'>
                  <p className='text-white'>2021</p>
                </div>
                <p className='text-base my-4'>
                  The main project from my work at PT. Sarana Maju Lestari. SOKKET (Sistem Pengoptimuman Ketersediaan, Keandalan, dan Efisiensi Terintegrasi Unit Pembangkitan) is a web application for our client PT. PJB (Pembangkit Jawa Bali) that used to help monitoring process from plant unit, shows reliability and efficiency value, also to manage reports. For this project I contribute in some modules like to create main dashboard at home page, profile setting, cost benefit analysis reliability module, and case management module.
                </p>
              </div>
              <div className='flex flex-col md:flex-row gap-4 md:justify-end px-8'>
                <button className=' bg-red-400 hover:bg-red-500 dark:bg-sky-400 hover:dark:bg-sky-500  py-2 px-4 rounded-lg hover:-translate-y-1 transition text-white '>Source Code</button>
                <button className=' border border-red-400 hover:border-red-500 dark:border-sky-400 hover:dark:border-sky-500 py-2 px-4 rounded-lg hover:-translate-y-1 transition'>View Demo</button>
              </div>
            </div>

            <div className='rounded-md shadow-md bg-white dark:bg-slate-700 pb-8 flex flex-col gap-4'>
              <img className='bg-cover aspect-video rounded-t-md w-full' src='https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
              <div className='px-8 flex flex-col gap-4'>
                <h1 className='text-xl font-bold text-center'>Boiler Auto Tuning</h1>
                <div className='py-1 px-10 flex items-center justify-center bg-red-400 dark:bg-sky-400 rounded-full mx-auto'>
                  <p className='text-white'>2021</p>
                </div>
                <p className='text-base my-4'>
                  One of projects from my work at PT. Sarana Maju Lestari. Boiler Auto Tuning dashboard is a web application thats used to monitor sootblow and combustion process in plant unit (Tanjung Awar-Awar and Tenayan), also to show sootblow effiency value in form of chart.
                </p>
              </div>
              <div className='flex flex-col md:flex-row gap-4 md:justify-end px-8'>
                <button className=' bg-red-400 hover:bg-red-500 dark:bg-sky-400 hover:dark:bg-sky-500  py-2 px-4 rounded-lg hover:-translate-y-1 transition text-white '>Source Code</button>
                <button className=' border border-red-400 hover:border-red-500 dark:border-sky-400 hover:dark:border-sky-500 py-2 px-4 rounded-lg hover:-translate-y-1 transition'>View Demo</button>
              </div>
            </div>

          </Masonry>
        </div>
        <div className='container px-8'>
          <h1 className='text-xl mb-4 font-bold'>Feel free to contact me</h1>
          <div className='flex flex-col gap-4 items-start'>
            <a target={'_blank'} href='https://wa.me/6282136526483' className='flex items-center gap-2 hover:text-red-400 hover:dark:text-sky-400 cursor-pointer'>
              <IoLogoWhatsapp />
              <p>+62 821 3652 6483</p>
            </a>
            <a target={'_blank'} href='https://www.linkedin.com/in/dzaky-badawi-46656a163/' className='flex items-center gap-2 hover:text-red-400 hover:dark:text-sky-400 cursor-pointer'>
              <IoLogoLinkedin />
              <p>linkedin.com/in/dzaky-badawi-46656a163/</p>
            </a>
            <a href="mailto: dzaky.badawi@gmail.com" className='flex items-center gap-2 hover:text-red-400 hover:dark:text-sky-400 cursor-pointer'>
              <IoMail />
              <p>
                dzaky.badawi@gmail.com
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </Layout>
};

export default Portfolio;
