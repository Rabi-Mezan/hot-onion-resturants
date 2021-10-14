import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from '../../../images/logo2.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container className='navbar'>
                    <div>
                        <Navbar.Brand href="#home">
                            <img className='' src={img} alt="" />
                        </Navbar.Brand>
                    </div>
                    <div>
                        <Nav className="me-auto nav-menu">
                            <Nav.Link href="/cart"><i class="fas fa-shopping-cart text-dark"></i></Nav.Link>
                            <Nav.Link className='text-dark fw-bold' href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">
                                <button>sign up</button>
                            </Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;