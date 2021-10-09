import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login section">
        <div id="login" className="py-5">
          <div className="form-wrapper px-2">
            <div className="text-center mb-4">
              <h1 className="text-brand-primary mb-2">Login to continue</h1>
            </div>
            <Form
              noValidate
              //   validated={validated}
              //   onSubmit={handleSubmit}
              className="mx-auto mb-3"
              style={{ maxWidth: 400 }}
            >
              <Form.Group className="mb-2" controlId="phoneNumber">
                <Form.Label className="fw-medium text-brand-primary">
                  Email or Username <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  //   onChange={_change}
                  name="email"
                  type="text"
                  pattern="[0-9]{11}"
                  placeholder="axxx@xyz.com"
                  //   value={loginInfo.phone_number}
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
                  //   value={loginInfo.password}
                  className="shadow-none"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="password">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  for="flexCheckIndeterminate"
                >
                  Remember me?
                </label>
              </Form.Group>
              <Button type="submit" className="w-100 fw-medium submit-button ">
                Login
              </Button>
            </Form>
            <p className="text-center">
              {" "}
              <Link
                to="/forget-password"
                className="text-brand-primary fw-medium signIn-signUp-link text-danger"
              >
                Forget Password?
              </Link>
            </p>
            <p className="text-muted text-center">
              Don’t have an account?{" "}
              <Link
                to="/registration"
                className="text-brand-primary fw-medium signIn-signUp-link"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
