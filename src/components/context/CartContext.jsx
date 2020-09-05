import React, { useState, useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = [], children }) {
    const [albums, setAlbums] = useState(initialValue);

    function addAlbum(newAlbum) {
        const a = [...albums, newAlbum];
        setAlbums(a);
        console.log("THIS ARE ALL THE ALBUMS: ", a);
    }

    function removeAlbum(selectedAlbum) {
        const a = albums.filter(a => a.id !== selectedAlbum.id);
        setAlbums(a);
        console.log('album removed');
    }

    return <CartContext.Provider value={{ albums, addAlbum, removeAlbum }}>
        {children}
    </CartContext.Provider>
}