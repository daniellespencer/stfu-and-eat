import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
        <Navbar.Brand as={Link} to="/">
            <i className='fa fa-utensils'></i>{' '}
            STFU&EAT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link as={Link} to="recommendation">Recommendation</Nav.Link>
            <Nav.Link as={Link} to="restaurant-list">Restaurant List</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

    )
}

export default Header
