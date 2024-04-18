import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function MainNavigation() {
  return (
    <Navbar  expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="">MealPlanner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* This is the hamburger menu */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="recipes">recipes</Nav.Link>
                        <Nav.Link href="features">Features</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                    </Nav>
                    {/* Align items to the right */}
                    <Nav>
                        <Button className='btn-home '>Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
  );
}

export default MainNavigation;
