import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container,Row } from 'react-bootstrap';

function Cards() {
  return (
  <>
 
  <Container>
     <h1 style={{textAlign:"center",color:"black",fontFamily:"cursive",fontWeight:"bold",marginTop:"20px",justifyContent:"center",}}>OUR CAKES</h1>
     <Row className='gap-4'>

  <Card style={{ width: '19rem',height:'28rem', border:" solid 5px pink", }}>   <Card.Body>
    <img src="https://i.pinimg.com/736x/c2/57/6a/c2576adafbdbe056a26c2bb554d512e3.jpg" alt="" height={"255px"} width={"250px"}/>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title .
        </Card.Text>
        <Button variant="primary" style={{marginBottom:"50px",marginLeft:"50px",backgroundColor:"pink"}}><h6 style={{color:"black",fontFamily:"cursive"}}>Add to cart</h6>
        </Button>
      </Card.Body>
       </Card>
       <Card style={{ width: '19rem',height:'28rem', border:" solid 5px pink" }}>
   <Card.Body>
    <img src="https://i.pinimg.com/736x/11/cd/7a/11cd7a06d14a3db876db81f08a7cd508.jpg" alt="" height={"250px"} width={"250px"} />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title 
        </Card.Text>
            <Button variant="primary" style={{marginTop:"10px",marginLeft:"55px",backgroundColor:"pink"}}><h6 style={{color:"black",fontFamily:"cursive"}}>Add to cart</h6>
        </Button>
      </Card.Body>
       </Card>
  <Card style={{ width: '19rem',height:'28rem', border:" solid 5px pink" }}>   <Card.Body>
    <img src="https://i.pinimg.com/736x/5e/9a/7f/5e9a7f7093f7c9afcc82a80d145910bb.jpg" alt="" height={"250px"} width={"250px"} />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title 
        </Card.Text>
           <Button variant="primary" style={{marginTop:"10px",marginLeft:"55px",backgroundColor:"pink"}}><h6 style={{color:"black",fontFamily:"cursive"}}>Add to cart</h6>
        </Button>
      </Card.Body>
       </Card>
  <Card style={{ width: '19rem',height:'28rem', border:" solid 5px pink" }}>   <Card.Body>
    <img src="https://i.pinimg.com/736x/47/04/62/470462afd267bb91a54d8701c48c4fc3.jpg" alt="" height={"250px"} width={"250px"}/>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title
        </Card.Text>
      <Button variant="primary" style={{marginTop:"10px",marginLeft:"55px",backgroundColor:"pink"}}><h6 style={{color:"black",fontFamily:"cursive"}}>Add to cart</h6>
        </Button>      </Card.Body>
       </Card>
    
         </Row></Container>
  </>
  )
}

export default Cards