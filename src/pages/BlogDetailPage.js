import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://slttranportdatabse.onrender.com/api/blogs/${id}`);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "50px", color: "red" }}>{error}</p>;
  if (!blog) return <p style={{ textAlign: "center", marginTop: "50px" }}>Blog not found</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px", fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ color: "#002147" }}>{blog.title}</h1>
      <img 
        src={blog.image_url} 
        alt={blog.title} 
        style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }} 
      />
      <p style={{ whiteSpace: "pre-line", lineHeight: "1.7", color: "#333" }}>{blog.full_content}</p>
    </div>
  );
};

export default BlogDetailPage;
