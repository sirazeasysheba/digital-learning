import React from "react";
import { Row } from "react-bootstrap";
import ashik from "../media/ashik.jpeg";
import siraz from "../media/siraz.jpg";
import samantha from "../media/dur.jpeg";
import MentorDetails from "../components/MentorDetails/MentorDetails";

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Ashikur Rahman",
      title: "Graphic Design",
      img: ashik,
    },
    {
      id: 2,
      name: "Sirazul Islam",
      title: "Web Design",
      img: siraz,
    },
    {
      id: 3,
      name: "Durdana Samantha",
      title: "Digital Marketing",
      img: samantha,
    },
    {
      id: 4,
      name: "Durdana Samantha",
      title: "Content Writing",
      img: samantha,
    },
  ];
  return (
    <>
      <div>
        <div className="d-flex justify-content-center mb-5 mentors">
          Mentors
        </div>
        <Row className="mx-3">
          {mentors?.map((mentor) => (
            <MentorDetails mentor={mentor} key={mentor.id}></MentorDetails>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Mentors;
