import React from "react";
import logo from "../../media/logo.svg";
const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Digital Learning" style={{ width: 120 }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a
                  className="nav-link ms-2"
                  style={{ marginTop: "8px" }}
                  href="/"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <button className="dropbtn">ABOUT</button>
                <div className="dropdown-content">
                  <a href="/advisors-and-management">ADVISORS & MANAGEMENT</a>
                  <a href="/mentors">MENTORS</a>
                  <a href="/gallery">GALLERY</a>
                  <a href="/news-and-events">NEWS & EVENTS</a>
                  <a href="/success-stories">SUCCESS STORIES</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <button className="dropbtn">COURSES</button>
                <div className="dropdown-content">
                  <a href="/courses/web-development">WEB DEVELOPMENT</a>
                  <a href="/courses/graphic-design">GRAPHIC DESIGN</a>
                  <a href="/courses/digital-marketing">DIGITAL MARKETING</a>
                  <a href="/courses/content-writing">CONTENT WRITING</a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link ms-2 "
                  style={{ marginTop: "8px" }}
                  href="#review"
                >
                  WORKSHOPS
                </a>
              </li>
              <li className="nav-item dropdown">
                <button className="dropbtn">PROJECTS</button>
                <div className="dropdown-content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 2</a>
                  <a href="/">Link 3</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <button className="dropbtn">DIGITAL SERVICES</button>
                <div className="dropdown-content">
                  <a href="/">WEB DESIGN & DEVELOPMENT</a>
                  <a href="/">DIGITAL MARKETING & BRANDING</a>
                  <a href="/">DESIGN & CREATIVE</a>
                </div>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link ms-2 "
                  style={{ marginTop: "8px" }}
                  href="/contact"
                >
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link ms-2 "
                  style={{ marginTop: "8px" }}
                  href="/login"
                >
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
