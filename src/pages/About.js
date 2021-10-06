import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navbar/Navigation";
import about from "../media/about.jpg";
const About = () => {
  return (
    <>
      <Navigation />
      <Container>
        <h1 className="text-center my-5">About Digital Learning</h1>
        <div className="d-flex justify-content-center mb-5">
          <img
            src={about}
            alt=""
            className="image-fluid"
            style={{ maxWidth: 800 }}
          />
        </div>
        <h4 className="mb-3 fw-bold">
          Global Skills Development and Digital Service Providing Institute
        </h4>
        <p>
          Digital Learning is a purpose-driven, global skill development
          organization. It was created with a desire to make a tangible
          difference in the lives of the underprivileged, disadvantaged, and
          underserved population as a whole. The youth, especially the female
          community, who struggle to find a comfortable living, is our prime
          concern. The vision of Digital Learning is to provide technical and
          soft-skill education for students/trainees in the Global South and
          emerging markets. We believe, if we facilitate the right tools for
          teaching skills that would likely be out of their reach, they will
          have an opportunity and a real chance to join the global workforce.
          Our focus is primarily on an IT-based training platform. However, our
          course fees are very reasonable. We also offer scholarship courses for
          those who are not financially sound. We successfully worked with
          DANIDA, UNDP, World Bank, WFP, Dutch Foundation, Swanirvar Bangladesh,
          BRAC, CARE Bangladesh, Ministry Of ICT Bangladesh, Ministry of
          Expatriates’ Welfare and Overseas Employment and PKSF. Our recognition
          comes from the ICT Division of Bangladesh, National Skill Development
          Authority (NSDA), BASIS, and BITAC for our successful training and
          mentorship.
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default About;
