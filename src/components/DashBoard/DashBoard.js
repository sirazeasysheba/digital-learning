import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import profile from "../../media/dummy-profile-pic.jpg";
import {
  faUser,
  faChalkboardTeacher,
  faFileInvoice,
  faHandSpock,
  faBan,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
const DashBoard = () => {
  return (
    <div
      className=" container-fluid row"
      style={{ height: "100%", backgroundColor: "#F4FDFB" }}
    >
      <div className="col-md-2 sidebar-container">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 mt-3">
        <Container>
          <div className="dashboard-header d-flex justify-content-between">
            <FontAwesomeIcon icon={faHandSpock} />
            <div className="d-flex justify-content-between align-items-center me-5">
              <div className="profile me-2 mt-2 pb-3">
                <img src={profile} alt="" />
              </div>
              <h6 className="text-white">Hi,Admin</h6>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    caret
                    className="dashboard-btn"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu right>
                    <Dropdown.Item
                      style={{ fontSize: 12, fontWeight: 700 }}
                      disabled
                    >
                      Logged in
                    </Dropdown.Item>
                    <Dropdown.Item style={{ fontSize: 12, fontWeight: 700 }}>
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item style={{ fontSize: 12, fontWeight: 700 }}>
                      Setting
                    </Dropdown.Item>
                    <Dropdown.Item style={{ fontSize: 12, fontWeight: 700 }}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <h3>DashBoard</h3>
          <Row className="gx-5 mb-5">
            <Col md={4}>
              <div className="shadow d-flex align-items-center mb-3">
                <div
                  className="icon-container m-2 d-flex justify-content-center align-items-center"
                  style={{ background: "#47c363" }}
                >
                  <FontAwesomeIcon icon={faUser} className="dashboard-icon" />
                </div>
                <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                  <p className="text-muted">Total Admin</p>
                  <p className="fw-bold text-center">10</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="shadow d-flex align-items-center mb-3">
                <div
                  className="icon-container m-2 d-flex justify-content-center align-items-center"
                  style={{ background: "#191d21" }}
                >
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="dashboard-icon"
                  />
                </div>
                <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                  <p className="text-muted">Total Instructor</p>
                  <p className="fw-bold text-center">10</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="shadow d-flex align-items-center mb-3">
                <div
                  className="icon-container m-2 d-flex justify-content-center align-items-center"
                  style={{ background: "#ffa426" }}
                >
                  <FontAwesomeIcon icon={faUser} className="dashboard-icon" />
                </div>
                <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                  <p className=" text-muted">Total Students</p>
                  <p className="fw-bold text-center">10</p>
                </div>
              </div>
            </Col>
          </Row>
          <h3>Charts</h3>

          <h3>Courses</h3>
          <Row className="gx-5 mb-5">
            <Col md={3}>
              <div className="shadow d-flex align-items-center mb-3">
                <div
                  className="icon-container m-2 d-flex justify-content-center align-items-center"
                  style={{ background: "#47c363" }}
                >
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    className="dashboard-icon"
                  />
                </div>
                <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                  <p className="text-muted">Courses</p>
                  <p className="fw-bold text-center">10</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="shadow d-flex align-items-center mb-3">
                <div
                  className="icon-container m-2 d-flex justify-content-center align-items-center"
                  style={{ background: "#ffa426" }}
                >
                  <FontAwesomeIcon
                    icon={faHandSpock}
                    className="dashboard-icon"
                  />
                </div>
                <div className="ms-4 mt-1" style={{ lineHeight: 1 }}>
                  <p className="text-muted" style={{ fontSize: 12 }}>
                    Waiting for approval
                  </p>
                  <p className="fw-bold ms-3">10</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="shadow d-flex align-items-center mb-3">
                <div
                  className="icon-container m-2 d-flex justify-content-center align-items-center"
                  style={{ background: " #191d21" }}
                >
                  <FontAwesomeIcon icon={faBan} className="dashboard-icon" />
                </div>
                <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                  <p className=" text-muted">Block</p>
                  <p className="fw-bold text-center">10</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="shadow d-flex align-items-center mb-3">
                <div
                  className="icon-container m-2 d-flex justify-content-center align-items-center"
                  style={{ background: "#ee524f" }}
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="dashboard-icon"
                  />
                </div>
                <div className="ms-4 mt-2" style={{ lineHeight: 0.5 }}>
                  <p className=" text-muted">Rejected</p>
                  <p className="fw-bold text-center">10</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DashBoard;
