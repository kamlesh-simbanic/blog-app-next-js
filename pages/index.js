import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Kamlesh's Blog</title>
        <meta name="description" content="Blog's for coding" />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 10,
  };
}

export default HomePage;
