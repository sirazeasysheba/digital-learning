import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import madam from "../media/ma'am.jpeg";
import sir from "../media/sir.jpeg";
const Advisors = () => {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center my-5 mentors">
          Advisors and Management
        </div>

        <div className="d-flex justify-content-center">
          <div>
            <img
              src={madam}
              alt=""
              style={{ height: 300, width: 300 }}
              className="image-fluid"
            />
            <p className="text-center mt-3">Afsana Jahan Nipa</p>
            <h6 className="text-center fw-bold">Chairman</h6>
          </div>
        </div>
        <div
          style={{
            margin: "100px 200px",
            borderBottom: "1px solid rgba(226, 164, 164, 0.3)",
          }}
        ></div>
        <div className="d-flex justify-content-center">
          <div>
            <img
              src={sir}
              alt=""
              style={{ height: 300, width: 300 }}
              className="image-fluid"
            />
            <p className="text-center mt-3">H. M. Arifur Rahman</p>
            <h6 className="text-center fw-bold">Managing Director</h6>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Advisors;
