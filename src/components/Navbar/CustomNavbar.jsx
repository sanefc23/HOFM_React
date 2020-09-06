import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import './CustomNavbar.css';
import CartIcon from '../CartIcon/CartIcon';
import { useCartContext } from '../context/CartContext';

function CustomNavbar() {

    const { albums } = useCartContext();

    let acumulator = 0;
    albums.map((album) => acumulator = acumulator + album.units);

    useEffect(() => {
        console.log("receiving new album set");
    }, [albums]);

    const genres = ['Pop', 'Rock', 'Latino', 'EDM', 'Música Clásica', 'Floklore', 'Hip Hop', 'Alternativo', 'Jazz', 'Metal', 'Reggae', 'Reggaeton', 'R&B', 'Rap']
    //const [cartCounter, setCartCounter] = useState(null);
    return (
        <Navbar collapseOnSelect expand="lg" className="navBkg" bg="dark" variant="dark" >
            <Link to={"/"}><img className="logo" alt="brand" src={process.env.PUBLIC_URL + "/images/logo2.png"} /></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    <Link className="links" to={"/products/cd"}>CD</Link>
                    <Link className="links" to={"/products/dvd"}>DVD</Link>
                    <Link className="links" to={"/products/vinilos"}>Vinilos</Link>
                    <NavDropdown title="Géneros" id="collasible-nav-dropdown">
                        {genres.map((oneGenre, key) => <NavDropdown.Item key={key} href="#action/3.1">{oneGenre}</NavDropdown.Item>)}
                    </NavDropdown>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar album..." className="mr-sm-2" />
                        <Button variant="outline-light"><i className="fa fa-search" aria-hidden="true" /></Button>
                    </Form>
                </Nav>
                <Nav>
                    <div className="rightGroup">
                        <Link href="/"><img className="altLinkLogo" alt="user" src={process.env.PUBLIC_URL + "/images/user.png"} aria-hidden="true" /></Link>
                        <CartIcon cartCounter={acumulator}></CartIcon>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default CustomNavbar;
