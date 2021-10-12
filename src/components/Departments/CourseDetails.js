import React, { useState } from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import {
  faClock,
  faFileInvoice,
  faLongArrowAltRight,
  faCartPlus,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import { faAlgolia } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const CourseDetails = ({ course }) => {
  const {
    title,
    duration,
    weekend,
    regular,
    description,
    price,
    img,
    module,
    objective,
    highlight,
    software,
  } = course;
  const moduleList = module.split(".");
  const objectiveList = objective.split(".");
  const highlightList = highlight.split(".");
  const softwareList = software.split(".");

  return (
    <Row className="ms-4 mt-5">
      <div className="cart-icon d-none">
        <Link to="/cart" className="text-decoration-none text-white">
          <FontAwesomeIcon icon={faCartPlus} />
        </Link>
      </div>
      <Col md={8}>
        <div className="right-container me-5">
          <div className="d-flex justify-content-around me-3 mb-3">
            <h1 className="fw-bold">{title.toUpperCase()}</h1>
            <div className="price-tag">
              <h6>৳ {price}</h6>
            </div>
          </div>
          <div className="mb-5">
            <p className=" ms-3 details-paragraph" style={{ width: "80%" }}>
              {" "}
              {description}
            </p>
          </div>
          <Row className="mt-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey="overview">
              <Row>
                <Nav variant="pills">
                  <Row className="w-100 mx-2 mb-3">
                    <Col md={4} className="px-0">
                      <Nav.Item className="active-toggle-btn">
                        <Nav.Link
                          eventKey="overview"
                          className="tab-links py-3"
                        >
                          Overview
                        </Nav.Link>
                      </Nav.Item>{" "}
                    </Col>
                    <Col md={4} className="px-0">
                      {" "}
                      <Nav.Item className="active-toggle-btn">
                        <Nav.Link
                          eventKey="curriculum"
                          className="tab-links py-3"
                        >
                          Curriculum
                        </Nav.Link>
                      </Nav.Item>{" "}
                    </Col>
                    <Col md={4} className="px-0">
                      <Nav.Item className="active-toggle-btn">
                        <Nav.Link
                          eventKey="objective"
                          className="tab-links py-3"
                        >
                          Objective
                        </Nav.Link>
                      </Nav.Item>
                    </Col>
                  </Row>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="overview">
                    <div className="mt-4">
                      <h5 className="fw-bold">
                        This course will highlight on:{" "}
                      </h5>
                      <ul
                        className="list-unstyled text-muted"
                        style={{ fontSize: 14 }}
                      >
                        {highlightList?.map((li) => (
                          <li className="mt-1">
                            <FontAwesomeIcon
                              icon={faFileInvoice}
                              style={{ color: "#02863A" }}
                            />{" "}
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="fw-bold">Software & Tools Taught</h5>
                      <ul
                        className="list-unstyled text-muted"
                        style={{ fontSize: 14 }}
                      >
                        {softwareList?.map((li) => (
                          <li className="mt-1">
                            <FontAwesomeIcon
                              icon={faFileInvoice}
                              style={{ color: "#02863A" }}
                            />{" "}
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="curriculum">
                    <div className="mt-3">
                      <h3> COURSE MODULE</h3>
                      <ul
                        className="list-unstyled text-muted"
                        style={{ fontSize: 14 }}
                      >
                        {moduleList?.map((li) => (
                          <li className="mt-1">
                            <FontAwesomeIcon
                              icon={faFileInvoice}
                              style={{ color: "#02863A" }}
                            />{" "}
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="objective">
                    <div className="mt-3">
                      <h3>
                        After completing the course student will be able to:{" "}
                      </h3>
                      <ul
                        className="list-unstyled text-muted"
                        style={{ fontSize: 14 }}
                      >
                        {objectiveList?.map((li) => (
                          <li className="mt-1">
                            <FontAwesomeIcon
                              icon={faHandPointRight}
                              style={{ color: "#02863A" }}
                            />{" "}
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </Row>
          {/* <Row className="active-btn-section mb-3">
            <Col md={4} className="p-0">
              <button className="active-toggle-btn" onClick={handleChange}>
                Overview
              </button>
            </Col>
            <Col md={4} className="p-0">
              <button className="active-toggle-btn" onClick={handleChange2}>
                Curriculum
              </button>
            </Col>
            <Col md={4} className="p-0">
              <button className="active-toggle-btn" onClick={handleChange3}>
                Course Objective
              </button>
            </Col>
          </Row> */}
        </div>
      </Col>
      <Col md={4}>
        <div
          className="left-container d-flex justify-content-center shadow"
          style={{ fontSize: 14 }}
        >
          <div>
            <img
              src={img}
              alt="Graphic Design"
              className="image-fluid "
              style={{ width: "300px" }}
            />
            <div
              className="d-flex justify-content-between mt-3"
              style={{ borderBottom: "1px solid rgba(128,128,128,0.3)" }}
            >
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faClock}
                  className="course-details-icon"
                />
                <p>Duration </p>
              </div>
              <p>{duration} Hours </p>
            </div>
            <div
              className="d-flex justify-content-between mt-3"
              style={{ borderBottom: "1px solid rgba(128,128,128,0.3)" }}
            >
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faFileInvoice}
                  className="course-details-icon"
                />
                <p>Lectures </p>
              </div>
              <div style={{ lineHeight: 1 }}>
                <p>{regular} (Regular) </p>
                <p>{weekend} (Weekend) </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faAlgolia}
                  className="course-details-icon"
                />
                <p>Skill Level </p>
              </div>
              <p>Beginner </p>
            </div>
          </div>
        </div>
        <div className="course-details-btn-container d-flex justify-content-center">
          <div>
            <button className="course-details-btn d-block mb-2">
              BUY THIS COURSE{" "}
              <FontAwesomeIcon icon={faLongArrowAltRight} className="ms-2" />
            </button>
            <button className="course-details-btn mb-5">REGISTER</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CourseDetails;
