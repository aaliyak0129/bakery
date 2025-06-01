import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';

function Cards() {
  return (
    <>
      <Container>
        <h1 style={{
          textAlign: "center",
          color: "black",
          fontFamily: "cursive",
          fontWeight: "bold",
          marginTop: "20px"
        }}>
          OUR CAKES
        </h1>

        <Row className="gap-4 justify-content-center">

          <Card style={{ width: '19rem', height: '28rem', border: "solid 5px pink" }}>
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src="https://i.pinimg.com/736x/c2/57/6a/c2576adafbdbe056a26c2bb554d512e3.jpg"
                  alt=""
                  height="250px"
                  width="250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Card.Title>FLORAL CAKE</Card.Title>
              <Card.Text>
<p>vanilla flavor 2Kg
</p>
<h6><b>RS:1000</b></h6>
              </Card.Text>
           <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
  <Button variant="primary" style={{ backgroundColor: "pink", border: "none" }}>
    <h6 style={{ color: "black", fontFamily: "cursive", margin: 0 }}>Add to cart</h6>
  </Button>
</div>

            </Card.Body>
          </Card>

          <Card style={{ width: '19rem', height: '28rem', border: "solid 5px pink" }}>
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src="https://i.pinimg.com/736x/11/cd/7a/11cd7a06d14a3db876db81f08a7cd508.jpg"
                  alt=""
                  height="250px"
                  width="250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Card.Title> BUTTERFLY HEART CAKE</Card.Title>
                            <Card.Title>
                               <p>strawberry flavored 1Kg</p>
                          
                            <p><b>RS:1500</b></p>
                             </Card.Title>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
  <Button variant="primary" style={{ backgroundColor: "pink", border: "none" }}>
    <h6 style={{ color: "black", fontFamily: "cursive", margin: 0 }}>Add to cart</h6>
  </Button>
</div>
            </Card.Body>
          </Card>

          <Card style={{ width: '19rem', height: '28rem', border: "solid 5px pink" }}>
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src="https://i.pinimg.com/736x/5e/9a/7f/5e9a7f7093f7c9afcc82a80d145910bb.jpg"
                  alt=""
                  height="250px"
                  width="250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Card.Title>RED HEART CAKE</Card.Title>
              <Card.Text>
<p>red valvet flavor 3Kg</p>
<p><b> RS:2500</b></p>              </Card.Text>
             <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
  <Button variant="primary" style={{ backgroundColor: "pink", border: "none" }}>
    <h6 style={{ color: "black", fontFamily: "cursive", margin: 0 }}>Add to cart</h6>
  </Button>
</div>
            </Card.Body>
          </Card>

          <Card style={{ width: '19rem', height: '28rem', border: "solid 5px pink" }}>
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src="https://i.pinimg.com/736x/47/04/62/470462afd267bb91a54d8701c48c4fc3.jpg"
                  alt=""
                  height="250px"
                  width="250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Card.Title>TULIP CAKE</Card.Title>
              <Card.Text>
<p>butterscotch flavor 4Kg</p>
<p> <b>RS:4000</b>
</p>              </Card.Text>
           <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
  <Button variant="primary" style={{ backgroundColor: "pink", border: "none" }}>
    <h6 style={{ color: "black", fontFamily: "cursive", margin: 0 }}>Add to cart</h6>
  </Button>
</div>
            </Card.Body>
          </Card>

        </Row>
      </Container>
    </>
  );
}

export default Cards;
