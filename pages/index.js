import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for Production.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for Production.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for Production.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for Production.",
    date: "2022-02-10",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
