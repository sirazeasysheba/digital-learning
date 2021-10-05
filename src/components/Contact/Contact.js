import React from 'react';
import Navigation from'../Navbar/Navigation';
import Footer from'../Footer/Footer';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { faMapMarkerAlt,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
    return (
        <div>
            <Navigation/>
            <div className="contact-container my-5">
            <div className="contact-header text-center my-5">
              <h6 className="fw-bold text-success">CONTACT US</h6>
              <h1>If You Have Any Query,<br/> Drop a Message</h1>
            </div>
             <Container>
             <Row>
                 <Col md={8}>
                 <Form className="me-5" >
                 <Form.Control placeholder="Enter your name" className="mb-3 contact-input" />
             <Row className="mt-3">
               <Col md={6} className="mb-3 mt-3" >
              <Form.Control placeholder="Email"  className="mb-3 contact-input" />
               </Col>
              <Col md={6} className="mb-3 mt-3" >
              <Form.Control placeholder="Phone" className="mb-3 contact-input" />
             </Col>
           </Row>
           <textarea className="form-control contact-text-area" rows="5" id="comment" placeholder="Message"></textarea>
               <input type="submit" value="SEND" className="submit-btn my-3"/>
         </Form>
                 </Col>
                 <Col md={4}>
                    <div className="contact-info border px-5 py-3" >
                    <div className="mb-4">
                        <h5 className="mb-2">  <FontAwesomeIcon icon={faMapMarkerAlt} style={{color:'#0eb582'}}/> Location</h5>
                <p style={{fontSize:12}}>Assure M N Tower, Flat B1, House H/1, North South Road, Block H, Dhaka 1212 
                  </p>
                 
                    </div>
                    <div className="mb-4">
                        <h5 className="mb-2">  <FontAwesomeIcon icon={faPhone} className="fa-rotate-90" style={{fontSize:16, color:'#0eb582'}}/> Hotline Numbers</h5>
                   <div style={{lineHeight:0.5}}>
                   <p style={{fontSize:12}}>+8801966-050506</p>
                    <p style={{fontSize:12}}>+8801966-050506</p>
                   </div>
                    </div>
                    <div className="mb-4">
                        <h5 className="mb-2">  <FontAwesomeIcon icon={faEnvelope} style={{fontSize:16,marginRight:5,color:'#0eb582'}}/>Email</h5>
                  <div style={{lineHeight:0.5}}>
                  <p style={{fontSize:12}}>info@easysheba.com</p>
                 <p style={{fontSize:12}}>info@easysheba.com</p>
                      </div>
                    </div>
                    </div>
                 </Col>
             </Row>
             </Container>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;