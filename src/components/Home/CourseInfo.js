import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseInfo = ({title,icon}) => {
    return (
        <Card className="course-card">
  <Card.Img className="course-img" variant="top" src={icon} />
  <Card.Body>
    <Card.Title className="text-center link"><Link to="/courses">{title}</Link></Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
    );
};

export default CourseInfo;