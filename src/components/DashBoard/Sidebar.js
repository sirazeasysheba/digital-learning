import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
        <ul className="list-unstyled">
          <li>
            <Link to="/" className="text-white text-decoration-none">
              <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white text-decoration-none">
              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
            </Link>
          </li>

          <div>
            <li>
              <Link
                to="/all-courses"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faCalendar} /> <span>Courses</span>
              </Link>
            </li>
            <li>
              <Link to="/patients" className="text-white text-decoration-none">
                <FontAwesomeIcon icon={faUsers} /> <span>Students</span>
              </Link>
            </li>
            <li>
              <Link
                to="/all-appointments"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faCalendar} /> <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="/prescriptions"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faUserPlus} />{" "}
                <span>Add Instructor</span>
              </Link>
            </li>
            <li>
              <Link
                to="/add-doctor"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Course</span>
              </Link>
            </li>
          </div>
          <li>
            <Link
              to="/doctor/setting"
              className="text-white text-decoration-none"
            >
              <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/login" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
