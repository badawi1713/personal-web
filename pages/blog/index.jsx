import { FeaturedBlogCard, FollowCard, Footer, Layout, ListBlog, ListBlogCard, RecentBlog } from "components";
import Image from "next/image";
import { SVGHello } from 'public/svg';
import React from "react";

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
            <FeaturedBlogCard />
            <hr />
            <ListBlog>
              <ListBlogCard />
              <ListBlogCard />
              <ListBlogCard />
              <ListBlogCard />
            </ListBlog>

          </section>

          <div className="md:col-span-2 w-full relative">
            <div className="md:sticky md:top-4 w-full flex flex-col gap-4 ">
              <RecentBlog />
              <FollowCard />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Layout>
  );
};

export default Blog;
