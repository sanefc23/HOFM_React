import React, { useState, useEffect } from 'react';
import Popup from "reactjs-popup";
import { Link } from 'react-router-dom';
import './BuyPopup.css';
import { useUserContext } from '../context/UserContext';

function useTextInput() {
    const [input, setInput] = useState('');

    function onInput(evt) {
        setInput(evt.target.value);
    };

    return {
        onInput,
        value: input,
    }
}

function BuyPopup() {
    const { saveUser } = useUserContext();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const nameInput = useTextInput();
    const lastNameInput = useTextInput();
    const phoneInput = useTextInput();
    const emailInput = useTextInput();
    const confirmEmailInput = useTextInput();

    const isValid = nameInput.value.length > 0 &&
        lastNameInput.value.length > 0 &&
        phoneInput.value.length > 0 &&
        emailInput.value.length > 0 &&
        confirmEmailInput.value.length > 0 &&
        emailInput.value === confirmEmailInput.value;


    useEffect(() => {
        console.log("BUY POPUP");
    }, [name, lastName, phone, email, confirmEmail, isValid]);

    return (
        <Popup style={{ backgroundColor: "none" }} trigger={<button className="buy">Confirmar Compra</button>} position="top left">
            <div className="popup">
                <h3>Primero confirmemos tus datos:</h3>
                <input className="textField" type="text" {...nameInput} onChange={() => setName(nameInput.value)} name='name' placeholder="Nombre"></input>
                <input className="textField" type="text" {...lastNameInput} onChange={() => setLastName(lastNameInput.value)} name='lastName' placeholder="Apellido"></input>
                <input className="textField" type="text" {...phoneInput} onChange={() => setPhone(phoneInput.value)} name='phone' placeholder="Teléfono"></input>
                <input className="textField" type="email" {...emailInput} onChange={() => setEmail(emailInput.value)} name='email' placeholder="Email"></input>
                <input className="textField" type="email" {...confirmEmailInput} onChange={() => setConfirmEmail(confirmEmailInput.value)} name='confirmEmail' placeholder="Confirmá tu email"></input>
                <Link to={"/checkout"}>
                    <button disabled={!isValid} className="purchaseBtn" onClick={() => saveUser(
                        {
                            name: nameInput.value,
                            lastName: lastNameInput.value,
                            phone: phoneInput.value,
                            email: emailInput.value
                        }
                    )}>¡Comprar!</button>
                </Link>
            </div>
        </Popup >
    );
}

export default BuyPopup;
