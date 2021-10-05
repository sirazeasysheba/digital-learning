import React from "react";

import { Link } from "react-router-dom";
import { Button, Dropdown, Form } from "react-bootstrap";
 const Navigation=()=>{
   return(
     <>
     <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EasySheba</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link ms-2" style={{marginTop:'8px'}} href="/">
          HOME
        </a>
      </li>
      <li className="nav-item dropdown">
		 
  <button className="dropbtn">ABOUT</button>
  <div className="dropdown-content">
  <a href="#">HISTORY</a>
    <a href="#">FOUNDERS</a>
    <a href="#">ADVISORS & MANAGEMENT</a>
    <a href="#">MENTORS</a>
    <a href="#">GALLERY</a>
    <a href="#">NEWS & EVENTS</a>
    <a href="#">SUCCESS STORIES</a>
    <a href="#">PAYMENT METHOD</a>
</div>

      </li>
      <li className="nav-item dropdown">
		 
     <button className="dropbtn">COURSES</button>
     <div className="dropdown-content">
       <a href="#">WEB DEVELOPMENT</a>
       <a href="#">GRAPHIC DESIGN</a>
       <a href="#">DIGITAL MARKETING</a>
       <a href="#">CONTENT WRITING</a>
   </div>
   
         </li>
      <li className="nav-item">
        <a className="nav-link ms-2 " style={{marginTop:'8px'}} href="#review">
          WORKSHOPS
        </a>
      </li>
      <li className="nav-item dropdown">
		 
  <button className="dropbtn">PROJECTS</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
</div>

      </li>
      <li className="nav-item dropdown">
		 
  <button className="dropbtn">DIGITAL SERVICES</button>
  <div className="dropdown-content">
    <a href="#">WEB DESIGN & DEVELOPMENT</a>
    <a href="#">DIGITAL MARKETING & BRANDING</a>
    <a href="#">DESIGN & CREATIVE</a>
</div>

      </li>
      <li className="nav-item ">
        <a className="nav-link ms-2 " style={{marginTop:'8px'}} href="/contact">
       CONTACT
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link ms-2 " style={{marginTop:'8px'}} href="/login">
         LOGIN
        </a>
      </li>
    </ul>
      
    </div>
  </div>
</nav>
</>
   );
 }
 export default Navigation; 