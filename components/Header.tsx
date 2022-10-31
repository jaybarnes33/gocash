import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect fixed="top">
      <Container>
        <Navbar.Brand href="/">GoCash</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
