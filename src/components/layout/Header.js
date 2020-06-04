import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { useHistory } from "react-router";

const Header = () => {
    const history = useHistory();
    const logOut = e => {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        history.push('/')

    }

    const loginRegLink = (
        <ul>
        
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );


    const userLink = (
        <ul>
        <li><Link to="/restaurant-list">
        Restaurant List</Link></li>
        <li><Link to="/about">
        About</Link></li>
        
        <li><a onClick={logOut} href="#!">
            <i className="fa fa-sign-out"></i> {' '}
            <span className='hide-sm'>Logout</span></a>
        </li>
        </ul>
    )
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
