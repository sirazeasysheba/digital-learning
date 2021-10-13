import React from "react";
import { Container, Row } from "react-bootstrap";
import BlogPost from "./BlogPost";
const Blog = () => {
  const blogData = [
    {
      title: "Your Desire Website Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "David Joe",
      date: "23 April 2019",
    },
    {
      title: "Design & Creative Services",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Sinthia",
      date: "23 April 2019",
    },
    {
      title: "Digital Marketing & Branding ",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: " Cudi",
      date: "23 April 2019",
    },
  ];
  return (
    <Container className="blog-section">
      <div className="d-flex justify-content-center mb-5 blog-header">
        Blogs
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Row className="mt-5 ">
          {blogData.map((blog) => (
            <BlogPost blog={blog} key={blog.title} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Blog;
