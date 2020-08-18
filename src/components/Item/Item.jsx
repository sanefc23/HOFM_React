import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount'

function Item(props) {
    return (
        <>
            <section className="product">
                <a href="/">
                    <img className="albumCover" src={props.frontCover} alt={props.album} />
                </a>
                <div className="bkg">
                    <h5 className="artist">{props.artist}</h5>
                    <h5 className="album">{props.title}</h5>
                    <ItemCount
                        initial={2}
                        min={1}
                        max={10}
                        onAdd={(count) => console.log('Añadido al carrito!')}
                    ></ItemCount>
                </div>
            </section>
        </>
    );
}

export default Item;
