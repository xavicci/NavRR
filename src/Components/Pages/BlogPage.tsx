import { Link, Outlet } from "react-router-dom";
import { blogdata } from "../blogdata";

interface PostType {
  slug: string;
  title: string;
  content: string;
  author: string;
}
interface Props {
  post: PostType;
}

export const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>

      <Outlet />
      <ul>
        {blogdata.map((post, index) => (
          <BlogLink key={index} post={post} />
        ))}
      </ul>
    </>
  );
};

function BlogLink({ post }: Props) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}
