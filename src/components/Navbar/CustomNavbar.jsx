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
import { getFirestore } from '../../firebase';
import { useState } from 'react';

function CustomNavbar() {

    const { albums } = useCartContext();
    const [genres, setGenres] = useState([]);
    let acumulator = 0;
    albums.map((album) => acumulator = acumulator + album.units);

    useEffect(() => {
        const db = getFirestore();

        const genresCollection = db.collection('genres');

        genresCollection.get().then((querySnapshot) => {
            setGenres(querySnapshot.docs.map(doc => ({ ...doc.data() })));
        }).catch((error) => console.log("Error getting albums from Firebase", error));
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" className="navBkg" bg="dark" variant="dark" >
            <Link to={"/"}><img className="logo" alt="brand" src={process.env.PUBLIC_URL + "/images/logo2.png"} /></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    <Link className="links" to={"/catalog/CD"}>CD</Link>
                    <Link className="links" to={"/catalog/DVD"}>DVD</Link>
                    <Link className="links" to={"/catalog/Vinilo"}>Vinilos</Link>
                    <NavDropdown title="Géneros" id="collasible-nav-dropdown">
                        {genres.map((oneGenre, index) =>
                            <div key={index}>
                                <Link className="dropdownLinks" to={`/genre/${index + 1}`}>
                                    <button style={{ border: "none", backgroundColor: "transparent", width: "10vw", margin: ".5em" }} >
                                        {oneGenre.value}
                                    </button>
                                </Link>
                            </div>
                        )}
                    </NavDropdown>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar album..." className="mr-sm-2" />
                        <Button variant="outline-light"><i className="fa fa-search" aria-hidden="true" /></Button>
                    </Form>
                </Nav>
                <Nav>
                    <div className="rightGroup">
                        <Link to={"/"}><img className="altLinkLogo" alt="user" src={process.env.PUBLIC_URL + "/images/user.png"} aria-hidden="true" /></Link>
                        <CartIcon cartCounter={acumulator}></CartIcon>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default CustomNavbar;
