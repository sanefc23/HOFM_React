import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount(props) {
    let [counter, setCounter] = useState(props.initial);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div className="shape">
            <div className="itemCountSelector">
                <button className="counterBtn" disabled={counter <= props.min} onClick={decrement}><i className="fas fa-minus" style={{ color: "rgb(30,30,30)" }}></i></button>
                <p className="counter">{counter}</p>
                <button className="counterBtn" disabled={counter >= props.max} onClick={increment}><i className="fas fa-plus" style={{ color: "rgb(30,30,30)" }} ></i></button>
            </div>
            <button className="addToCartBtn" onClick={props.onAdd}><img className="cart" alt="cart" src="./images/cart_dark.png" aria-hidden="true" /></button>
        </div>
    );
}

export default ItemCount;
