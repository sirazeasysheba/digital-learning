import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div id="registration" className="py-5">
        <div className="form-wrapper px-2">
          <div className="text-center mb-4">
            <h1 className="text-brand-primary mb-2">Let's get started</h1>
            <p className="text-muted">Create a new account</p>
          </div>
          <Form
            noValidate
            //   validated={validated}
            //   onSubmit={handleSubmit}
            className="mx-auto mb-3"
            style={{ maxWidth: 400 }}
            autoComplete="nope"
          >
            <Form.Group className="mb-2" controlId="username">
              <Form.Label className="fw-medium text-brand-primary">
                Username <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                //   onChange={_change}
                name="username"
                type="text"
                placeholder="Your name"
                //   value={registrationInfo.username}
                className="shadow-none"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2" controlId="email">
              <Form.Label className="fw-medium text-brand-primary">
                Email
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                //   onChange={_change}
                name="email"
                type="email"
                placeholder="Enter email"
                className="shadow-none"
                //   value={registrationInfo.email}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2" controlId="phone_number">
              <Form.Label className="fw-medium text-brand-primary">
                Phone Number <span className="text-muted">(Optional)</span>
              </Form.Label>
              <Form.Control
                //   onChange={_change}
                name="phone_number"
                type="tel"
                pattern="[0-9]{11}"
                placeholder="018XXXXXXXX"
                //   value={registrationInfo.phone_number}
                className="shadow-none"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label className="fw-medium text-brand-primary">
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                //   onChange={_change}
                name="password"
                type="password"
                placeholder="Password"
                className="shadow-none"
                //   value={registrationInfo.password}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 bg-brand-primary fw-medium submit-button"
            >
              Sign Up
            </Button>
          </Form>
          <p className="text-muted text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-brand-primary fw-medium signIn-signUp-link"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
