import mockPosts from "../constants";
import BlogCard from "../components/BlogCard";

const BlogList = () => {
  return (
    <div className="blog-list-page">
      <p className="current-dir">
        ~/blog/posts $ ls <span className="cursor"></span>
      </p>

      <div className="blog-posts-list">
        {mockPosts.map((post, idx) => (
          <BlogCard key={post.id} post={post} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
