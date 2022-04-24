import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css';



const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} height="30px" alt="" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/pricing">Pricing</Link>
                    {
                        user && <>
                            <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                            <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                        </>
                    }
                    {
                        user ?
                            <button onClick={handleSignOut}>Sign Out</button>
                            :
                            <Link to="/login">Login</Link>}

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;