import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  faSearch,
  faAtom,
  faGraduationCap,
  faUserGraduate,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
const HomeMain = () => {
  return (
    <>
      <div className="home-container d-flex align-items-center">
        <div className="ms-5">
          <h1 className="mb-3 text-white">
            Learn & <br />
            Lead the best
          </h1>

          <button className="home-btn me-3 fw-bold">
            {" "}
            <FontAwesomeIcon icon={faSignInAlt} className="home-btn-icon" />
            FREE REGISTRATION
          </button>
          <a href="#courses" className="text-decoration-none">
            {" "}
            <button className="home-btn fw-bold">
              {" "}
              <FontAwesomeIcon icon={faAtom} className="home-btn-icon" />
              VIEW COURSES
            </button>
          </a>
          <Form className="flex-grow-1 d-flex justify-content-center h-100 w-75 mt-3 ms-3 search-form">
            <Form.Control
              id="search"
              name="search"
              placeholder="Search courses"
              className="flex-grow-1 shadow-none border-0 search-input"
            />
            <div style={{ marginTop: "5px" }}>
              <Button
                type="submit"
                className="shadow-none rounded-0 rounded-end bg-transparent text-white border-0 d-flex align-items-center justify-content-center items_on-hover"
              >
                <FontAwesomeIcon icon={faSearch} style={{ color: "black" }} />
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div className="m-5">
        <Row>
          <Col md={8}>
            <h2 className="fw-bold">
              Digital Learning | Global Skills Development and
              <h2 className="my-3 fw-bold">
                Digital Service Providing Institute
              </h2>
            </h2>
            <div className="my-5 w-75">
              <p className="details-paragraph">
                Digital Learning is a purpose-driven, global skill development
                organization. It was created with a desire to make a tangible
                difference in the lives of the underprivileged, disadvantaged,
                and underserved population as a whole. The youth, especially the
                female community, who struggle to find a comfortable living, is
                our prime concern.
              </p>
            </div>
            <Link
              to="/about-digital-learning"
              className="text-success fw-bold text-decoration-none"
              style={{ fontSize: 16 }}
            >
              See more
            </Link>
          </Col>
          <Col md={4}>
            <Row className=" my-3 d-flex justify-content-around">
              <Col className="me-3 graduation-section">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="graduate-icon mb-3"
                />
                <p className=" fw-bold">100+ </p>
                <h6 className="mb-3 fw-bold">Graduate Students</h6>
              </Col>

              <Col className="graduation-section">
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  className="graduate-icon mb-3"
                />
                <p className="fw-bold"> 10+ </p>
                <Link to="/mentors" className="text-decoration-none">
                  <h6 className="mb-3 fw-bold" style={{ color: "black" }}>
                    Mentors
                  </h6>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomeMain;
