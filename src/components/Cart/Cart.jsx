import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import { CartProvider, useCartContext } from '../context/CartContext';

function Cart() {
    const { albums, addAlbum, removeAlbum } = useCartContext();
    return (
            <div className="containerFrame">
                <div className="cartFrame">
                    <h3 id="section">Tus productos</h3>

                    {albums.map(album => <CartItem album={album} />)}

                    <div id="cart-total">
                        <hr />
                        <h3 id="section">Total: $ 1299.-</h3>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="go-back" onclick="window.location.href='/'">Seguir Comprando</button>
                    <button className="buy">Confirmar Compra</button>
                </div>
            </div>
    );
}

export default Cart;
