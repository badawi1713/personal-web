import React from "react";
import PropTypes from "prop-types";

const PortfolioCard = ({ portfolio }) => {
    const { title,
        year,
        description,
        sourceCodeUrl,
        demoUrl,
        imageUrl
    } = portfolio

    const openLinkHandler = (link = "https://google.com") => {
        window.open(link, "_blank")
    }

    return <div className="rounded-md shadow-md bg-white dark:bg-slate-700 pb-8 flex flex-col gap-4">
        <img className="bg-cover aspect-video rounded-t-md w-full" src={imageUrl || "https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="} />
        <div className="px-8 flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">{title || "Project's Title"}</h1>
            <div className="py-1 px-10 flex items-center justify-center bg-red-400 dark:bg-sky-400 rounded-full mx-auto">
                <p className="text-white">{year || "Year"}</p>
            </div>
            <p className="text-base my-4">
                {description || "Description"}
            </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:justify-end px-8">
            <button onClick={() => openLinkHandler(sourceCodeUrl)} title={sourceCodeUrl ? sourceCodeUrl : "Sorry, source code is unavailable"} disabled={!sourceCodeUrl} className="disabled:cursor-not-allowed disabled:dark:bg-slate-400 disabled:bg-slate-400 bg-red-400 hover:bg-red-500 dark:bg-sky-400 hover:dark:bg-sky-500  py-2 px-4 rounded-lg hover:-translate-y-1 transition text-white ">Source Code</button>
            <button onClick={() => openLinkHandler(demoUrl)} title={demoUrl ? demoUrl : "Sorry, demo is unavailable"} disabled={!demoUrl} className="disabled:border-slate-400 disabled:dark:border-slate-400 disabled:text-slate-400 disabled:cursor-not-allowed border border-red-400 hover:border-red-500 dark:border-sky-400 hover:dark:border-sky-500 py-2 px-4 rounded-lg hover:-translate-y-1 transition">View Demo</button>
        </div>
    </div>
};

PortfolioCard.propTypes = {
    portfolio: PropTypes.object
};

export default PortfolioCard;
