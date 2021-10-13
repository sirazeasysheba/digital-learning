import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CourseInfo = ({ course }) => {
  const { title, icon, name } = course;
  return (
    <Col md={3}>
      <Card className="course-card mb-3">
        <Card.Img className="card-img" variant="top" src={icon} />
        <Card.Body className="card-body">
          <Card.Title className="text-center mb-4">
            <Link to={`/courses/${name}`} className="link">
              {title}
            </Link>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between">
              <div className="d-flex mt-2">
                <div className="me-1 rating-icon">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="fw-bold" style={{ fontSize: 13 }}>
                  130 views{" "}
                </p>
              </div>
              <div>
                <Link to="/dashboard" className="text-decoration-none">
                  {" "}
                  <button className="add-cart-button mt-1">Registration</button>
                </Link>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseInfo;
