import React from "react";
import { Layout } from "components";
import { SVGHello } from 'public/svg'
import Image from "next/image";
import moment from "moment";
const Blog = () => {
  return (
    <Layout title={"Blog"}>
      <div className='min-h-screen flex flex-col w-full dark:bg-slate-800'>
        <header className="py-10 flex items-center justify-around px-8 bg-red-400 dark:bg-slate-700">
          <div>
            <h1 className="text-5xl font-bold leading-tight md:leading-snug relative mb-4">Taste of shoyu <br /> ramen <span className=" origin-center rotate-12 ml-4 absolute">🍜</span></h1>
            <p className="text-lg">Welcome to my personal blog</p>
          </div>
          <div className="hidden md:block">
            <Image src={SVGHello} alt='header-illustrator' width={700} />
          </div>
        </header>

        <main className="grid md:grid-cols-4 grid-cols-1 gap-10 px-8 my-8">
          <section className="flex flex-col md:col-span-3 gap-8">
            <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col-reverse md:flex-row justify-between md:gap-8">

              <div className="py-8 px-4 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">long established</h1>
                <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
              </div>
              <img src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="
                alt="illustration"
                className="md:bg-cover w-full md:w-72 md:rounded-l-none rounded-t-md md:rounded-r-md"
              />
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col">
                <img src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="
                  alt="illustration"
                  className=" rounded-t-md "
                />
                <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">long established</h1>
                    <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                  </div>
                  <p className="text-right mt-4">{moment(new Date()).format('DD/MM/YYYY HH:mm')}</p>
                </div>

              </div>
              <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col">
                <img src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="
                  alt="illustration"
                  className=" rounded-t-md "
                />
                <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">long established</h1>
                    <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                  </div>
                  <p className="text-right mt-4">{moment(new Date()).format('DD/MM/YYYY HH:mm')}</p>
                </div>

              </div>
              <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col">
                <img src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="
                  alt="illustration"
                  className="  rounded-t-md "
                />
                <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">long established</h1>
                    <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                  </div>
                  <p className="text-right mt-4">{moment(new Date()).format('DD/MM/YYYY HH:mm')}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="md:sticky md:top-8 px-4 py-8 self-start bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">recent posts</h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="p-2 w-10 h-10 flex flex-col items-center rounded-full shrink-0 bg-red-400 dark:bg-sky-400">01</span>
                <p>Lorem ipsum dolor si amet, everything sucks!</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-2 w-10 h-10 flex flex-col items-center rounded-full shrink-0 bg-red-400 dark:bg-sky-400">01</span>
                <p>Lorem ipsum dolor si amet, everything sucks!</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-2 w-10 h-10 flex flex-col items-center rounded-full shrink-0 bg-red-400 dark:bg-sky-400">01</span>
                <p>Lorem ipsum dolor si amet, everything sucks!</p>
              </div>
            </div>
          </section>


        </main>

      </div>
      <footer className="p-8 flex justify-center dark:bg-slate-700 bg-red-400">
        <p>&copy;{new Date().getFullYear()} - Dzaky Badawi</p>
      </footer>
    </Layout>
  );
};

export default Blog;
