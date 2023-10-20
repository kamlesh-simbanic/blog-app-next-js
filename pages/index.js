import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";

function HomePage(props) {
  return (
    <Fragment>
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
