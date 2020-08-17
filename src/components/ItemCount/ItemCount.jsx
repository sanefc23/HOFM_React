import { React, useState } from 'react';
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
        <>
            <div className="itemCountSelector">
                <button className="counterBtn" disabled={counter <= props.min} onClick={decrement}><i className="fas fa-minus" style={{ color: "white" }}></i></button>
                <p className="counter">{counter}</p>
                <button className="counterBtn" disabled={counter >= props.max} onClick={increment}><i className="fas fa-plus" style={{ color: "white" }} ></i></button>
            </div>
            <button className="addToCartBtn" onClick={props.onAdd}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
