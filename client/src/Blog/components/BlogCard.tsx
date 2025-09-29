import { Link } from "react-router-dom";
import type { BlogPostType } from "../types";

const BlogCard = ({ post, idx }: { post: BlogPostType; idx: number }) => {
  return (
    <div className="blog-card">
      <p className="current-dir">
        ~/blog/posts $ cat post-{String(idx + 1).padStart(2, "0")}.txt
      </p>

      <Link to={`/blog/${post.slug}`}>
        <p>
          <span> [{post.date}] </span> {post.title}
        </p>

        <p className="snippet"> {post.snippet} </p>
      </Link>
    </div>
  );
};
export default BlogCard;
