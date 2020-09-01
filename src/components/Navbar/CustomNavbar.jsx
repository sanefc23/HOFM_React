import React from 'react';
//import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import './CustomNavbar.css';
import CartIcon from '../CartIcon/CartIcon';

function CustomNavbar() {
    const genres = ['Pop', 'Rock', 'Latino', 'EDM', 'Música Clásica', 'Floklore', 'Hip Hop', 'Alternativo', 'Jazz', 'Metal', 'Reggae', 'Reggaeton', 'R&B', 'Rap']
    //const [cartCounter, setCartCounter] = useState(null);
    return (
        <Navbar collapseOnSelect expand="lg" className="navBkg" bg="dark" variant="dark">
            <Navbar.Brand href="/"><img className="logo" alt="brand" src={process.env.PUBLIC_URL + "/images/logo2.png"} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="links" href="/products/cd">CD</Nav.Link>
                    <Nav.Link className="links" href="/products/dvd">DVD</Nav.Link>
                    <Nav.Link className="links" href="/products/vinilos">Vinilos</Nav.Link>
                    <NavDropdown className="links" title="Géneros" id="collasible-nav-dropdown">
                        {genres.map((oneGenre, key) => <NavDropdown.Item key={key} href="#action/3.1">{oneGenre}</NavDropdown.Item>)}
                    </NavDropdown>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar album..." className="mr-sm-2" />
                        <Button variant="outline-light"><i className="fa fa-search" aria-hidden="true" /></Button>
                    </Form>
                </Nav>
                <Nav>
                    <div className="rightGroup">
                        <Nav.Link href="/"><img className="altLinkLogo" alt="user" src={process.env.PUBLIC_URL + "/images/user.png"} aria-hidden="true" /></Nav.Link>
                        <CartIcon cartCounter={10}></CartIcon>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default CustomNavbar;
