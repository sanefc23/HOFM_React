import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CheckOut.css';
import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/UserContext';

function CheckOut() {

    const { albums } = useCartContext();
    const { user } = useUserContext();

    let acumulator = 0;
    albums.map((album) => acumulator = acumulator + (album.price * album.units));

    useEffect(() => {
        console.log("receiving new album set" + albums);
    }, [albums]);

    return (
        <div className="containerFrame">
            <div className="checkOutFrame">
                <h3 id="section">Tu comprobante:</h3>

                <div className="checkOutUser">
                    <h5>Nombre Completo: {user.name} {user.lastName}</h5>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                        <h6>Teléfono: {user.phone}</h6>
                        <h6>Email: {user.email}</h6>
                    </div>
                </div>

                {albums.map(album => <div className="checkOutList">
                    <div className="checkOutItem">
                        <h6>{album.artist} - {album.title}</h6>
                        <h6>${album.price * album.units} ({album.units}u.) </h6>
                    </div>
                </div>)}

                <div id="cart-total">
                    <hr className="checkOutHr" />
                    <h3 id="section">Total: $ {acumulator} .-</h3>
                </div>
            </div>

            <div className="action-buttons">
                <Link to={"/"}>
                    <button className="finishBtn" to={"/"}>Finalizar</button>
                </Link>
            </div>
        </div>
    );
}

export default CheckOut;


//{ buyer: { name, phone, email }, items: [{id, title, price, units}], total  }