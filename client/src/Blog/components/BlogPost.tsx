import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

import type { BlogPostType } from "../types";

const BlogPost = ({ post }: { post: BlogPostType }) => {
  return (
    <div className="blog-post">
      <p>
        <span> [{post.date}] </span> {post.title}
      </p>

      <p className="snippet"> - {post.snippet} </p>

      <article className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;
