import React from "react";
import Image from "next/image";

const Author = () => {
  return  <section className="flex items-center gap-2 mt-4">
  <Image alt="author-image" width={64} height={64} className="rounded-full" src={"/images/img-profile.jpg"} />
  <p className="text-base">Written by <strong className="text-red-400 dark:text-sky-400">Dzaky Badawi</strong></p>
</section>
};

export default Author;
