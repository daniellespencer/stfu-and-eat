import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { AuthContext } from "../auth/context/authContext";

const Header = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <Nav.Link as={Link} to='recommendation'>
        Recommendation
      </Nav.Link>
      <Nav.Link as={Link} to='restaurant-list'>
        Restaurant List
      </Nav.Link>
      <Nav.Link as={Link} to='about'>
        About
      </Nav.Link>
      <Nav.Link as={Link} onClick={onLogout} to='landing'>
        <i className='fa fa-sign-out'></i>{" "}
        <span className='hide-sm'>Logout</span>
      </Nav.Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Nav.Link as={Link} to='recommendation'>
        Recommendation
      </Nav.Link>
      <Nav.Link as={Link} to='login'>
        Login
        {' '}<i className='fa fa-sign-in'></i>
      </Nav.Link>
    </Fragment>
  );

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand as={Link} to='/'>
        <i className={icon}></i> {title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {/* add condition here? */}
          {isAuthenticated ? authLinks : guestLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Header.defaultProps = {
  title: "STFU & EAT",
  icon: "fa fa-utensils",
};

export default Header;
