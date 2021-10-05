import React from 'react';
import { Col, Row } from 'react-bootstrap';
import gd from '../../media/GD.jpg';
import { faClock, faFileInvoice , faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import { faAlgolia } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CourseDetails = () => {
    return (
            <Row className="ms-4 mt-5">
             <Col md={4}>
                 <div className="left-container d-flex justify-content-center shadow" style={{fontSize:14}}>
                     <div> 
                     <img src={gd} alt="Graphic Design" className="image-fluid " style={{width:'300px' }}/>
                    <div className="d-flex justify-content-between mt-3" style={{borderBottom:'1px solid rgba(128,128,128,0.3)'}}> 
                        <div className="d-flex">
                        <FontAwesomeIcon icon ={faClock} className="course-details-icon"/>
                        <p>Duration </p>
                         </div>
                        <p>96 Hours </p>
                    </div>
                    <div className="d-flex justify-content-between mt-3" style={{borderBottom:'1px solid rgba(128,128,128,0.3)'}}> 
                        <div className="d-flex">
                        <FontAwesomeIcon icon ={faFileInvoice} className="course-details-icon"/>
                        <p>Lectures </p>
                         </div>
                        <div style={{lineHeight:1}}>
                        <p>32 (Regular) </p>
                        <p>24 (Weekend) </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3"> 
                        <div className="d-flex">
                        <FontAwesomeIcon icon ={faAlgolia} className="course-details-icon"/>
                        <p>Skill Level </p>
                         </div>
                        <p>Beginner </p>
                    </div>
                     
                     </div>
                 </div>
                  <div className="course-details-btn-container d-flex justify-content-center">
                  <div>
                  <button className="course-details-btn d-block mb-2">BUY THIS COURSE <FontAwesomeIcon icon ={faLongArrowAltRight} className="ms-2"/></button> 
                  <button className="course-details-btn mb-5">FREE REGISTRATION</button>
                  </div>
                  </div>
             </Col>
             <Col md={8}>
                 <div className="right-container me-5">
                    <div  className="d-flex justify-content-around me-3 mb-3">
                     <h1 className="fw-bold">Graphic Design</h1>
                     <h5>৳ 2200</h5>
                    </div>
                    <p> In this course, you will learn how to apply concepts from 
                        interaction design and human-computer interaction in order to design 
                        and build an interactive, professional-looking website. 
                        You will learn how to make your web page designs adapt to different screen 
                        sizes using responsive grid layouts. You will learn how to add navigation 
                        and other design elements, and you will learn how to separate data and display
                        using JavaScript objects and templates. You’ll also learn about jQuery plugins 
                        and basic Word Press Theme Customization.
                    </p>
                     <Row className="active-btn-section">
                     <Col md={4} className="p-0">
                     <button className="active-toggle-btn">Overview</button>
                     </Col>
                     <Col md={4} className="p-0">
                     <button className="active-toggle-btn">Curriculum</button>
                     </Col>
                     <Col md={4} className="p-0">
                     <button className="active-toggle-btn">Course Objective</button>
                     </Col>
                    </Row>
                 </div>

             </Col>
            </Row>
    );
};

export default CourseDetails;