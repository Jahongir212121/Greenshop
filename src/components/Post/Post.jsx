import React from "react";
import ItemP from "../ItemP/ItemP";
import "./Post.css"
export default function Post() {
  return (
    <section className="post">
      <div className="container">
        <div className="post__inner">
          <h2 className="post__inner-heading">Our Blog Posts</h2>
          <p className="post__inner-text">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <ul className="post__inner-list">
            <ItemP />
            <ItemP />
            <ItemP />
            <ItemP />
          </ul>
        </div>
      </div>
    </section>
  );
}
