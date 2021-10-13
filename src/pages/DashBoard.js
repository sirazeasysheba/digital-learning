import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../media/GD.jpg";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const auth = useSelector((state) => state.auth);
  const { name, username, email, contactNumber } = auth.user;

  return (
    <div>
      <div className="d-flex justify-content-center my-5 mentors">
        Student DashBoard
      </div>
      <div className="d-flex justify-content-center">
        <div className="border p-5">
          <p>Name: {name}</p>
          <p>Username:{username} </p>
          <p>Email:{email} </p>
          <p>Phone: {contactNumber}</p>
        </div>
      </div>

      <div className="cart">
        <Container>
          <Row>
            <Col md={8} className="mt-5">
              <div className="mx-3 border border-bottom-0 ">
                <div className="d-flex justify-content-around my-3 align-items-center border-bottom pb-3">
                  <img
                    src={img}
                    alt=""
                    className="image-fluid"
                    style={{ height: 80 }}
                  />
                  <p>Responsive Web Design</p>
                  <p> ৳2000</p>
                  <p>1</p>
                  <p> ৳2200</p>
                  <FontAwesomeIcon icon={faTimes} className="mb-3" />
                </div>
                <div className="d-flex justify-content-around my-3 align-items-center border-bottom pb-3">
                  <img
                    src={img}
                    alt=""
                    className="image-fluid"
                    style={{ height: 80 }}
                  />
                  <p>Responsive Web Design</p>
                  <p> ৳2000</p>
                  <p>1</p>
                  <p> ৳2200</p>
                  <FontAwesomeIcon icon={faTimes} className="mb-3" />
                </div>
              </div>
            </Col>
            <Col md={4} className=" mt-1">
              <h3 className="fw-medium">Total</h3>
              <div className=" mt-1 border p-5">
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ borderBottom: "1px solid grey" }}
                >
                  <p>Subtotal</p>
                  <h4> 20000 ৳</h4>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <p>Total</p>
                  <h4> 20000 ৳</h4>
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
