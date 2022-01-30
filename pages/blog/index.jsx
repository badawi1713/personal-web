import React from "react";
import { Footer, Layout } from "components";
import { IoCalendar } from 'react-icons/io5'
import { SVGHello } from 'public/svg'
import Image from "next/image";
import moment from "moment";

import Masonry from 'react-masonry-css';

const breakpointColumnsObject = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1
};

const Blog = () => {
  return (
    <Layout title={"All Posts"}>
      <div className='min-h-screen flex flex-col w-full dark:bg-slate-800'>
        <header className="py-10 flex items-center justify-around px-8 bg-red-400 dark:bg-slate-700">
          <div>
            <h1 className="text-5xl font-bold leading-tight md:leading-snug relative mb-4 text-white">Taste of shoyu <br /> ramen <span className=" origin-center rotate-12 ml-4 absolute">🍜</span></h1>
            <p className="text-lg text-white">Welcome to my personal blog</p>
          </div>
          <div className="hidden md:block">
            <Image src={SVGHello} alt='header-illustrator' width={700} />
          </div>
        </header>

        <main className="grid md:grid-cols-6 grid-cols-1 gap-10 px-8 my-8">

          <section className="flex flex-col md:col-span-4 gap-8">
            <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col-reverse md:flex-row justify-between md:gap-8">

              <div className="py-8 px-4 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-red-400 dark:text-sky-400">long established</h1>
                <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
              </div>
              <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="illustration"
                className="aspect-video md:bg-cover w-full md:w-72 md:rounded-l-none rounded-t-md md:rounded-r-md"
              />
            </div>
            <hr />
            <Masonry
              breakpointCols={breakpointColumnsObject}
              className="my-masonry-grid flex w-full gap-8 "
              columnClassName="my-masonry-grid_column flex flex-col gap-8">
              <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col">
                <img src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="
                  alt="illustration"
                  className="aspect-video rounded-t-md "
                />
                <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-red-400 dark:text-sky-400">long established</h1>
                    <p className="text-base leading-5">It is a
                      long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <IoCalendar className="text-red-400 dark:text-sky-400" />
                    <p>{moment(new Date()).format('DD/MM/YYYY HH:mm')}</p>
                  </div>
                </div>

              </div>
              <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col">
                <img src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="
                  alt="illustration"
                  className="aspect-video rounded-t-md "
                />
                <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-red-400 dark:text-sky-400">long established</h1>
                    <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                  </div>
                  <div className="flex items-center gap-2  mt-4">
                    <IoCalendar className="text-red-400 dark:text-sky-400" />
                    <p>{moment(new Date()).format('DD/MM/YYYY HH:mm')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col">
                <img src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="
                  alt="illustration"
                  className="aspect-video rounded-t-md "
                />
                <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-red-400 dark:text-sky-400">long established</h1>
                    <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                  </div>
                  <div className="flex items-center gap-2  mt-4">
                    <IoCalendar className="text-red-400 dark:text-sky-400" />
                    <p>{moment(new Date()).format('DD/MM/YYYY HH:mm')}</p>
                  </div>
                </div>
              </div>
            </Masonry>

          </section>

          <section className="md:sticky md:top-8 px-4 md:col-span-2 py-8 self-start bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">recent posts</h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-white p-2 w-10 h-10 flex flex-col items-center rounded-full shrink-0 bg-red-400 dark:bg-sky-400">01</span>
                <p>Lorem ipsum dolor si amet, everything sucks!</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white p-2 w-10 h-10 flex flex-col items-center rounded-full shrink-0 bg-red-400 dark:bg-sky-400">01</span>
                <p>Lorem ipsum dolor si amet, everything sucks!</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white p-2 w-10 h-10 flex flex-col items-center rounded-full shrink-0 bg-red-400 dark:bg-sky-400">01</span>
                <p>Lorem ipsum dolor si amet, everything sucks!</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </Layout>
  );
};

export default Blog;
