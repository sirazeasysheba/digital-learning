import React from "react";
import CourseInfo from "./CourseInfo";
import graphic from "../../media/GD.jpg";
import dgm from "../../media/dgm.jpg";
import web from "../../media/web.jpg";
import content from "../../media/content.jpg";
import { Row } from "react-bootstrap";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      name: "web-development",
      icon: web,
    },
    {
      id: 2,
      title: "Graphic Design",
      name: "graphic-design",
      icon: graphic,
    },
    {
      id: 3,
      title: "Digital Marketing",
      name: "digital-marketing",
      icon: dgm,
    },
    {
      id: 4,
      title: "Content Writing",
      name: "content-writing",
      icon: content,
    },
  ];
  return (
    <div className="courses mt-5" id="courses">
      <div className="d-flex justify-content-center mb-5 course-head">
        Our Courses
      </div>
      <Row className="mx-3">
        {courses?.map((course) => (
          <CourseInfo course={course} key={course.id}></CourseInfo>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
