import React from 'react';
import './Cart.css';


function Cart() {
    return (
        <>
            <div className="containerFrame">
                <div className="cartFrame">
                    <h3 id="section">Tus productos</h3>
                    <div className="cartItem">
                        <img className="cartItemCover" src={`${process.env.PUBLIC_URL}/images/albums/front_masseduction.jpg`} alt="" />
                        <div className="cartItemTitle">
                            <p className="itemTitle darkFont">St. Vincent</p>
                            <p className="itemTitle darkFont">Masseduction</p>
                        </div>
                        <div className="containers">
                            <div id="cart-format">
                                <p className="containers-text darkFont" style={{ textTransform: "uppercase" }}>CD</p>
                            </div>
                            <div id="cart-units">
                                <p className="containers-text darkFont">Cantidad</p>
                            </div>
                            <div id="cart-price">
                                <p className="containers-text darkFont">$ 1299</p>
                            </div>
                            <form action="/cart" method="POST">
                                <input type="image" className="delete_item" src={`${process.env.PUBLIC_URL}/images/delete_item.png`} name="clearItem"
                                    value={1} alt="delete" />
                            </form>
                        </div>
                    </div>
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
        </>
    );
}

export default Cart;
