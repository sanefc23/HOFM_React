import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

function ItemList({ products }) {
    return (
        <div className="wrapper">
            {
                products.map(album =>
                    <Item
                        key={album.id}
                        id={album.id}
                        artist={album.artist}
                        title={album.title}
                        frontCover={process.env.PUBLIC_URL + "/images/albums/" + album.frontCover}
                        backCover={process.env.PUBLIC_URL + "/images/albums/" + album.backCover}
                    />
                )
            }
        </div>
    );
}

export default ItemList;
