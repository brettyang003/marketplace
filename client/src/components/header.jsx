import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header(props) {
  function isLoggedIn() {
    console.log(props.loggedIn.logged);
    if (props.loggedIn.logged === "true") {
      return true;
    }
    return false;
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="home">
          <a href="home">
            <img
              href="#home"
              src="https://seeklogo.com/images/F/facebook-marketplace-logo-46A976DABC-seeklogo.com.png"
              width="30"
              height="30"
              alt="Marketplace Logo"
            />
          </a>
        </Navbar.Brand>
        <div className="m-0 px-0 justify-content-start">
          <Navbar.Brand href="#home">Marketplace</Navbar.Brand>
        </div>

        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <h3 className="mt-3">{props.loggedIn.name}</h3>
            <Nav.Link href="/">Home</Nav.Link>
            {isLoggedIn() ? (
              <Nav.Link href="/createPost">Create Post</Nav.Link>
            ) : (
              <div>
                <Nav.Link href="/createUser">Create Account</Nav.Link>
                <Nav.Link href="/userLogin">Login</Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
