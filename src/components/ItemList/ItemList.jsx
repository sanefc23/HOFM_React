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
                        frontCover={'./images/albums/' + album.frontCover}
                        backCover={'./images/albums/' + album.backCover}
                    />
                )
            }
        </div>
    );
}

export default ItemList;
