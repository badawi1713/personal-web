import moment from "moment";
import Image from 'next/image';
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { IoCalendar } from "react-icons/io5";
import { getSimilarPosts } from "services";

const RelatedPostCard = ({ slug, categories }) => {

    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {

        const getRelatedPosts = async () => {
            try {
                const response = await getSimilarPosts(categories, slug)
                setRelatedPosts(response)
            } catch (error) {
                console.log(error)
            }
        }

        getRelatedPosts()
    }, [slug, categories]);

    return <section className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {
            relatedPosts?.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-700 rounded-md shadow-md flex flex-col border dark:border-slate-600">
                    <div className="w-full h-52 relative">
                        <Image
                            src={item?.featuredImage?.url || "/images/img-default.jpg"}
                            alt="illustration"
                            layout="fill"
                            objectFit="cover"
                            className="aspect-video rounded-t-md w-full"
                        />
                    </div>
                    <div className="py-8 px-4 flex flex-col justify-between flex-1 gap-4">
                        <div className="flex flex-col gap-4">
                            <Link href={`/blog/post/${item?.slug}`}>
                                <a className="cursor-pointer hover:text-red-500 hover:dark:text-sky-500 text-2xl font-semibold text-red-400 dark:text-sky-400">{item?.title || "Title"}</a>
                            </Link>
                            <p className="text-base leading-5">{item?.excerpt || "This content ..."}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <IoCalendar className="text-red-400 dark:text-sky-400" />
                            <p>{moment(item?.createdAt || new Date()).format("MMMM DD, YYYY")}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </section>

};

RelatedPostCard.propTypes = {
    slug: PropTypes.string,
    categories: PropTypes.array
};


export default RelatedPostCard;
