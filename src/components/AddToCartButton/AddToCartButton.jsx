import React from 'react';
import './AddToCartButton.css';

function AddToCartButton(props) {
    return (
        <button className="addToCartBtn" onClick={() => alert('¡Agregado al carrito!')}>
            <img className="cart" alt="cart" src={process.env.PUBLIC_URL + "/images/cart_dark.png"} aria-hidden="true" />
        </button>
    );
}

export default AddToCartButton;
