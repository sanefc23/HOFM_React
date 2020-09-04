import React, { useState, useContext } from 'react';

export const CartContext = React.createContext([]   );

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = [{
    id: 1,
    artist: "Dua Lipa",
    title: "Future Nostalgia",
    genre: "Pop",
    rating: 5,
    price: 1234,
    format: 'CD',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia doloribus id veniam in, sed, delectus, inventore voluptate esse quis dolore porro perferendis sequi iste sint culpa eum minus optio.",
    frontCover: "front_future_nostalgia.jpg",
    backCover: "back_future_nostalgia.jpg",
    tracklist: [],
    units: 2
},], children }) {
    const [albums, setAlbums] = useState(initialValue);

    function addAlbum(newAlbum) {
        const a = [...albums, newAlbum];
        setAlbums(a);
        console.log("THIS ARE ALL THE ALBUMS: " + a);
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