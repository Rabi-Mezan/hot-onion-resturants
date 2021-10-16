import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                            <Link to="/cart"><i className="fas fa-shopping-cart text-dark me-3"></i></Link>
                            <Link style={{ textDecoration: 'none' }} className='text-dark fw-bold me-3' to="/home">Home</Link>
                            <Link style={{ textDecoration: 'none' }} className='text-dark fw-bold me-3' to="/login">Login</Link>
                            <Link style={{ textDecoration: 'none' }} to="/signup">
                                <button>sign up</button>
                            </Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;