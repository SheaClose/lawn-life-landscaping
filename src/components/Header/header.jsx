import React from "react";
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import "./Header.css"
export default function Header() {
  return (
    <Navbar className="navbar" inverse collapseOnSelect>
      <Navbar.Header>
        <LinkContainer to="/">
          <Navbar.Brand >
          <span className="navbar_brand"> Lawn Life Landscaping </span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/services">
            <NavItem>Services</NavItem>
          </LinkContainer>
          <LinkContainer to="/booking">
            <NavItem>Booking</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="More..." id="basic-nav-dropdown">
            <LinkContainer to="/testimonials">
              <MenuItem eventKey={3.1}>Testimonials</MenuItem>
            </LinkContainer>
            <LinkContainer to="/photos">
              <MenuItem eventKey={3.2}>Photos</MenuItem>
            </LinkContainer>
            <MenuItem divider/>
            <LinkContainer to="/contact">
              <MenuItem eventKey={3.3}>Contact</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem onClick={()=>window.location.href = "https://www.facebook.com/LAWN-LIFE-Landscaping-1305194862867928/?hc_ref=SEARCH&fref=nf"}>Facebook</NavItem>
          <NavItem href="#">Instagram</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
