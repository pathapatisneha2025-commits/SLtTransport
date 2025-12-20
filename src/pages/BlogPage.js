import React from 'react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Logistics in 2026",
      category: "Industry News",
      date: "Dec 15, 2025",
      excerpt: "How automated tracking and green energy are transforming the way we move heavy equipment...",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Maintaining Heavy Machinery",
      category: "Maintenance",
      date: "Dec 10, 2025",
      excerpt: "5 essential tips to ensure your rented excavators and cranes perform at peak efficiency...",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Safety First: Site Protocols",
      category: "Safety",
      date: "Dec 05, 2025",
      excerpt: "A deep dive into the new safety standards for industrial manpower supply in Andhra Pradesh...",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <>
      <style>
        {`
          .blog-page {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f4f7f6;
            color: #333;
            padding-bottom: 80px;
          }

          /* Blog Hero */
          .blog-hero {
            background: #002147;
            color: white;
            padding: 80px 10%;
            text-align: center;
          }

          .blog-hero h1 { font-size: 2.8rem; margin-bottom: 10px; }
          .blog-hero p { opacity: 0.8; font-size: 1.1rem; }

          /* Layout Container */
          .blog-container {
            max-width: 1200px;
            margin: -40px auto 0;
            padding: 0 20px;
          }

          /* Featured Post */
          .featured-card {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            margin-bottom: 50px;
          }

          .featured-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            min-height: 350px;
          }

          .featured-content {
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .category-badge {
            background: #00a8ff;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            width: fit-content;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          /* Grid Layout */
          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
          }

          .post-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          }

          .post-card:hover {
            transform: translateY(-10px);
          }

          .post-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .post-body {
            padding: 25px;
          }

          .post-date {
            font-size: 0.85rem;
            color: #888;
            margin-bottom: 10px;
          }

          .post-title {
            font-size: 1.4rem;
            color: #002147;
            margin-bottom: 15px;
            line-height: 1.3;
          }

          .read-more {
            color: #00a8ff;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 15px;
          }

          .read-more:hover { text-decoration: underline; }

          @media (max-width: 800px) {
            .featured-card { grid-template-columns: 1fr; }
            .blog-hero h1 { font-size: 2rem; }
          }
        `}
      </style>

      <div className="blog-page">
        <section className="blog-hero">
          <h1>Insights & Updates</h1>
          <p>Stay updated with the latest trends in transport and logistics.</p>
        </section>

        <div className="blog-container">
          {/* Featured Post */}
          <article className="featured-card">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80" 
              alt="Featured" 
              className="featured-img"
            />
            <div className="featured-content">
              <span className="category-badge">Featured Strategy</span>
              <h2 className="post-title" style={{fontSize: '2rem'}}>Optimizing Supply Chains for the Anantapur Industrial Belt</h2>
              <p style={{color: '#666', lineHeight: '1.6'}}>
                Discover how localized logistics solutions are helping businesses reduce costs 
                and improve delivery timelines across Andhra Pradesh...
              </p>
              <a href="#read" className="read-more">Read Full Article →</a>
            </div>
          </article>

          {/* Post Grid */}
          <div className="blog-grid">
            {posts.map(post => (
              <article key={post.id} className="post-card">
                <img src={post.image} alt={post.title} className="post-img" />
                <div className="post-body">
                  <div className="post-date">{post.date} • {post.category}</div>
                  <h3 className="post-title">{post.title}</h3>
                  <p style={{color: '#666', fontSize: '0.95rem'}}>{post.excerpt}</p>
                  <a href="#read" className="read-more">Read More</a>
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