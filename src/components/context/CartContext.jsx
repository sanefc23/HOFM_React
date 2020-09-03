import React, { useState, useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = [], children }) {
    const [albums, setAlbums] = useState(initialValue);

    function addAlbum(newAlbum) {
        const a = [...albums, newAlbum];
        setAlbums(a);
        console.log(a);
    }

    function removeAlbum(album) {
        const a = albums.filter(a => a.id !== album.id);
        setAlbums(a);
        console.log('album removed');
    }

    return <CartContext.Provider value={{ albums, addAlbum, removeAlbum }}>
        {children}
    </CartContext.Provider>
}