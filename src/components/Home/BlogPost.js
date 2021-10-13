import React from "react";
import { Col } from "react-bootstrap";

const BlogPost = (props) => {
  const { title, description, author, date } = props.blog;
  return (
    <Col md={4}>
      <div className="card shadow shadow rounded border-0  blog py-5">
        <div className="card-header d-flex  align-items-center bg-transparent border-0">
          {/* <img className="mx-3" src={} alt="" width="60" /> */}
          <div>
            <h6 className="text-primary">{author}</h6>
            <p className="m-0">{date}</p>
          </div>
        </div>
        <div className="card-body">
          <h5>{title}</h5>
          <p className="card-text text-secondary mt-4">{description}</p>
          {/* <h6 className="blog-footer">Coming Soon......</h6> */}
        </div>
      </div>
    </Col>
  );
};

export default BlogPost;
