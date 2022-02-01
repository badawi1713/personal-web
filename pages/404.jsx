import Link from "next/link";
import React from "react";

const Page404 = () => {
    return <main className="min-h-screen flex flex-col items-center justify-center w-full dark:bg-slate-800">
        <section className="flex flex-col gap-8 md:items-start">
            <h1 className="text-5xl leading-tight md:leading-snug font-bold">
                <code className="text-red-400 dark:text-sky-400">404;</code>
                <br />
                Page is Not Found
            </h1>
            <Link href={"/"}>
                <a className="text-lg text-red-400 dark:text-sky-400">
                    Back to Home
                </a>
            </Link>

        </section>
    </main>
};

export default Page404;
