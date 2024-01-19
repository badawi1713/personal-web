import React from "react";
import { IoLogoLinkedin, IoGitBranch, IoMail } from "react-icons/io5";

const Contact = () => {
  return <div className="container px-8">
    <h1 className="text-xl mb-4 font-bold">Feel free to contact me</h1>
    <div className="flex flex-col gap-4 items-start">
      <a rel="noreferrer" target={"_blank"} href="https://www.linkedin.com/in/dzaky-badawi/" className="flex items-center gap-2 hover:text-red-400 hover:dark:text-sky-400 cursor-pointer">
        <IoLogoLinkedin />
        <p>linkedin.com/in/dzaky-badawi/</p>
      </a>
      <a rel="noreferrer" href="mailto: dbadawi.dev@gmail.com" className="flex items-center gap-2 hover:text-red-400 hover:dark:text-sky-400 cursor-pointer">
        <IoMail />
        <p>
          dbadawi.dev@gmail.com
        </p>
      </a>
      <a rel="noreferrer" target={"_blank"} href="https://github.com/badawi1713" className="flex items-center gap-2 hover:text-red-400 hover:dark:text-sky-400 cursor-pointer">
        <IoGitBranch />
        <p>badawi1713</p>
      </a>
    </div>
  </div>
};

export default Contact;
