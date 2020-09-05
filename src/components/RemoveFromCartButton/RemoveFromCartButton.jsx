import React, { useEffect } from 'react';
import { useCartContext } from '../context/CartContext';
import './RemoveFromCartButton.css';

function RemoveFromCartButton(props) {
    const { removeAlbum } = useCartContext();

    useEffect(() => {
        console.log("receiving new album set");
    });

    return (
        <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={() => removeAlbum(props.album)}>
            <img className="deleteBtn" alt="Delete" src={`${process.env.PUBLIC_URL}/images/delete_item.png`} aria-hidden="true" />
        </button>
    );
}

export default RemoveFromCartButton;
