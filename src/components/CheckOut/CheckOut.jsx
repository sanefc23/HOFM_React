import React from 'react';
import { Link } from 'react-router-dom';
import './CheckOut.css';
import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/UserContext';
import * as firebase from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from '../../firebase';

function CheckOut() {

    const { albums, clearCart } = useCartContext();
    const { user } = useUserContext();

    let acumulator = 0;
    albums.map((album) => acumulator = acumulator + (album.price * album.units));

    const db = getFirestore();
    const orders = db.collection("orders");

    async function createOrder() {
        const buyer = {
            name: user.name,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email
        }

        const items = albums.map(album => ({ id: album.id, title: album.title, price: album.price, units: album.units }))

        const order = {
            buyer,
            items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: acumulator
        }

        orders.add(order).then(({ id }) => {
            alert(`¡Tu orden N° ${id} fue creada exitosamente!`);
        }).catch(e => {
            console.log(e);
        }).finally(clearCart);
    }

    return (
        <div className="containerFrame">
            <div className="checkOutFrame">
                <h3 id="section">Detalle de tu compra:</h3>

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
                    <button className="finishBtn" onClick={createOrder}>Finalizar</button>
                </Link>
            </div>
        </div>
    );
}

export default CheckOut;