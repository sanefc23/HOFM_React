import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../context/CartContext';
import Popup from "reactjs-popup";
// import 'reactjs-popup/dist/index.css';

function Cart() {

    const { albums } = useCartContext();

    let acumulator = 0;
    albums.map((album) => acumulator = acumulator + (album.price * album.units));

    useEffect(() => {
        console.log("receiving new album set" + albums);
    }, [albums]);

    if (albums.length > 0) {
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
                    <Link to={"/"}>
                        <button className="go-back" to={"/"}>Seguir Comprando</button>
                    </Link>
                    <Popup style={{ backgroundColor: "none" }} trigger={<button className="buy">Confirmar Compra</button>} position="top left">
                        <div className="popup">
                            <h3>Primero confirmemos tus datos:</h3>
                            <input className="textField" placeholder="Nombre"></input>
                            <input className="textField" placeholder="Apellido"></input>
                            <input className="textField" placeholder="Teléfono"></input>
                            <input className="textField" placeholder="Email"></input>
                            <input className="textField" placeholder="Confirmá tu email"></input>
                            <Link to={"/checkout"}>
                                <button className="purchaseBtn">¡Comprar!</button>
                            </Link>
                        </div>
                    </Popup>
                </div>
            </div >
        );
    } else {
        return (
            <div className="containerFrame">
                <div className="emptyCart">
                    <h1 style={{ marginBottom: "1em" }}>¡Tu carrito está vacío!</h1>
                    <h3 style={{ marginBottom: "1em" }}>Volvé a la home y comezá a comprar.</h3>
                    <Link to={"/"}>
                        <button className="goHomeBtn">Volver a Home</button>
                    </Link>
                </div>
            </div >
        );
    }
}

export default Cart;
