import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavLink, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand='sm' className='header'>
            <Container>
            <h2>QUIZ MASTER</h2>
            <Navbar.Toggle aria-controls='navBarScroll' data-bs-target="#navBarScroll" />
            <Navbar.Collapse id="navBarScroll">
            
            <div className='links'>
              <Nav>
                <NavLink enventKey="1" as={Link} to="/">HOME</NavLink>
                <NavLink enventKey="2" as={Link} to="/quiz">Quiz</NavLink>
                <NavLink enventKey="3" as={Link} to="/statistics">STATISTICS</NavLink>
                <NavLink enventKey="4" as={Link} to="/blog">BLOG</NavLink>
              </Nav>
            </div>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;