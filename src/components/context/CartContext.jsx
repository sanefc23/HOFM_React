import React, { useState, useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = [], children }) {
    const [albums, setAlbums] = useState(initialValue);

    function addAlbum(newAlbum) {
        const exists = albums.findIndex(existingAlbum => existingAlbum.id === newAlbum.id);
        if (exists !== -1) {
            albums[exists] = { ...newAlbum, units: albums[exists].units + newAlbum.units };
            const a = [...albums];
            setAlbums(a);
        } else {
            const a = [...albums, newAlbum];
            setAlbums(a);
        }
    }

    function removeAlbum(selectedAlbum) {
        const a = albums.filter(a => a.id !== selectedAlbum.id);
        setAlbums(a);
    }

    return <CartContext.Provider value={{ albums, addAlbum, removeAlbum }}>
        {children}
    </CartContext.Provider>
}