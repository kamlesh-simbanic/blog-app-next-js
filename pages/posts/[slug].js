import { getPostData, getPostFiles } from "../../lib/post-util";
import PostContent from "./post-detail/post-content";

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFilesNames = getPostFiles();
  const slugs = postFilesNames.map((fileName) => fileName.replace(/\.md$/, ""));
  console.log(slugs);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
