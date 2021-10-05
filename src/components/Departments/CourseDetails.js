import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
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
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const { title, duration, weekend, regular, description, price, img } = course;
  const handleChange = () => {
    setActive(true);
    setActive2(false);
    setActive3(false);
  };
  const handleChange2 = () => {
    setActive(false);
    setActive2(true);
    setActive3(false);
  };
  const handleChange3 = () => {
    setActive(false);
    setActive2(false);
    setActive3(true);
  };
  return (
    <Row className="ms-4 mt-5">
      <div className="cart-icon">
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
          <p> {description}</p>
          <Row className="active-btn-section mb-3">
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
          </Row>
          {active && (
            <div>
              <div>
                <h5 className="fw-bold">This course includes</h5>
                <ul
                  className="list-unstyled text-muted"
                  style={{ fontSize: 14 }}
                >
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML is the standard markup language for creating Web pages.
                  </li>
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML stands for Hyper Text Markup Language HTML describes
                    the structure of a Web page .
                  </li>
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML stands for Hyper Text Markup Language HTML describes
                    the structure of a Web page .
                  </li>
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML stands for Hyper Text Markup Language HTML describes
                    the structure of a Web page .
                  </li>
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML stands for Hyper Text Markup Language HTML describes
                    the structure of a Web page .
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="fw-bold">Description</h5>
                <p>
                  <ul
                    className="list-unstyled text-muted"
                    style={{ fontSize: 14 }}
                  >
                    <li className="mt-1">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        style={{ color: "#02863A" }}
                      />{" "}
                      HTML is the standard markup language for creating Web
                      pages.
                    </li>
                    <li className="mt-1">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        style={{ color: "#02863A" }}
                      />{" "}
                      HTML stands for Hyper Text Markup Language HTML describes
                      the structure of a Web page .
                    </li>
                    <li className="mt-1">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        style={{ color: "#02863A" }}
                      />{" "}
                      HTML stands for Hyper Text Markup Language HTML describes
                      the structure of a Web page .
                    </li>
                    <li className="mt-1">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        style={{ color: "#02863A" }}
                      />{" "}
                      HTML stands for Hyper Text Markup Language HTML describes
                      the structure of a Web page .
                    </li>
                    <li className="mt-1">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        style={{ color: "#02863A" }}
                      />{" "}
                      HTML stands for Hyper Text Markup Language HTML describes
                      the structure of a Web page .
                    </li>
                  </ul>
                </p>
              </div>
              <div>
                <h5 className="fw-bold">Software & Tools Taught</h5>
                <ul
                  className="list-unstyled text-muted"
                  style={{ fontSize: 14 }}
                >
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML is the standard markup language for creating Web pages.
                  </li>
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML stands for Hyper Text Markup Language HTML describes
                    the structure of a Web page .
                  </li>
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML stands for Hyper Text Markup Language HTML describes
                    the structure of a Web page .
                  </li>
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML stands for Hyper Text Markup Language HTML describes
                    the structure of a Web page .
                  </li>
                  <li className="mt-1">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      style={{ color: "#02863A" }}
                    />{" "}
                    HTML stands for Hyper Text Markup Language HTML describes
                    the structure of a Web page .
                  </li>
                </ul>
              </div>
            </div>
          )}
          {active2 && (
            <div>
              <h3> COURSE MODULE</h3>
              <ul className="list-unstyled text-muted" style={{ fontSize: 14 }}>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML is the standard markup language for creating Web pages.
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML stands for Hyper Text Markup Language HTML describes the
                  structure of a Web page .
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML stands for Hyper Text Markup Language HTML describes the
                  structure of a Web page .
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML stands for Hyper Text Markup Language HTML describes the
                  structure of a Web page .
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML stands for Hyper Text Markup Language HTML describes the
                  structure of a Web page .
                </li>
              </ul>
              {/* Overview Of Digital Marketing Facebook Business Page Facebook
                Advertising 1 Facebook Advertising 2 Facebook Advertising 3
                Facebook Retargeting SEO Overview Keyword for SEO All about
                Website Content Strategy Complete On Page SEO using Yoast/Rank
                Math plugin Technical SEO 1 Technical SEO 2 OFF Page SEO 1 OFF
                Page SEO 2 Local SEO YouTube Introduction YouTube Channel
                YouTube Video Instagram Overview Google Ads 1 Google Ads 2
                E-mail Marketing LinkedIn Marketing
              */}
            </div>
          )}
          {active3 && (
            <div>
              <h3>You will learn form this course</h3>
              <ul className="list-unstyled text-muted" style={{ fontSize: 14 }}>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faHandPointRight}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML is the standard markup language for creating Web pages.
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faHandPointRight}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML stands for Hyper Text Markup Language HTML describes the
                  structure of a Web page .
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faHandPointRight}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML stands for Hyper Text Markup Language HTML describes the
                  structure of a Web page .
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faHandPointRight}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML stands for Hyper Text Markup Language HTML describes the
                  structure of a Web page .
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon
                    icon={faHandPointRight}
                    style={{ color: "#02863A" }}
                  />{" "}
                  HTML stands for Hyper Text Markup Language HTML describes the
                  structure of a Web page .
                </li>
              </ul>
            </div>
          )}
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
            <button className="course-details-btn mb-5">
              FREE REGISTRATION
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CourseDetails;
