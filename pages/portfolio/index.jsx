import { AboutMe, Contact, ExperienceCard, Footer, Layout, PortfolioCard, TechnologiesCard } from "components";
import React from "react";
import Masonry from "react-masonry-css";
import { experiences, portfolio } from "utils";

const breakpointColumnsObject = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1
};

const Portfolio = () => {
  return <Layout title="About Me">
    <main className="w-full dark:bg-slate-800">
      <div className="max-w-7xl w-full mx-auto">

        <AboutMe />

        <section className="flex flex-col items-center justify-center w-full dark:bg-slate-700 bg-red-400">
          <div className="container flex flex-col px-8 py-20 gap-8">
            <TechnologiesCard />
            {experiences.map((item, index) => (
              <ExperienceCard experience={item} key={index} />
            ))}
          </div>

        </section>
        <section className="flex flex-col items-center justify-center w-full dark:bg-slate-800">
          <div className="container px-8 pt-20 pb-8">
            <h1 className="text-xl mb-4 font-bold">Featured Works</h1>
            <Masonry
              breakpointCols={breakpointColumnsObject}
              className="my-masonry-grid flex w-full gap-8 "
              columnClassName="my-masonry-grid_column flex flex-col gap-8">
              {portfolio.map((item, index) => (
                <PortfolioCard key={index} portfolio={item} />
              ))}
            </Masonry>
          </div>
          <Contact />
        </section>
      </div>
    </main>
    <Footer />
  </Layout>
};

export default Portfolio;

export async function getServerSideProps() {
  await new Promise(resolve => {
    setTimeout(resolve, 1000)
  })

  return {
    props: {}
  }
}