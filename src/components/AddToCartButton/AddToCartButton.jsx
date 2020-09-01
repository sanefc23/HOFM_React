import React from 'react';
import './AddToCartButton.css';

function AddToCartButton(props) {

    function addToCart(album) {
        alert('¡Agregado al carrito!');
        return album;
    }

    return (
        <div className="inline">
            <button className="addToCartBtn" onClick={() => addToCart}>
                <img className="cart" alt="cart" src={process.env.PUBLIC_URL + "/images/cart_dark.png"} aria-hidden="true" />
            </button>
            <h6 className="badge">{props.counter}</h6>
        </div>
    );
}

export default AddToCartButton;
