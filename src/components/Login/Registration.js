import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { signup } from "../../redux/actions";
const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    contactNumber: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const _change = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/dashboard" } };
  const student = useSelector((state) => state.user);
  const errors = student.error;
  console.log(error);
  const dispatch = useDispatch();
  const userSignup = (e) => {
    e.preventDefault();
    dispatch(signup(user));
  };
  if (student.authenticate) {
    return <Redirect to={`/dashboard`} />;
  }
  // if (student.loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <div id="registration" className="py-5">
        {student.message ? (
          <div>
            <p className="text-success text-center">{student.message}</p>
            <div className="text-muted text-center">
              <p> Back to </p>

              <Link
                to="/login"
                className="text-brand-primary fw-medium signIn-signUp-link text-center"
              >
                Login
              </Link>
            </div>
          </div>
        ) : (
          <div className="form-wrapper px-2">
            <div className="text-center mb-4">
              <h1 className="text-brand-primary mb-2">Let's get started</h1>
              <p className="text-muted">Create a new account</p>
            </div>
            <Form
              noValidate
              className="mx-auto mb-3"
              style={{ maxWidth: 400 }}
              autoComplete="nope"
              onSubmit={userSignup}
            >
              <Form.Group className="mb-2" controlId="username">
                <Form.Label className="fw-medium text-brand-primary">
                  Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  onChange={_change}
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={user.name}
                  className="shadow-none"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-2" controlId="username">
                <Form.Label className="fw-medium text-brand-primary">
                  Username <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  onChange={_change}
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={user.username}
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
                  onChange={_change}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="shadow-none"
                  value={user.email}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-2" controlId="phone_number">
                <Form.Label className="fw-medium text-brand-primary">
                  Phone Number <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  onChange={_change}
                  name="contactNumber"
                  type="text"
                  pattern="[0-9]{11}"
                  placeholder="018XXXXXXXX"
                  value={user.contactNumber}
                  className="shadow-none"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="password">
                <Form.Label className="fw-medium text-brand-primary">
                  Password <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  onChange={_change}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="shadow-none"
                  value={user.password}
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
            <div className="text-muted text-center">
              <p></p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-brand-primary fw-medium signIn-signUp-link"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Registration;
