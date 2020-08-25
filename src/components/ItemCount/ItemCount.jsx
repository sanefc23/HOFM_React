import React, { useState } from 'react';
import './ItemCount.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

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
                <button className="counterBtn" disabled={counter <= props.min} onClick={decrement}><i className="fas fa-minus" style={{ color: "rgb(30,30,30)", padding: "0", margin: "0 auto" }}></i></button>
                <p className="counter">{counter}</p>
                <button className="counterBtn" disabled={counter >= props.max} onClick={increment}><i className="fas fa-plus" style={{ color: "rgb(30,30,30)" }} ></i></button>
            </div>
            <AddToCartButton />
        </div>
    );
}

export default ItemCount;
