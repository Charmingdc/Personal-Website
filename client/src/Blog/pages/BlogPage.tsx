import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CdBack from "../components/CdBack";
import BlogPost from "../components/BlogPost";

import mockPosts from "../constants";
import type { BlogPostType } from "../types";

const BlogPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const postDetails = mockPosts.find(post => post.slug === slug);
    if (postDetails) setPost(postDetails);
  }, [slug]);

  return (
    <div className="blog-page">
      <p className="current-dir">~/blog/posts $ ls cat {slug}.txt </p>

      {post ? (
        <>
          <BlogPost post={post} />
          <CdBack />
        </>
      ) : (
        <h2> No post found :) </h2>
      )}
    </div>
  );
};
export default BlogPage;
