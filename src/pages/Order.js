import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Order = () => {
  return (
    <>
      <Container>
        <Row>
          <h3 className="text-center my-5">Checkout</h3>
          <Col md={6}>
            <h3>Billing Details</h3>
            <div className="border">
              <Form className="mx-5 mt-3">
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        First Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        // placeholder="Email"
                        className=" order-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        {" "}
                        Last Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        // placeholder="Phone"
                        className=" order-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Company Name (Optional)</Form.Label>
                  <Form.Control
                    // placeholder="Enter your name"
                    className="order-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    Street Address <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    // placeholder="Enter your name"
                    className="order-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    Town/City <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    // placeholder="Enter your name"
                    className="order-input"
                    defaultValue="Dhaka"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Postcode /Zip (Optional)</Form.Label>
                  <Form.Control
                    // placeholder="Enter your name"
                    className="order-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    Phone <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    // placeholder="Enter your name"
                    className="order-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {" "}
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    // placeholder="Enter your name"
                    className="order-input"
                  />
                </Form.Group>
                <Form.Group>
                  <input
                    type="submit"
                    value="SEND"
                    className="submit-btn my-3"
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <h3>Your Orders</h3>
            <div className="border">
              <div className="d-flex justify-content-between border-bottom align-items-center mt-3">
                <p className="ms-3">Product</p>
                <h6 className="fw-bold me-3">Subtotal</h6>
              </div>
              <div className="d-flex justify-content-between border-bottom align-items-center mt-3">
                <p className="fw-bold ms-3">Subtotal</p>
                <h6 className="fw-bold me-3"> ৳ 344444</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <p className="fw-bold ms-3">Total</p>
                <h6 className="fw-bold me-3"> ৳ 344444</h6>
              </div>
              <p className=" mb-3 mx-3">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <button className="submit-btn mb-3 mx-3">Place order</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Order;
