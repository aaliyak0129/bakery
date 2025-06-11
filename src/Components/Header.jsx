import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
 
const Header = () => {
  const navigate = useNavigate();
  function logout(){
   
    
    localStorage.clear()
    alert("logout")
    window.location.reload()
  }
  
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
               <FaShoppingCart  style={{fontSize:"40px",color:"#e08ca4", marginLeft:"300px"}}/>
               <CgProfile onClick={logout} style={{fontSize:"40px",color:"#e08ca4", marginLeft:"20px"}} />
<button style={{ color: "black", fontFamily: "cursive", backgroundColor:"pink",padding:"5px",marginLeft:"5px",borderRadius:"20px" }} onClick={() => navigate('/admin/login')} >ADMIN </button>
          </Nav> 
        </Navbar.Collapse>
              <div className="scallop"></div>

      </Container>
    </Navbar>
      </>
    
  );
};

export default Header;
