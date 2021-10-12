import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MentorDetails = ({ mentor }) => {
  const { name, title, img } = mentor;
  return (
    <Col md={3}>
      <Card className="mb-3 mt-5 ">
        <Card.Img
          className="mentor-image mt-5 mx-auto"
          variant="top"
          src={img}
        />
        <Card.Body className="card-body">
          <Card.Title className="text-center mb-4">
            <Link to="" className="link">
              {name}
            </Link>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-center">
              <div>
                <h5>{title}</h5>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MentorDetails;
