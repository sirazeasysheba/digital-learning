import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseInfo from './CourseInfo';
import graphic from '../../media/GD.jpg';
import dgm from '../../media/dgm.jpg';
import web from '../../media/web.jpg';
import content from '../../media/content.jpg';
import { Link } from 'react-router-dom';
const Courses = () => {
    return (
        <div className="courses mt-5">
            <h1 className="text-center mb-5 course-head">Courses</h1>
            <Row className="mx-3">
            <Col md={3}>
             <CourseInfo title={'Web Development'} icon={web}/>
                </Col>
                <Col md={3}>
                <CourseInfo title={'Graphic Design'} icon={graphic}/>
            </Col>
             <Col md={3} > <CourseInfo title={'Digital Marketing'} icon={dgm}/></Col>
             <Col md={3} ><CourseInfo title={'Content Writing'}icon={content} /> </Col>
            </Row>
        </div>
    );
};

export default Courses;