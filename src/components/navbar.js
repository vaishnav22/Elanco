import React from 'react'
import * as ReactBootstrap from "react-bootstrap"
import logo from '../../src/globe.png'

function NavBar() {
    return (
        <div>
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <ReactBootstrap.Container>
            <ReactBootstrap.Navbar.Brand href="https://www.elanco.us/"><img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />ELANCO</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootstrap.Nav className="me-auto">
                    <ReactBootstrap.Nav.Link href="https://www.elanco.us/products-services">PRODUCTS AND SERVICE</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="https://www.elanco.us/feedmill">FEEDMILL</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="https://www.elanco.com/en-us/careers">CAREERS</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="https://www.elanco.com/en-us/sustainability">GIVING BACK</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Container>
            </ReactBootstrap.Navbar>
        </div>
    )
}

export default NavBar
