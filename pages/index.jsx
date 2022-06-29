import { Layout } from "components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {

  return (
    <Layout title="Dzaky Badawi | Frontend Engineer">
        <main className="min-h-screen mx-auto flex flex-col items-center justify-center w-full dark:bg-slate-800">
          <div className="container max-w-7xl flex-col-reverse md:flex-row flex items-center px-8 py-20 gap-8">
            <section className="flex flex-1 flex-col gap-8 md:items-start">
              <h1 className="text-5xl leading-tight md:leading-snug font-bold">
                Welcome,
                <br />
                to my personal website
              </h1>
              <p className="md:w-4/6 text-lg">
                Hello, thank you for taking the time to visit. I am Dzaky, a <em>ramenthusiast</em> guy and Frontend developer. On this website you can read my personal blog and the juicy bits about me, or find out why you should hire me.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link passHref href="/blog">
                  <button className=" bg-red-400 hover:bg-red-500 dark:bg-sky-400 hover:dark:bg-sky-500  py-4 px-8 rounded-lg hover:-translate-y-1 transition text-white ">Read my Blog</button>
                </Link>
                <Link passHref href="/portfolio">
                  <button className="border border-red-400 hover:border-red-500 dark:border-sky-400 hover:dark:border-sky-500 py-4 px-8 rounded-lg hover:-translate-y-1 transition ">About Me</button>
                </Link>
              </div>
            </section>
            <section className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-red-400 dark:bg-sky-300 relative rounded-full">
              <div className="h-44 w-44 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white rounded-full absolute top-0 right-0">
                <div className="h-full w-full rounded-full relative">
                  <Image src={"/images/img-profile.jpg"} className="rounded-full" layout="fill" alt="Dzaky Badawi | Frontend Engineer" />
                </div>
              </div>
            </section>
          </div>
        </main>
    </Layout>
  )

};

export default Home;

export async function getServerSideProps() {

  return {
    props: {}
  }
}