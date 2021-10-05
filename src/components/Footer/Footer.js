import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="footer mt-5 mb-1">
      <Row className="me-2">
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h4 className="footer-title text-white"> Digital Learning.xyz </h4>
            <p className="text-white text-center">
              Connect With Our Social Media
            </p>
            <div className="social-media">
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="social-icons text-center  mx-2 facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li className="social-icons text-center mx-2 youtube">
                  <FontAwesomeIcon icon={faYoutube} />
                </li>
                <li className="social-icons text-center mx-2 twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="social-icons text-center  mx-2 pinerest">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={2} className="footerOnFocus">
          <h6 className="text-white mb-4 mt-5">QUICK LINKS</h6>
          <li className="d-block mb0 "></li>
          <a href="#" className="d-block  mb-2 mt-1">
            History
          </a>
          <a href="#" className="d-block  mb-2">
            Gallery
          </a>
          <a href="#" className="d-block  mb-2">
            All Courses
          </a>
          <a href="#" className="d-block  mb-2">
            Success Story
          </a>
          <a href="#" className="d-block  mb-2">
            Contact Us
          </a>
        </Col>
        <Col md={2} className="footerOnFocus">
          <h6 className="text-white mb-4 mt-5">COURSES</h6>
          <li className="d-block mb0 "></li>
          <a href="#" className="d-block  mb-2 mt-1">
            Responsive Web Design
          </a>
          <a href="#" className="d-block  mb-2">
            Graphic Design
          </a>
          <a href="#" className="d-block  mb-2">
            Digital Marketing
          </a>
          <a href="#" className="d-block mb-2">
            Content Writing
          </a>
        </Col>
        <Col md={4} className="mt-5 mb-2">
          <div className="address">
            <h6 className="text-white mb-4">CONTACT US</h6>
            <div className="d-flex mb-2">
              <div className="address-icon text-center me-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ marginTop: 10 }}
                />
              </div>
              <div style={{ lineHeight: 0.5 }}>
                <p>Assure M N Tower, Flat B1, House H/1,</p>
                <p> North South Road, Block H, Dhaka 1212</p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <div className="address-icon text-center me-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ fontSize: 14, marginTop: 10 }}
                  className="fa-rotate-90"
                />
              </div>
              <div style={{ lineHeight: 0.5 }}>
                <p>+8801966-050506</p>
                <p>+8801966-050506</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="address-icon text-center me-2">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginTop: 10 }} />
              </div>
              <p>info@easysheba.com</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
