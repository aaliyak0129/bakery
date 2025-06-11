import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "./Cardslice"; // ✅ import clearCart action
import { Container, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Showcart() {
  const datastore = useSelector((store) => store.cart.carditems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteproduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(removeFromCart(id));
    }
  };

  const totalPrice = datastore.reduce((acc, item) => {
    const price = item.price || item.pprice || 0;
    return acc + Number(price);
  }, 0);

  const handlePlaceOrder = () => {
    if (datastore.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || { uname: "Guest" };

    const newOrder = {
      id: Date.now(),
      items: datastore,
      total: totalPrice,
      date: new Date().toLocaleString(),
      user: currentUser.uname
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    dispatch(clearCart()); // ✅ Clear Redux cart
    alert("Order placed successfully!");
    navigate("/admin/orders"); // ✅ Redirect to admin panel
  };

  return (
    <Container>
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: "cursive",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        CART ITEMS ({datastore.length})
      </h1>

      {datastore.length === 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "40px", color: "gray" }}>
          Your cart is empty.
        </h3>
      ) : (
        <>
          <Row className="gap-4 justify-content-center mt-4">
            {datastore.map((item) => (
              <Card
                key={item.id}
                style={{ width: "19rem", height: "28rem", border: "solid 5px pink" }}
              >
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.img || item.pimage}
                      alt={item.pname}
                      height="250px"
                      width="250px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Card.Title>{item.pname}</Card.Title>
                  <Card.Text>
                    <p>
                      <b>Flavor:</b> {item.flavor || item.desc}
                    </p>
                    <p>
                      <b>Price:</b> ₹{item.price || item.pprice}
                    </p>
                  </Card.Text>
                  <div className="d-flex justify-content-end mb-3">
                    <Button
                      variant="danger"
                      style={{ border: "solid 5px pink" }}
                      onClick={() => deleteproduct(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Row>

          <h3
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "black",
              fontWeight: "bold",
              fontFamily: "cursive",
              fontSize: "45px",
            }}
          >
            Total Price: ₹{totalPrice}
          </h3>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="success" size="lg" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Showcart;
