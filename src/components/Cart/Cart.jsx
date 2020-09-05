import React, { useEffect } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../context/CartContext';

function Cart() {

    const { albums } = useCartContext();

    let acumulator = 0;
    albums.map((album) => acumulator = acumulator + (album.price * album.units));

    useEffect(() => {
        console.log("receiving new album set" + albums);
    }, [albums]);

    return (
        <div className="containerFrame">
            <div className="cartFrame">
                <h3 id="section">Tus productos</h3>

                {albums.map(album => <CartItem album={album} />)}

                <div id="cart-total">
                    <hr />
                    <h3 id="section">Total: $ {acumulator} .-</h3>
                </div>
            </div>

            <div className="action-buttons">
                <button className="go-back" onClick="">Seguir Comprando</button>
                <button className="buy">Confirmar Compra</button>
            </div>
        </div>
    );
}

export default Cart;
