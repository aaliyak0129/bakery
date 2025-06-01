import React from 'react';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Carousel from 'react-bootstrap/Carousel';


const Header = () => {
  return (
    <>

     <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:"white"}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{fontFamily:"cursive", color:"#e08ca4",fontSize:"32px",}}>Cake-a-Licious</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"black",fontSize:"22px", marginLeft:"200px",fontFamily:"cursive"}}>Home</Nav.Link>
            <Nav.Link href="#action2"style={{color:"black",fontSize:"22px",fontFamily:"cursive"}}>Our Cakes</Nav.Link>
             <NavDropdown title="Menu" id="navbarScrollingDropdown"style={{color:"black",fontSize:"22px",fontFamily:"cursive"}}>
              <NavDropdown.Item href="#action3"style={{color:"black",fontSize:"22px",fontFamily:"cursive"}}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4"style={{color:"black",fontSize:"22px",fontFamily:"cursive"}}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"style={{color:"black",fontSize:"22px",fontFamily:"cursive"}}>
                Something else here
              </NavDropdown.Item>
           
            
            </NavDropdown>
              <Nav.Link href="#action2"style={{color:"black",fontSize:"22px",fontFamily:"cursive"}}>About us </Nav.Link>
               <Nav.Link href="#action2"style={{color:"black",fontSize:"22px",fontFamily:"cursive"}}>Contact us</Nav.Link>
               <FaShoppingCart style={{fontSize:"40px",color:"#e08ca4", marginLeft:"300px"}}/>
               <CgProfile style={{fontSize:"40px",color:"#e08ca4", marginLeft:"20px"}} />

          </Nav> 
        </Navbar.Collapse>
              <div className="scallop"></div>

      </Container>
    </Navbar>
    <Carousel fade>
      <Carousel.Item>
 
<img src="https://i.pinimg.com/736x/b1/ef/bf/b1efbf50a3157c7d071184ecfbe10024.jpg" alt="" width={"100%"} height={"500px"}/>
      <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

<img src="https://i.pinimg.com/736x/89/7f/f0/897ff0ef441e38e9192d4d0e93f1cebc.jpg" alt="" width={"100%"} height={"500px"}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img src="https://thumbs.dreamstime.com/b/stunning-pink-abstract-th-birthday-cake-wallpaper-vibrant-texture-design-mobile-desktop-backgrounds-perfect-elevate-your-phone-356036692.jpg" alt="" width={"100%"} height={"500px"} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
    
  );
};

export default Header;
