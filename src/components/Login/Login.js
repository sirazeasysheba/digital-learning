import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation, Redirect } from "react-router-dom";
import { isUserLoggedIn, login } from "../../redux/actions";
import * as yup from "yup";
import { useFormik } from "formik";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const [error, setError] = useState("");
  const _change = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/dashboard" } };
  const auth = useSelector((state) => state.auth);

  const userLogin = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(login(user));
    history.replace(from);
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: userLogin,
      initialValues,
      validationSchema: formSchema,
    });

  if (auth.authenticate) {
    return <Redirect to={`/dashboard`} />;
  }

  return (
    <>
      <div className="login section">
        <div id="login" className="py-5">
          <div className="form-wrapper px-2">
            <div className="text-center mb-4">
              <h1 className="text-brand-primary mb-2">Login to continue</h1>
            </div>
            {/* {error && <p>{error}</p>} */}
            <Form
              noValidate
              //   validated={validated}
              //   onSubmit={handleSubmit}
              className="mx-auto mb-3"
              style={{ maxWidth: 400 }}
              onSubmit={userLogin}
            >
              <Form.Group className="mb-2" controlId="phoneNumber">
                <Form.Label className="fw-medium text-brand-primary">
                  Email<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  // pattern="[0-9]{11}"
                  placeholder="axxx@xyz.com"
                  value={values.email}
                  className="shadow-none"
                  onChange={_change}
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
                  value={user.password}
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
const initialValues = {
  phone_number: "",
  password: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = yup.object().shape({
  phone_number: yup
    .string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(11, "to short")
    .max(14, "to long"),
  password: yup.string().required("${path} is required"),
});
export default Login;
