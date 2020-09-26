import React from 'react';
import { Link } from 'react-router-dom';
import './CartIcon.css';

function CartIcon(props) {
    return (
        <>
            <div className="cartCounterBadge">
                <h6 style={{ fontSize: '14px', color: 'white', textAlign: 'center', marginTop: '.35em', fontWeight: 'bold' }}>{props.cartCounter}</h6>
            </div>
            <Link to={"/cart"}><img className="linkLogo" alt="cart" src={process.env.PUBLIC_URL + "/images/cart.png"} aria-hidden="true" /></Link>
        </>
    );
}

export default CartIcon;
