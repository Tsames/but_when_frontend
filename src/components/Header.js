//Dependencies
import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";


function Header(props) {

  const colorNavItem = "rgba(100, 114, 149, 1)";
  const colorNavBar = "rgba(242, 235, 229, 0.40)";

  return (
    <Navbar style={{ backgroundColor: `${colorNavBar}` }}>
      <Container>
        <Navbar.Brand className="justify-content-start" ><Link to="/" style={{ color: `${colorNavItem}` }}><i className={"bi-house-fill"}></i></Link></Navbar.Brand>
        <Nav className={"me-auto"}>
          <Link to="/events/create">
            <Nav.Item style={{ color: `${colorNavItem}` }}><i className={"bi-vector-pen"} style={{ color: `${colorNavItem}` }}></i></Nav.Item>
          </Link>
          <Link to="/my_events">
            <Nav.Item style={{ color: `${colorNavItem}` }}><i className={"bi-collection-fill"} style={{ color: `${colorNavItem}`, marginLeft: "0.75em" }}></i></Nav.Item>
          </Link>
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
        </Nav>
      </Container>
    </Navbar>
  );
}


export default Header;