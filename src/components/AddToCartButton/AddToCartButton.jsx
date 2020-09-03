import React, { useEffect } from 'react';
import './AddToCartButton.css';
import { CartProvider, useCartContext } from '../context/CartContext';

function AddToCartButton(props) {
    const { albums, addAlbum, removeAlbum } = useCartContext();

    useEffect(() => {
        console.log("Rendering CartContext");
    });

    const newAlbum = { ...props.album };

    return (
        <div className="inline">
            <button className="addToCartBtn" onClick={() => addAlbum({ newAlbum })}>
                <img className="cart" alt="cart" src={process.env.PUBLIC_URL + "/images/cart_dark.png"} aria-hidden="true" />
            </button>
            <h6 className="badge">{props.counter}</h6>
        </div>
    );
}

export default AddToCartButton;
