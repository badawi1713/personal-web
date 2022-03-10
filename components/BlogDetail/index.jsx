import { Author, BlogContent, Footer, RelatedPostCard } from "components";
import moment from "moment";
import Image from 'next/image';
import React from "react";
import { IoCalendar } from "react-icons/io5";

const BlogDetail = ({ post }) => {

    return <>
        <main className="p-8 dark:bg-slate-800 flex flex-col gap-8 min-h-screen max-w-7xl w-full mx-auto">
            <div className="flex flex-col gap-4">
                <div className="w-full h-52 md:h-96 relative border dark:border-slate-600 rounded-md">
                    <Image src={post?.featuredImage?.url || "/images/img-default.jpg"}
                        alt="illustration"
                        layout="fill"
                        quality={100}
                        objectFit="cover"
                        className="aspect-video h-full bg-cover rounded-md w-full"
                        loading="lazy"
                    />
                </div>
                <header>
                    <h1 className="text-4xl font-bold">{post?.title}</h1>
                    <div className="flex items-center gap-2 mt-4">
                        <IoCalendar className="text-red-400 dark:text-sky-400" />
                        <p>{moment(post?.createdAt || new Date()).format("MMMM DD, YYYY")}</p>
                    </div>
                </header>
                <article className="p-8 dark:bg-slate-700 rounded-md shadow-md">
                    {post?.content?.raw?.children?.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemIndex) => {
                            return BlogContent(itemIndex, item.text, item)

                        }
                        );
                        return BlogContent(index, children, typeObj, typeObj.type);
                    }) || <p>No content here</p>}
                </article>
                <Author />
            </div>

            {post?.categories?.length > 0 && (
                <>
                    <hr />
                    <div className="flex flex-col gap-4">
                        <header>
                            <h1 className="text-xl font-bold">Related Posts</h1>
                        </header>
                        <RelatedPostCard slug={post?.slug} categories={post?.categories?.map((category) => category.slug)} />
                    </div>
                </>
            )}
        </main>
        <Footer />
    </>
};

export default BlogDetail;
