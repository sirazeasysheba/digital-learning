import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../media/logo.svg";
import {
  faPhone,
  faEnvelope,
  faUserAlt,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signOut } from "../../redux/actions";
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
  const token = window.localStorage.getItem("token");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(signOut());
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
        {token ? (
          <div className="d-flex mt-3 mx-3">
            <FontAwesomeIcon icon={faUserAlt} className="me-2 mt-2" />
            <Dropdown>
              <Dropdown.Toggle className="navbar-menu-button mb-2">
                {" "}
                {auth.user.name}{" "}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  style={{ fontSize: 12, fontWeight: 700 }}
                  disabled
                >
                  Logged in
                </Dropdown.Item>
                <Dropdown.Item style={{ fontSize: 12, fontWeight: 700 }}>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      fontSize: 12,
                      marginRight: 10,
                    }}
                    className="mt-2 text-muted"
                  />{" "}
                  <Link to="/profile" className="topbar-link">
                    Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item style={{ fontSize: 12, fontWeight: 700 }}>
                  <FontAwesomeIcon
                    icon={faCog}
                    style={{
                      fontSize: 12,
                      marginRight: 10,
                    }}
                    className="mt-2 text-dark"
                  />{" "}
                  <Link to="/admin/setting" className="topbar-link">
                    Setting
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ fontSize: 12, fontWeight: 700 }}
                  onClick={logout}
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={{
                      fontSize: 12,
                      marginRight: 10,
                    }}
                    className="mt-2 text-danger"
                  />{" "}
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <div className="d-flex mt-3 mx-3">
            <FontAwesomeIcon icon={faUserAlt} className="me-2" />
            <Link to="/login" className="text-decoration-none text-white">
              {" "}
              <p>Login/Register</p>
            </Link>
          </div>
        )}
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
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
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
              {!token && (
                <NavLink to="/login" className="nav-link">
                  LOGIN
                </NavLink>
              )}
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
