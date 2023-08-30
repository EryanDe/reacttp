import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="bg-dark py-5">
      <Container className="px-4 px-lg-5 my-5">
        <Row className="text-center text-white">
          <Col>
            <h1 className="display-4 fw-bolder">Shop in style</h1>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
