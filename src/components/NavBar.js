import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import MovieFilter from "./MovieFilter";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ padding:"20px"}} >
        <Container style={{display:"flex" , justifyContent:"space-around"}}>
          <Navbar.Brand href="#home" style={{marginRight:"200px", color:"orange"}}><h1>Movie App</h1></Navbar.Brand>
          <Nav  >
            <Nav.Link href="#home" style={{marginRight:"100px"}} >Home</Nav.Link>
            <Nav.Link href="#Movies" style={{marginRight:"100px"}}>Movies</Nav.Link>
            <Nav.Link href="#Subscription" style={{marginRight:"150px"}}>Subscription</Nav.Link>
          </Nav>
        
       
     
          
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
