import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";
function MyApp({ Component, pageProps }) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 24) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 24) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      {showScroll && (
          <div
            onClick={scrollTop}
            className={
              "text-xl transition w-12 h-12 rounded-full shadow-md dark:bg-sky-400 dark:hover:bg-sky-500 bg-white dark:text-white text-red-400 border border-red-400 dark:border-0 flex justify-center items-center fixed bottom-4 right-8 lg:bottom-12 z-20 hover:shadow-xl cursor-pointer"
            }
          >
            <IoChevronUp />
          </div>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
