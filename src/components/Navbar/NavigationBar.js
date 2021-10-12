import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../media/logo.svg";
import {
  faPhone,
  faEnvelope,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navigation = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const [show1, setShow1] = useState(false);
  const showDropdown1 = (e) => {
    setShow1(!show);
  };
  const hideDropdown1 = (e) => {
    setShow1(false);
  };
  const [show2, setShow2] = useState(false);
  const showDropdown2 = (e) => {
    setShow2(!show);
  };
  const hideDropdown2 = (e) => {
    setShow2(false);
  };
  const [show3, setShow3] = useState(false);
  const showDropdown3 = (e) => {
    setShow3(!show);
  };
  const hideDropdown3 = (e) => {
    setShow3(false);
  };

  return (
    <>
      <div className="nav-header text-white d-flex justify-content-between align-items-center ">
        <div className="d-flex mt-3 mx-3">
          <FontAwesomeIcon
            icon={faPhone}
            className="fa-rotate-90 mt-1 nav-icons"
          />
          <p className="ms-1 me-2">+8801966-050506 </p>
          <p className="me-5 nav-phone">+8801966-050506</p>
          <FontAwesomeIcon icon={faEnvelope} className="mt-1" />
          <p className="mx-2 mail">info@easysheba.com </p>
        </div>
        <div className="d-flex mt-3 mx-3">
          <FontAwesomeIcon icon={faUserAlt} className="me-2 nav-icons" />
          <p>Login/Register</p>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Link to="/" className="navbar-brand ms-5">
          {" "}
          <img src={logo} alt="Digital Learning" style={{ width: 120 }} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <li>
              <NavDropdown
                title="ABOUT"
                id="collasible-nav-dropdown"
                show={show3}
                onMouseEnter={showDropdown3}
                onMouseLeave={hideDropdown3}
                className="drop"
              >
                <NavDropdown.Item>
                  {" "}
                  <Link
                    to="/advisors-and-management"
                    className="dropdown-content "
                  >
                    {" "}
                    ADVISORS & MANAGEMENT
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mentors" className="dropdown-content ">
                    {" "}
                    MENTORS
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/gallery" className="dropdown-content ">
                    {" "}
                    GALLERY
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/news-and-events" className="dropdown-content ">
                    {" "}
                    NEWS & EVENTS
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/success-stories" className="dropdown-content ">
                    {" "}
                    SUCCESS STORIES
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown
                title="COURSES"
                id="collasible-nav-dropdown"
                show={show2}
                onMouseEnter={showDropdown2}
                onMouseLeave={hideDropdown2}
                className="drop"
              >
                <NavDropdown.Item>
                  {" "}
                  <Link
                    to="/courses/web-development"
                    className="dropdown-content "
                  >
                    {" "}
                    WEB DEVELOPMENT
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/courses/graphic-design"
                    className="dropdown-content "
                  >
                    {" "}
                    GRAPHIC DESIGN
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/courses/digital-marketing"
                    className="dropdown-content "
                  >
                    {" "}
                    DIGITAL MARKETING
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/courses/content-writing"
                    className="dropdown-content "
                  >
                    {" "}
                    CONTENT WRITING
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <NavLink to="/workshops" className="nav-link">
                WORKSHOPS
              </NavLink>
            </li>
            <li>
              <NavDropdown
                title="PROJECTS"
                id="collasible-nav-dropdown"
                show={show1}
                onMouseEnter={showDropdown1}
                onMouseLeave={hideDropdown1}
                className="drop"
              >
                <NavDropdown.Item>
                  {" "}
                  <Link to="/" className="dropdown-content ">
                    {" "}
                    Link 1
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/" className="dropdown-content ">
                    {" "}
                    Link 2
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/" className="dropdown-content ">
                    {" "}
                    Link 3
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown
                title="DIGITAL SERVICES"
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className="drop"
              >
                <NavDropdown.Item>
                  {" "}
                  <Link
                    to="/services/web-development"
                    className="dropdown-content "
                  >
                    {" "}
                    WEB DESIGN & DEVELOPMENT
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/services/digital-marketing"
                    className="dropdown-content "
                  >
                    {" "}
                    DIGITAL MARKETING & BRANDING
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/services/design" className="dropdown-content ">
                    {" "}
                    DESIGN & CREATIVE
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to="/login" className="nav-link">
                LOGIN
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
