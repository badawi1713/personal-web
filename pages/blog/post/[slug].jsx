import { Author, Footer, Layout, RelatedPostCard } from "components";
import moment from "moment";
import React from "react";
import { IoCalendar } from "react-icons/io5";

const Post = () => {
  return <Layout title="Blog Title">
    <main className="p-8 dark:bg-slate-800 flex flex-col gap-8 min-h-screen">
      <div className="flex flex-col gap-4">
        <header>
          <h1 className="text-4xl font-bold">Blog Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <IoCalendar className="text-red-400 dark:text-sky-400" />
            <p>{moment(new Date()).format("MMMM DD, YYYY")}</p>
          </div>
        </header>
        <article className="p-4 md:p-8 dark:bg-slate-700 rounded-md shadow-md">
          <p>TEST</p>
        </article>
        <Author />
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <header>
          <h1 className="text-xl font-bold">Related Post</h1>
        </header>
        <section className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <RelatedPostCard />
        </section>
      </div>
    </main>
    <Footer />
  </Layout>;
};

export default Post;
