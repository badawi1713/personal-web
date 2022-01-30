import { Footer, Layout } from 'components';
import Image from 'next/image';
import { IoCalendar } from 'react-icons/io5'
import React from 'react';
import moment from 'moment';

const Post = () => {
  return <Layout title='Blog Title'>
    <main className='p-8 dark:bg-slate-800 flex flex-col gap-8 min-h-screen'>
      <div className='flex flex-col gap-4'>
        <header>
          <h1 className='text-4xl font-bold'>Blog Title</h1>
          <p className='mt-4'>January 31, 2022</p>
        </header>
        <article className="p-4 md:p-8 dark:bg-slate-700 rounded-md shadow-md">
          <p>Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </article>
        <section className='flex items-center gap-2 mt-4'>
          <Image width={64} height={64} className='rounded-full' src={'/images/img-profile.jpg'} />
          <p className='text-base'>Written by <strong className='text-red-400 dark:text-sky-400'>Dzaky Badawi</strong></p>
        </section>
      </div>
      <hr />
      <div className='flex flex-col gap-4'>
        <header>
          <h1 className='text-xl font-bold'>Related Post</h1>
        </header>
        <section className='grid md:grid-cols-3 grid-cols-1 gap-8'>
          <div className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col">
            <img src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="
              alt="illustration"
              className="bg-cover aspect-video rounded-t-md w-full"
            />
            <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">long established</h1>
                <p className="text-base leading-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
              </div>
              <div className="flex items-center gap-2  mt-4">
                <IoCalendar className="text-red-400 dark:text-sky-400" />
                <p>{moment(new Date()).format('DD/MM/YYYY HH:mm')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </Layout>;
};

export default Post;
