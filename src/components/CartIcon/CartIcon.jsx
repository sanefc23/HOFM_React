import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './CartIcon.css';

function CartIcon(props) {
    return (
        <>
            <div className="cartCounterBadge">
                <h6 style={{ fontSize: '14px', color: 'white', textAlign: 'center', marginTop: '.35em', fontWeight: 'bold' }}>
                    {props.cartCounter}
                </h6>
            </div>
            <Nav.Link href="/cart"><img className="linkLogo" alt="cart" src={process.env.PUBLIC_URL + "/images/cart.png"} aria-hidden="true" /></Nav.Link>
        </>
    );
}

export default CartIcon;
