import React from "react";
import { IoLogoLinkedin, IoLogoWhatsapp, IoMail } from "react-icons/io5";

const Contact = () => {
  return <div className="container px-8">
    <h1 className="text-xl mb-4 font-bold">Feel free to contact me</h1>
    <div className="flex flex-col gap-4 items-start">
      <a rel="noreferrer" target={"_blank"} href="https://wa.me/6282136526483" className="flex items-center gap-2 hover:text-red-400 hover:dark:text-sky-400 cursor-pointer">
        <IoLogoWhatsapp />
        <p>+62 821 3652 6483</p>
      </a>
      <a rel="noreferrer" target={"_blank"} href="https://www.linkedin.com/in/dzaky-badawi-46656a163/" className="flex items-center gap-2 hover:text-red-400 hover:dark:text-sky-400 cursor-pointer">
        <IoLogoLinkedin />
        <p>linkedin.com/in/dzaky-badawi-46656a163/</p>
      </a>
      <a rel="noreferrer" href="mailto: dzaky.badawi@gmail.com" className="flex items-center gap-2 hover:text-red-400 hover:dark:text-sky-400 cursor-pointer">
        <IoMail />
        <p>
          dzaky.badawi@gmail.com
        </p>
      </a>
    </div>
  </div>
};

export default Contact;
