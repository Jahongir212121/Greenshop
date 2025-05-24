import React from 'react';
import './Blog.css';
import Image from '../../assets/blog.svg';

const blogData = [
    {
        title: "Cactus & Succulent Care Tips",
        date: "September 12 | Read in 6 minutes",
        description: "Cacti and succulents are easy care plants for any home or patio.",
        image: Image
    },
    {
        title: "Cactus & Succulent Care Tips",
        date: "September 12 | Read in 6 minutes",
        description: "Cacti and succulents are easy care plants for any home or patio.",
        image: Image
    },
    {
        title: "Cactus & Succulent Care Tips",
        date: "September 12 | Read in 6 minutes",
        description: "Cacti and succulents are easy care plants for any home or patio.",
        image: Image
    },
    {
        title: "Cactus & Succulent Care Tips",
        date: "September 12 | Read in 6 minutes",
        description: "Cacti and succulents are easy care plants for any home or patio.",
        image: Image
    }
];

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="header">
                    <h1>Our Blog Posts</h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className="blog-inner">
                    {blogData.map((post, index) => (
                        <div className="blog-post" key={index}>
                            <img src={post.image} className="blog-image" alt="Plant" />
                            <div className="blog-date">{post.date}</div>
                            <div className="blog-title">{post.title}</div>
                            <div className="blog-subtitle">{post.description}</div>
                            <a href="#" className="read-more">Read More →</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
