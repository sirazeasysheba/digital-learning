import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navigation from "../Navbar/Navigation";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { faSearch, faTh } from "@fortawesome/free-solid-svg-icons";
const HomeMain = () => {
  return (
    <div className="home-container d-flex align-items-center">
      <div className="ms-5">
        <h1 className="mb-3">
          Learn A Skill <br />
          The World is yours
        </h1>
        <h2 className="mb-3">Where dreamers become a doers and earners</h2>
        <button className="home-btn me-3">FREE REGISTRATION</button>
        <button className="home-btn">VIEW COURSES</button>
        <Form className="flex-grow-1 d-flex justify-content-center h-100 w-50 mt-3 ms-3 search-form">
          <Form.Control
            id="search"
            name="search"
            placeholder="Search courses"
            className="flex-grow-1 shadow-none border-0 rounded-0 bg-transparent"
          />
          <div style={{ marginTop: "5px" }}>
            <Button
              type="submit"
              className="shadow-none rounded-0 rounded-end bg-transparent text-white border-0 d-flex align-items-center justify-content-center items_on-hover"
            >
              <FontAwesomeIcon icon={faSearch} style={{ color: "black" }} />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default HomeMain;
