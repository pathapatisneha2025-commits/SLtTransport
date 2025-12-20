import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://slttranportdatabse.onrender.com/api/blogs/all");
      const data = await res.json();
      const mapped = data.map(blog => ({
        id: blog.id,
        title: blog.title,
        category: blog.slug,
        date: new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        excerpt: blog.description,
        image: blog.image_url,
        slug: blog.slug
      }));
      setPosts(mapped);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  return (
    <>
      <style>
        {`
          .blog-page { font-family: 'Segoe UI', sans-serif; background-color: #f4f7f6; color: #333; padding-bottom: 80px; }
          .blog-hero { background: #002147; color: white; padding: 80px 10%; text-align: center; }
          .blog-hero h1 { font-size: 2.8rem; margin-bottom: 10px; }
          .blog-hero p { opacity: 0.8; font-size: 1.1rem; }
          .blog-container { max-width: 1200px; margin: -40px auto 0; padding: 0 20px; }
          .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
          .post-card { background: white; border-radius: 8px; overflow: hidden; transition: transform 0.3s ease; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
          .post-card:hover { transform: translateY(-5px); }
          .post-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
          .post-body { padding: 20px; }
          .post-date { font-size: 0.8rem; color: #888; margin-bottom: 8px; }
          .post-title { font-size: 1.25rem; color: #002147; margin-bottom: 12px; line-height: 1.3; }
          .read-more { color: #00a8ff; text-decoration: none; font-weight: bold; display: inline-block; margin-top: 10px; }
          .read-more:hover { text-decoration: underline; }
          .category-badge { background: #00a8ff; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; display: inline-block; margin-bottom: 8px; }
          
          /* Mobile responsiveness */
          @media (max-width: 800px) {
            .blog-hero { padding: 60px 5%; }
            .blog-hero h1 { font-size: 2rem; }
            .blog-grid { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; }
            .post-body { padding: 15px; }
            .post-title { font-size: 1.1rem; }
            .post-date { font-size: 0.75rem; }
            .read-more { font-size: 0.85rem; }
          }

          @media (max-width: 480px) {
            .blog-hero { padding: 40px 5%; }
            .blog-hero h1 { font-size: 1.6rem; }
            .blog-grid { grid-template-columns: 1fr; gap: 15px; }
            .post-body { padding: 12px; }
            .post-title { font-size: 1rem; }
            .post-date { font-size: 0.7rem; }
            .read-more { font-size: 0.8rem; }
            .category-badge { font-size: 0.7rem; padding: 3px 8px; }
          }
        `}
      </style>

      <div className="blog-page">
        <section className="blog-hero">
          <h1>Insights & Updates</h1>
          <p>Stay updated with the latest trends in transport and logistics.</p>
        </section>

        <div className="blog-container">
          <div className="blog-grid">
            {posts.map(post => (
              <article key={post.id} className="post-card">
                <img src={post.image} alt={post.title} className="post-img" />
                <div className="post-body">
                  <span className="category-badge">{post.category}</span>
                  <div className="post-date">{post.date}</div>
                  <h3 className="post-title">{post.title}</h3>
                  <p style={{color: '#666', fontSize: '0.95rem'}}>{post.excerpt}</p>
                  <a href={`/${post.slug}`} className="read-more">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
