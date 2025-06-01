import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Chefsection = () => {
  return (
    <>
    <Container fluid className="py-5" style={{ backgroundColor:"lightpink",marginTop:"50px"}}>
      <Row className="align-items-center">
        <Col md={8}>
          <h2 className="fw-bold mb-3" style={{fontFamily:"cursive"}}>Our chef AALIYA KHAN!</h2>
          <p style={{fontFamily:"cursive"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem</p>
          <p style={{fontFamily:"cursive"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
         
          <img
            src="./src/signature.png"
            alt="Chef Signature"
            style={{ width: '300px' }}
          />
        </Col>
        <Col md={4} className="text-center">
          <Image
            src="https://i.pinimg.com/736x/4b/7d/71/4b7d71f97c552772a2bc930cf0eb1c8f.jpg"
            alt="Chef"
            roundedCircle
            fluid
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Chefsection;
