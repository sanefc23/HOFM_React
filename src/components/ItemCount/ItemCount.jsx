import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

function ItemCount(props) {
    /*     Crea un componente <ItemCount initial=”” min=”” max=”” onAdd=””>
    que tenga un botón y controles para incrementar (+) y decrementar (-) el
    count inicial pero nunca irse de los límites min/max. Al clickear el botón
    debe invocar el callback de onAdd(count) pasando el count del counter */
    let [counter, setCounter] = useState(null);

    function onAdd(count) {
    }

    function increment(event) {
        counter = props.initial;
        setCounter(counter++);
    }

    function decrement(event) {
        console.log('---');
        setCounter(counter--);
        console.log(counter);
    }

    return (
        <React.Fragment>
            <div className="itemCountSelector">
                <button className="counterBtn" onClick={decrement}><i className="fas fa-minus" style={{ color: "white" }}></i></button>
                <p className="counter">{props.initial}</p>
                <button className="counterBtn" onClick={increment}><i className="fas fa-plus" style={{ color: "white" }} ></i></button>
            </div>
            <button className="addToCartBtn">Agregar al carrito</button>
        </React.Fragment>
    );
}

export default ItemCount;
