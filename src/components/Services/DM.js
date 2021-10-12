import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import strategy from "../../media/strategy.jpg";
import creative from "../../media/creative-service.jpg";
import seo from "../../media/SEO-Analysis.jpg";
import qa from "../../media/form-iamge-cont.jpg";
import promotion from "../../media/promotion.jpg";
import data from "../../media/data-analysis.jpg";
const DM = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-5 mentors">
        Digital Marketing & Branding
      </div>
      <Container>
        <p className="text-center">
          We provide services with an innovative bent that transforms ideas into
          glorious realities. At CodersTrust Digital Services, we work with our
          clients to realize the inherent potential of social media marketing.
          We help them see the bigger picture and discover more ways to connect
          with customers through digital media platforms. We can help you
          establish your brand goals and bring our expertise in Web,
          Advertising, and Technology to bear.
        </p>
        <div
          className="d-flex justify-content-center mt-5 mentors"
          style={{ fontSize: 24, marginBottom: 120 }}
        >
          Our Major Services
        </div>
        <Row>
          <Col md={6} className="mb-3">
            <img src={strategy} alt="" style={{ width: "80%" }} />
          </Col>
          <Col md={6} className="mb-3">
            <h2 className="fw-bold service-underline mb-5">
              Strategy + Consulting
            </h2>
            <p>
              New avenues, buzzwords, and business opportunities are all
              possible. We can help you better plan your marketing and create a
              brand roadmap to guide you through the digital landscape.
            </p>
            <div className="common-page">
              <ul className="list-unstyled">
                <li>Digital Brand Building & Communication Strategy</li>
                <li>Social Media Strategy</li>
                <li>Content and Engagement Strategy</li>
              </ul>
            </div>
          </Col>
        </Row>
        <div
          style={{
            margin: "100px 200px",
            borderBottom: "1px solid rgba(226, 164, 164, 0.3)",
          }}
        ></div>
        <Row>
          <Col md={6} className="mb-3">
            <h2 className="fw-bold service-underline mb-5">
              Creative Services
            </h2>
            <p>
              It takes more than just thumb-stopping content. It requires a
              mixture of unfiltered expression as well as social engineering,
              which we have plenty of
            </p>
            <div className="common-page">
              <ul className="list-unstyled">
                <li>Campaign Conceptualization & Design</li>
                <li>Digital Content (Static, Audio, Dynamic, Video)</li>
                <li>Integrated Campaigns</li>
                <li>Experience Design</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <img src={creative} alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
        <div
          style={{
            margin: "100px 200px",
            borderBottom: "1px solid rgba(226, 164, 164, 0.3)",
          }}
        ></div>
        <Row>
          <Col md={6} className="mb-3">
            <img src={seo} alt="" style={{ width: "100%" }} />
          </Col>
          <Col md={6} className="mb-3">
            <h2 className="fw-bold service-underline mb-5">
              Execution and Management
            </h2>
            <p>
              The plans and stratagems seem to be viable in theory. Its
              application across all platforms is the real test, which is
              something we are very familiar with –
            </p>
            <div className="common-page">
              <ul className="list-unstyled">
                <li>Social Platform Management</li>
                <li>Prototyping</li>
                <li>Film & Photo Studio</li>
                <li>Influencer Outreach</li>
                <li>SEO</li>
              </ul>
            </div>
          </Col>
        </Row>
        <div
          style={{
            margin: "100px 200px",
            borderBottom: "1px solid rgba(226, 164, 164, 0.3)",
          }}
        ></div>
        <Row>
          <Col md={6} className="mb-3">
            <h2 className="fw-bold service-underline mb-5">Promoting Media</h2>
            <p>
              Advertising is a crowded world. We combine programmatic targeting
              with pinpoint audience measurement to ensure yours isn’t lost in
              the mix.
            </p>
            <div className="common-page">
              <ul className="list-unstyled">
                <li>Media Planning & Buying</li>
                <li>Mobile Marketing</li>
                <li>Search Engine Marketing</li>
                <li>Display, Video, Social and Native Marketing</li>
                <li>Email Marketing</li>
                <li>Experience Design</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <img src={promotion} alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
        <div
          style={{
            margin: "100px 200px",
            borderBottom: "1px solid rgba(226, 164, 164, 0.3)",
          }}
        ></div>
        <Row>
          <Col md={6} className="mb-3">
            <img src={data} alt="" style={{ width: "100%" }} />
          </Col>
          <Col md={6} className="mb-3">
            <h2 className="fw-bold service-underline mb-5">
              Measuring Data & Analytics
            </h2>
            <p>
              Measurement is key, so we measure twice and then set targets one
              more time. We have access to sophisticated tools to draw insights
              from past campaigns and make data-driven decisions that impact the
              present.
            </p>
            <div className="common-page">
              <ul className="list-unstyled">
                <li>Social Listening</li>
                <li>Website Analytics</li>
                <li>Social Analytics</li>
                <li>Online Reputation Management</li>
              </ul>
            </div>
          </Col>
        </Row>
        <div
          style={{
            margin: "100px 200px",
            borderBottom: "1px solid rgba(226, 164, 164, 0.3)",
          }}
        ></div>
        <div className="d-flex justify-content-center my-5 mentors">
          Get A Free Quote
        </div>
        <Row className="my-5">
          <Col md={6} className="mb-3">
            <img
              src={qa}
              alt=""
              className="image-fluid"
              style={{ width: "80%" }}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form className="me-5">
              <Form.Control
                placeholder="Enter your name"
                className="mb-3 contact-input"
              />
              <Row className="mt-3">
                <Col md={6} className="mb-3 mt-3">
                  <Form.Control
                    placeholder="Email"
                    className="mb-3 contact-input"
                  />
                </Col>
                <Col md={6} className="mb-3 mt-3">
                  <Form.Control
                    placeholder="Phone"
                    className="mb-3 contact-input"
                  />
                </Col>
              </Row>
              <textarea
                className="form-control contact-text-area"
                rows="5"
                id="comment"
                placeholder="Message"
              ></textarea>
              <input
                type="submit"
                value="SEND NOW"
                className="submit-btn my-3"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DM;
