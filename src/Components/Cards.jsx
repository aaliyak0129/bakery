import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { additem } from "./Cardslice";
import { useNavigate } from "react-router-dom";

function Cards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.carditems);

  const cakes = [
    {
      id: 1,
      pname: "FLORAL CAKE",
      flavor: "Vanilla 2Kg",
      price: 1000,
      img: "https://i.pinimg.com/736x/c2/57/6a/c2576adafbdbe056a26c2bb554d512e3.jpg",
    },
    {
      id: 2,
      pname: "BUTTERFLY HEART CAKE",
      flavor: "Strawberry 1Kg",
      price: 1500,
      img: "https://i.pinimg.com/736x/11/cd/7a/11cd7a06d14a3db876db81f08a7cd508.jpg",
    },
    {
      id: 3,
      pname: "RED HEART CAKE",
      flavor: "Red velvet 3Kg",
      price: 2500,
      img: "https://i.pinimg.com/736x/5e/9a/7f/5e9a7f7093f7c9afcc82a80d145910bb.jpg",
    },
    {
      id: 4,
      pname: "TULIP CAKE",
      flavor: "Butterscotch 4Kg",
      price: 4000,
      img: "https://i.pinimg.com/736x/47/04/62/470462afd267bb91a54d8701c48c4fc3.jpg",
    }
  ];

 const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const handleAddToCart = (cake) => {
  if (!currentUser) {
    alert("Please sign up or log in first.");
    navigate("/signup"); // ✅ force redirect to signup instead of login
    return;
  }

  dispatch(additem(cake));
};



  return (
    <Container>
      <h1 style={{
        textAlign: "center",
        color: "black",
        fontFamily: "cursive",
        fontWeight: "bold",
        marginTop: "20px"
      }}>
        OUR CAKES - Cart ({cartItems.length})
      </h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Button variant="dark" onClick={() => navigate("/Showcart")}>
          Go to Cart
        </Button>
      </div>

      <Row className="gap-4 justify-content-center">
        {cakes.map((cake) => (
          <Card key={cake.id} style={{ width: '19rem', height: '28rem', border: "solid 5px pink" }}>
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src={cake.img}
                  alt=""
                  height="250px"
                  width="250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Card.Title>{cake.pname}</Card.Title>
              <Card.Text>
                <p>{cake.flavor}</p>
                <p><b>RS: {cake.price}</b></p>
              </Card.Text>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                <Button
                  variant="primary"
                  style={{ backgroundColor: "pink", border: "none" }}
                  onClick={() => handleAddToCart(cake)}
                >
                  <h6 style={{ color: "black", fontFamily: "cursive", margin: 0 }}>Add to cart</h6>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
