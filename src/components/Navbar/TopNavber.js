import React from 'react';
import { faPhone,faEnvelope,faUserAlt,faSearch, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopNavber = () => {
    return (
        <div className="nav-header text-white d-flex justify-content-between align-items-center ">
      <div className="d-flex mt-3 mx-3">
     <FontAwesomeIcon icon={faPhone} className="fa-rotate-90 mt-1 nav-icons"/>
      <p className="ms-1 me-2" >+8801966-050506 </p>
      <p className="me-5">+8801966-050506</p>
      <FontAwesomeIcon icon={faEnvelope} className="mt-1"/>
      <p className="mx-2">info@easysheba.com </p>
      </div>
      <div className="d-flex mt-3 mx-3" >
      <FontAwesomeIcon icon={faUserAlt} className="me-2 nav-icons" />
      <p>Login/Register</p>
      </div>
  </div>
    );
};

export default TopNavber;