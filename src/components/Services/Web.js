import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import w3c from "../../media/w3c.png";
import responsive from "../../media/responsive.png";
import afford from "../../media/cost.png";
import rwd from "../../media/rwd.png";
import customize from "../../media/customize.png";
import develop from "../../media/develop.png";
import ecommerce from "../../media/ecommerce.png";
import qa from "../../media/form-iamge-cont.jpg";
const Web = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-5 mentors">
        Your Desire Website Solutions
      </div>
      <Container>
        <p className="text-center">
          Regardless of the undertaking, we plan together, our group works
          constantly with you, following the nimble procedure to guarantee to
          fulfill your time constraint on spending plan. Our sites are planned
          and worked to suit your business needs and address your organization.
        </p>
        <Row style={{ marginTop: 100 }}>
          <Col md={4} className="mb-3 p-0">
            <div className="service-cart py-3 px-5">
              <img src={w3c} alt="" className="mb-3" style={{ height: 40 }} />
              <h5 className="mb-3 fw-bold">W3C Validations</h5>
              <p className="mb-3">
                Regardless of whether it's a Web Development or Product
                Creation, at whatever point we code, be certain that our coding
                is consistently W3C Standard.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-3 p-0">
            <div className="service-cart py-3 px-5">
              <img
                src={responsive}
                alt=""
                className="mb-3"
                style={{ height: 40 }}
              />
              <h5 className="mb-3 fw-bold">Responsive Design</h5>
              <p className="mb-3" style={{ height: 120 }}>
                For every one of the undertakings we perform, we cautiously
                check it on each responsive gadget and we ensure it's program
                viable.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-3 p-0">
            <div className="service-cart py-3 px-5">
              <img
                src={afford}
                alt=""
                className="mb-3"
                style={{ height: 40 }}
              />
              <h5 className="mb-3 fw-bold">Affordable Price</h5>
              <p className="mb-3" style={{ height: 120 }}>
                We give quality work in a moderate spending plan. What's more,
                in uncommon cases, in the event that you don't care for our
                work, we ensure 100% Money-back.
              </p>
            </div>
          </Col>
        </Row>
        <div
          className="d-flex justify-content-center mt-5 mentors"
          style={{ fontSize: 24, marginBottom: 120 }}
        >
          Our Major Services
        </div>
        <Row>
          <Col md={6} className="mb-3">
            <img src={rwd} alt="" style={{ width: "80%" }} />
          </Col>
          <Col md={6} className="mb-3">
            <h2 className="fw-bold service-underline mb-5">
              Responsive Web Design
            </h2>
            <p>
              Our group of innovative website specialists will ensure your site
              is appealing and locks in. They can do anything — from making a
              model to applying astonishing website architecture impacts. Have a
              plan document in PSD/XD/Figma or Sketch Format? Need it to change
              over into Responsive Web Design? We can help without a doubt.
            </p>
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
              WordPress /Shopify <br /> Customization
            </h2>
            <p>
              Complete customization website or design Website and ECommerce
              website in WordPress/Shopify including Landing Page or Single Page
              Website with slider, contact forms.
            </p>
          </Col>
          <Col md={6} className="mb-3">
            <img src={customize} alt="" style={{ width: "100%" }} />
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
            <img src={develop} alt="" style={{ width: "80%" }} />
          </Col>
          <Col md={6} className="mb-3">
            <h2 className="fw-bold service-underline mb-5">
              WordPress Theme Development
            </h2>
            <p>
              We comprehend that each part of your site should be novel and
              furthermore match certain assumptions for your item/administration
              specialty. Our quality-centered PSD to WordPress subject
              improvement administrations will foster a topic that embraces each
              utilitarian component while satisfying clients outwardly.
            </p>
          </Col>
        </Row>
        <div
          style={{
            margin: "100px 200px",
            borderBottom: "1px solid rgba(226, 164, 164, 0.3)",
          }}
        ></div>
        <Row>
          <Col md={6} className="mb-3  ">
            <h2 className="fw-bold service-underline mb-5">
              eCommerce Solutions
            </h2>
            <p>
              Selling your items online with attempted and believed eCommerce
              arrangements like our own will keep your transformation rate at a
              record high. With demonstrated accomplishment in making eCommerce
              stages like WooCommerce, Wix, and Shopify, you can depend on us to
              give you all the eCommerce arrangements you need.
            </p>
          </Col>
          <Col md={6} className="mb-3">
            <img src={ecommerce} alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
        <div
          style={{
            margin: "100px 200px",
            borderBottom: "1px solid rgba(226, 164, 164, 0.3)",
          }}
        ></div>
        <div
          className="d-flex justify-content-center mt-5 mentors"
          style={{ fontSize: 24, marginBottom: 80 }}
        >
          Other Services
        </div>
        <Row>
          <Col md={4} className="mb-3 p-0  other-service">
            <div className="py-3 px-5">
              <h6 className="mb-3 fw-bold">Email template design</h6>
              <p className="mb-3">
                Email campaigns are a powerful way of marketing as you directly
                address the needs of your targeted customers. Email templates
                are used in these campaigns, as they are more professional and
                offer better interaction possibilities than what would be
                available through normal emails. We provide PSD/Figma/XD/Sketch
                to HTML Email, Mailchimp, or Campaign monitor template.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-3 p-0  other-service">
            <div className="py-3 px-5">
              <h6 className="mb-3 fw-bold">Page Speed Optimizations</h6>
              <p className="mb-3" style={{ height: 200 }}>
                Every one of the sites that we create is super-quick and
                profoundly upgraded. We guarantee the very accepted procedures
                are followed all through the custom advancement measure, which
                further develops in general client commitment and
                transformation.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-3 p-0 other-service">
            <div className=" py-3 px-5">
              <h6 className="mb-3 fw-bold">Website Protection & Monitoring</h6>
              <p className="mb-3" style={{ height: 200 }}>
                Our sites are effectively upgradeable with no interruption in
                their past usefulness. We utilize the most noteworthy security
                strategies to guarantee that the site is protected from any bot
                assaults. We follow right ﬁle consents, spam assurance,
                structure approvals, conﬁguration settings, and so forth, to
                guarantee that the site stays safe and got.
              </p>
            </div>
          </Col>
        </Row>
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

export default Web;
