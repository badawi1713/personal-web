import { BlogDetail, Layout } from "components";
import React from "react";
import { getPostDetails, getPosts } from "services";

const Post = ({ post }) => {


  return <Layout title={post?.title || "Blog Title"}>
    <BlogDetail post={post} />
  </Layout>
};

export default Post;


export async function getStaticProps({ params }) {
  const data = (await getPostDetails(params.slug)) || [];
  if (data.length === 0) {
    return {
      redirect: {
        destination: "/404",
      },
    }
  }

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {

  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}