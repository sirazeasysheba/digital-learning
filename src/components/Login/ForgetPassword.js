import React from "react";
import { Form, Button } from "react-bootstrap";

const ForgetPassword = () => {
  return (
    <div>
      <div id="forgetPassword" className="py-5">
        <div className="form-wrapper px-2">
          <Form
            noValidate
            //   validated={validated}
            //   onSubmit={handleSubmit}
            className="mx-auto mb-3"
            style={{ maxWidth: 400 }}
          >
            <h1 className="text-brand-primary mb-2">I forgot my password</h1>
            <p className="text-muted">
              Give your email address to reset your password. You’ll receive a
              email with a link. You can use the link to create a new password.
              Be careful not to share this link with others.
            </p>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="fw-medium text-brand-primary">
                Enter your email address
              </Form.Label>
              <Form.Control
                //   onChange={_change}
                type="email"
                placeholder="Email"
                name="email"
                required
                className="mb-3"
                //   value={phoneNumber}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 bg-brand-primary fw-medium submit-button"
              disabled={false}
            >
              Reset Password
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
