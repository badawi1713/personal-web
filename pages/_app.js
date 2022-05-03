import { Loader } from "components";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleStop = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

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
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Component {...pageProps} />
            {showScroll && (
              <span className="fixed bottom-4 right-8 lg:bottom-12 z-20 w-full px-auto">
                <span className="max-w-7xl mx-auto flex justify-end">
                  <div
                    onClick={scrollTop}
                    className={
                      "text-xl transition w-12 h-12 rounded-full shadow-md dark:bg-sky-400 dark:hover:bg-sky-500 bg-white dark:text-white text-red-400 border border-red-400 dark:border-0 flex justify-center items-center hover:shadow-xl cursor-pointer"
                    }
                  >
                    <IoChevronUp />
                  </div>
                </span>
              </span>
            )}
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
