import React from "react";

import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../media/GD.jpg";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <div className="cart">
        <h1 className="mt-5 text-center">Cart </h1>
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
                <div className="d-flex justify-content-around my-3 align-items-center border-bottom pb-3">
                  <Form className="d-flex">
                    <Form.Group className="mb-3 me-2" controlId="form">
                      <Form.Control type="text" placeholder="Enter coupon" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form">
                      <Button type="submit" className="submit-button">
                        Apply Coupon
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Col>
            <Col md={4} className=" mt-1">
              <h3 className="fw-medium">Cart Total</h3>
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
              <Link to="/order">
                {" "}
                <button className="submit-btn mt-2">Proceed Order</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cart;
