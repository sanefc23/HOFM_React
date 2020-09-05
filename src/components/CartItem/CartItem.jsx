import React from 'react';
import './CartItem.css';    
import RemoveFromCartButton from '../RemoveFromCartButton/RemoveFromCartButton';

function CartItem(props) {
    return (
        <div className="cartItem">
            <img className="cartItemCover" src={`${process.env.PUBLIC_URL}/images/albums/${props.album.frontCover}`} alt="" />
            <div className="cartItemTitle">
                <p className="itemArtist">{props.album.artist}</p>
                <p className="itemTitle">{props.album.title}</p>
            </div>
            <div className="containers">
                <div id="cart-format">
                    <p className="containers-text" style={{ textTransform: "uppercase" }}>CD</p>
                </div>
                <div id="cart-units">
                    <p className="containers-text">{props.album.units}</p>
                </div>
                <div id="cart-price">
                    <p className="containers-text">${props.album.price * props.album.units}.-</p>
                </div>
                <RemoveFromCartButton album={props.album} />
            </div>
        </div>
    );
}

export default CartItem;