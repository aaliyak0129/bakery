import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Highlight() {
  return (
    <>
    <Container>
   <h1 style={{textAlign:"center",color:"black",fontFamily:"cursive",fontWeight:"bold",marginTop:"20px"
   }}>CUP CAKES</h1>
     <Row className='gap-4'>
        <Card style={{ width: '19rem',height:'28rem', border:" solid 5px pink" }}>   <Card.Body>
    <img src="https://i.pinimg.com/736x/ce/f6/d8/cef6d8b85ca5311267ca6a2632d9a85d.jpg" alt="" height={"255px"} width={"250px"} />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title .
        </Card.Text>
        <Button variant="primary" style={{marginTop:"10px",marginLeft:"55px",backgroundColor:"pink"}}><h6 style={{color:"black",fontFamily:"cursive"}}>Add to cart</h6>
        </Button>
      </Card.Body>
       </Card>
  
  <Card style={{ width: '19rem',height:'28rem', border:" solid 5px pink" }}>   <Card.Body>
    <img src="https://i.pinimg.com/736x/67/cd/b4/67cdb4293ec07580491c908b46784415.jpg" alt="" height={"255px"} width={"250px"} />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title .
        </Card.Text>
        <Button variant="primary" style={{marginTop:"10px",marginLeft:"55px",backgroundColor:"pink"}}><h6 style={{color:"black",fontFamily:"cursive"}}>Add to cart</h6>
        </Button>
      </Card.Body>
       </Card>
       <Card style={{ width: '19rem',height:'28rem', border:" solid 5px pink" }}>   <Card.Body>
    <img src="https://i.pinimg.com/736x/7b/0e/ab/7b0eab488640849ce5a06a9a42c64cb6.jpg" alt="" height={"255px"} width={"250px"} />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title .
        </Card.Text>
        <Button variant="primary" style={{marginTop:"10px",marginLeft:"55px",backgroundColor:"pink"}}><h6 style={{color:"black",fontFamily:"cursive"}}>Add to cart</h6>
        </Button>
      </Card.Body>
       </Card>
       <Card style={{ width: '19rem',height:'28rem', border:" solid 5px pink" }}>   <Card.Body>
    <img src="https://i.pinimg.com/736x/18/9a/fd/189afd2de86676edd9a661eac6ebc6f7.jpg" alt="" height={"255px"} width={"250px"} />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title .
        </Card.Text>
        <Button variant="primary" style={{marginTop:"10px",marginLeft:"55px",backgroundColor:"pink"}}><h6 style={{color:"black",fontFamily:"cursive"}}>Add to cart</h6>
        </Button>
      </Card.Body>
       </Card>
    </Row>
</Container>
</>

  )
}

export default Highlight