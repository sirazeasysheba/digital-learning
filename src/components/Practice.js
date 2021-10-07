import React from "react";
import { Tab, Container, Row, Col, Nav } from "react-bootstrap";

const Practice = () => {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="first" className="active-toggle-btn">
                Tab 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="active-toggle-btn">
              <Nav.Link eventKey="second" className="active-toggle-btn">
                Tab 2
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h1>Hi</h1>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h1>Hi 2</h1>
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Practice;
