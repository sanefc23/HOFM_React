import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

function ItemCount(props) {
    /*     Crea un componente <ItemCount initial=”” min=”” max=”” onAdd=””>
    que tenga un botón y controles para incrementar (+) y decrementar (-) el
    count inicial pero nunca irse de los límites min/max. Al clickear el botón
    debe invocar el callback de onAdd(count) pasando el count del counter */
    let [counter, setCounter] = useState(props.initial);

    function increment(event) {
        counter = counter + 1;
        setCounter(counter);
        console.log(counter);
    }

    function decrement(event) {
        counter = counter - 1;
        setCounter(counter);
        console.log(counter);
    }

    function onAdd(counter) {
    }

    return (
        <React.Fragment>
            <div className="itemCountSelector">
                <button className="counterBtn" disabled={counter <= props.min} onClick={decrement}><i className="fas fa-minus" style={{ color: "white" }}></i></button>
                <p className="counter">{counter}</p>
                <button className="counterBtn" disabled={counter >= props.max} onClick={increment}><i className="fas fa-plus" style={{ color: "white" }} ></i></button>
            </div>
            <button className="addToCartBtn" onClick={onAdd}>Agregar al carrito</button>
        </React.Fragment>
    );
}

export default ItemCount;
