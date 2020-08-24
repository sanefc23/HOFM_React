import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
    function toDetail(id) {
        console.log('going to detail id = ' + id);
    }

    return (
        <Link to={`/products/${props.id}`} style={{ textDecoration: 'none' }}>
            <section className="product" onClick={() => toDetail(props.id)}>
                <img className="albumCover" src={props.frontCover} alt={props.album} />
                <div className="bkg">
                    <h5 className="artist">{props.artist}</h5>
                    <h5 className="album">{props.title}</h5>
                </div>
            </section>
        </ Link>
    );
}

export default Item;
