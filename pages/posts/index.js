import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";
import { Fragment } from "react";

function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Post</title>
        <meta name="description" content="A List of all Blogs" />
      </Head>{" "}
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 10,
  };
}

export default AllPostPage;
