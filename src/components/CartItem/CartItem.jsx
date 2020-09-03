import React from 'react';
import './CartItem.css';

function CartItem(props) {
    return (
            <div className="cartItem">
                <img className="cartItemCover" src={`${process.env.PUBLIC_URL}/images/albums/${props.album.frontCover}`} alt="" />
                <div className="cartItemTitle">
                    <p className="itemTitle darkFont">{props.album.artist}</p>
                    <p className="itemTitle darkFont">{props.album.title}</p>
                </div>
                <div className="containers">
                    <div id="cart-format">
                        <p className="containers-text darkFont" style={{ textTransform: "uppercase" }}>CD</p>
                    </div>
                    <div id="cart-units">
                        <p className="containers-text darkFont">{props.album.amount}</p>
                    </div>
                    <div id="cart-price">
                        <p className="containers-text darkFont">${props.album.price}.-</p>
                    </div>
                    <form action="/cart" method="POST">
                        <input type="image" className="delete_item" src={`${process.env.PUBLIC_URL}/images/delete_item.png`} name="clearItem"
                            value={1} alt="delete" />
                    </form>
                </div>
            </div>
    );
}

export default CartItem;