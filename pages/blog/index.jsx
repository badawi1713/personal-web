import { FeaturedBlogCard, FollowCard, Footer, Layout, ListBlog, ListBlogCard, RecentBlog } from "components";
import Image from "next/image";
import { SVGHello } from "public/svg";
import React from "react";
import { getPosts, getRecentPosts } from "services";

const Blog = ({ posts, recentPosts }) => {
  const featuredPost = posts.filter(item => item?.node?.featuredPost === true)
  const allPosts = posts.filter(item => item?.node?.featuredPost === false)

  return (
    <Layout title={"All Posts"}>
      <div className="mx-auto items-center min-h-screen flex flex-col w-full dark:bg-slate-800">
        <header className=" bg-red-400 dark:bg-slate-700 w-full py-10 px-8">
          <section className="max-w-7xl mx-auto  w-full flex items-center justify-around ">
            <div>
              <h1 className="text-5xl font-bold leading-tight md:leading-snug relative mb-4 text-white">Taste of shoyu <br /> ramen <span className=" origin-center rotate-12 ml-4 absolute">🍜</span></h1>
              <p className="text-lg text-white">Welcome to my personal blog</p>
            </div>
            <div className="hidden md:block">
              <Image src={SVGHello} alt="header-illustrator" width={700} />
            </div>
          </section>
        </header>

        <main className="max-w-7xl mx-auto grid md:grid-cols-6 grid-cols-1 lg:grid-cols-12 gap-10 px-8 my-8">

          <section className="flex flex-col md:col-span-4 lg:col-span-9 gap-8">
            <FeaturedBlogCard post={featuredPost[0]?.node} />
            <hr />
            <ListBlog>
              {
                allPosts.map((item, index) => (
                  <ListBlogCard key={index} post={item.node} />
                ))
              }
            </ListBlog>

          </section>

          <div className="md:col-span-2 lg:col-span-3 w-full relative">
            <div className="md:sticky md:top-4 w-full flex flex-col gap-4 ">
              <RecentBlog posts={recentPosts} />
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

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const recentPosts = (await getRecentPosts()) || [];
  await new Promise(resolve => {
    setTimeout(resolve, 1000)
  })

  return {
    props: { posts, recentPosts },
  };
}