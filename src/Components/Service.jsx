
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Service = () => {
  return (
    <>   
    <h1 style={{color:"black",fontSize:"45px",textAlign:"center",marginTop:"30px",fontWeight:"bold",fontFamily:"cursive"} }>Services We Provide</h1>
     <Container fluid className="mt-4">
      {/*
        Top‐level Row: three columns (Left / Middle / Right)
        `align-items-stretch` ensures each column’s content stretches to match the tallest column.
      */}
      <Row className="align-items-stretch">
        {/* ─────────────── Left Column ─────────────── */}
        <Col md={3}>
          <Card className="h-100 border-0">
                        <img src="https://i.pinimg.com/736x/61/3b/94/613b945075357d974fbf55d2f1b147a3.jpg" alt=""height={"450px"}/>

            <Card.Body>

              <Card.Text style={{backgroundColor:"pink",textAlign:"center",fontSize:"25px",fontFamily:"cursive",fontWeight:"bold"}}>
WEDDING CAKES
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* ────────────── Middle Column ────────────── */}
        <Col md={6}>
          {/*
            We need two nested Rows inside this column:
            - First nested Row: two small cards side by side
            - Second nested Row: one wide card below
          */}
          <Row className="h-50 mb-2">
            <Col md={6}>
              <Card className="h-100 border-0">
                
<img src="https://i.pinimg.com/736x/ac/a5/5c/aca55c9dbb798ae4cd8258fb2cf945a5.jpg" alt="" height={"280px"} width={"100%"}/>

                  <Card.Text style={{backgroundColor:"pink",padding:"50px",marginTop:"28px",textAlign:"center",fontSize:"25px",fontFamily:"cursive",fontWeight:"bold"}}>THEMED CAKES</Card.Text>
                
              
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0">
<img src="https://i.pinimg.com/736x/8c/39/82/8c3982b709b517383a3591a52e0bf107.jpg" alt="" height={"280px"}/>

                <Card.Body>
                  <Card.Title style={{backgroundColor:"pink",textAlign:"center",fontSize:"25px",fontFamily:"cursive",fontWeight:"bold",padding:"55px",marginTop:"10px"}}>DONUTS</Card.Title>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>

       
        </Col>

        {/* ────────────── Right Column ────────────── */}
        <Col md={3}>
          <Card className="h-100 border-0">
                        <img src="https://i.pinimg.com/736x/ac/83/42/ac83426792c595026392498cd373074c.jpg" alt="" height={"450px"} />

            <Card.Body>
              <Card.Title style={{backgroundColor:"pink",textAlign:"center",fontSize:"25px",fontFamily:"cursive",fontWeight:"bold"}}>CUSTOMIZED CAKES</Card.Title>
             
             
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>

  );
};

export default Service;
