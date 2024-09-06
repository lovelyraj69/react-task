import React from 'react'
import logo from '../images/logo.png'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

export default function Navigationbar() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 fixed-top">
                    <Container className='bg-success p-2' fluid>
                        <Navbar.Brand href="#">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src={logo} alt="" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="me-auto">
                                    <Nav.Link href='/'>Home</Nav.Link>
                                    <Nav.Link href='/shop'>Shop</Nav.Link>
                                    <Nav.Link href='/contact'>Contact us</Nav.Link>
                                    <Nav.Link href='/about'>About</Nav.Link>
                                    <Nav.Link href='/cart' >Cart</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
