import React, { useEffect } from "react";

export default function LatestBlogPosts() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .blog-section {
        padding: 90px 6%;
        background: #ffffff;
        text-align: center;
      }

      .blog-title {
        font-size: 2.6rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 10px;
      }

      .blog-subtitle {
        font-size: 1.1rem;
        color: #64748b;
        max-width: 750px;
        margin: 0 auto 60px;
      }

      .blog-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 35px;
        max-width: 1350px;
        margin: auto;
      }

      .blog-card {
        background: #ffffff;
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 18px 45px rgba(0,0,0,0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-align: left;
      }

      .blog-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 28px 65px rgba(0,0,0,0.12);
      }

      .blog-image img {
        width: 100%;
        height: 240px;
        object-fit: cover;
      }

      .blog-content {
        padding: 28px 26px 32px;
      }

      .blog-content h3 {
        font-size: 1.35rem;
        font-weight: 600;
        margin-bottom: 12px;
        color: #0f172a;
      }

      .blog-content h3.active {
        color: #38bdf8;
      }

      .blog-content p {
        font-size: 1rem;
        color: #64748b;
        line-height: 1.6;
        margin-bottom: 18px;
      }

      .read-more {
        font-size: 1rem;
        color: #38bdf8;
        font-weight: 500;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .read-more:hover {
        text-decoration: underline;
      }

      /* Responsive */
      @media (max-width: 1100px) {
        .blog-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 650px) {
        .blog-grid {
          grid-template-columns: 1fr;
        }

        .blog-title {
          font-size: 2.1rem;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const blogs = [
    {
      title: "How JCB Machines Improve Construction Efficiency",
      desc:
        "Learn how modern JCB equipment accelerates workflow and reduces operational costs.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      link: "/blog/jcb-machines",
    },
    {
      title: "Top 5 Transport Tips for Heavy Machinery",
      desc:
        "Essential safety and logistics strategies for transporting heavy machinery effectively.",
      img: "https://images.unsplash.com/photo-1599687268904-d1a8c1c6d1fa",
      link: "/blog/transport-tips",
      active: true,
    },
    {
      title: "Why Skilled Manpower Matters in Modern Projects",
      desc:
        "Understand the value of trained professionals in delivering high-quality results.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      link: "/blog/skilled-manpower",
    },
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-title">Latest Blog Posts</h2>
      <p className="blog-subtitle">
        Insights and updates from logistics, transport, and heavy equipment industries.
      </p>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image">
              <img src={blog.img} alt={blog.title} />
            </div>

            <div className="blog-content">
              <h3 className={blog.active ? "active" : ""}>{blog.title}</h3>
              <p>{blog.desc}</p>
              <a href={blog.link} className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
