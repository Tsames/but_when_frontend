//Dependencies
import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";


function Header(props) {

  const colorNavItem = "rgba(254, 250, 224, 1)";
  const colorNavBar = "rgba(188, 108, 37, 0.60)";

  return (
    <Navbar style={{ backgroundColor: `${colorNavBar}` }}>
      <Container>
        <Navbar.Brand className="justify-content-start" ><Link to="/" style={{ color: `${colorNavItem}` }}><i className={"bi-house-fill"}></i></Link></Navbar.Brand>
        <Nav className={"me-auto"}>
          <Link to="/events/create">
            <Nav.Item style={{ color: `${colorNavItem}` }}><i className={"bi-vector-pen"} style={{ color: `${colorNavItem}` }}></i></Nav.Item>
          </Link>
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
        </Nav>
      </Container>
    </Navbar>
  );
}


export default Header;