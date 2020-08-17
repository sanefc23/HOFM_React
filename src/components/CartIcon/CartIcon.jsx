import React from 'react';

import Nav from 'react-bootstrap/Nav';
import './CartIcon.css';

function CartIcon() {
    let cartCounter = 3;

    return (
        <React.Fragment>
            <div className="cartCounterBadge">
                <h6 style={{ fontSize: '14px', color: 'white', textAlign: 'center', marginTop: '.35em', fontWeight: 'bold' }}>
                    {cartCounter}
                </h6>
            </div>
            <Nav.Link href="/"><img className="linkLogo" alt="cart" src="./images/cart.png" aria-hidden="true" /></Nav.Link>
        </React.Fragment>
    );
}

export default CartIcon;
