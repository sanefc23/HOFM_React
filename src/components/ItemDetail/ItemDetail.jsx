import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

function ItemDetail(props) {
    const [counter, setCounter] = useState(1);

    function onChange(value) {
        setCounter(value);
        return counter;
    }

    return (
        <div style={{ display: props.loading ? "flex" : "none" }}>
            <div className="detail-child-frame1">
                <div>
                    <h1 className="detail-title">{props.album.title} - {props.album.artist}</h1>
                    <h5>Género: {props.album.genre}</h5>
                    <p className="detail-description">
                        {props.album.description}
                    </p>
                </div>
                <div className="detail-row-mini-cards">
                    <div id="valoracion" className="detail-info-mini-cards">
                        <label className="detail-info">
                            {
                                [...Array(props.album.rating)].map((e, i) => <i className="fas fa-star" key={i} />)
                            }
                        </label>
                    </div>
                    <div id="formatos" style={{ textTransform: 'uppercase' }} className="detail-info-mini-cards">
                        <label className="detail-info">{props.album.format}</label>
                    </div>
                    <div id="price" className="detail-info-mini-cards">
                        <label className="detail-info">${props.album.price}</label>
                    </div>
                    <div id="addToCart" className="detail-info-mini-cards">
                        <ItemCount
                            initial={counter}
                            min={1}
                            max={9}
                            onChange={onChange}
                        />
                        <AddToCartButton counter={counter} album={props.album} />
                    </div>
                </div>
                <div className="detail-row-mini-cards">
                    <img className="detail-album-cover" src={`${process.env.PUBLIC_URL}/images/albums/${props.album.frontCover}`} alt="" />
                    <img className="detail-album-cover" src={`${process.env.PUBLIC_URL}/images/albums/${props.album.backCover}`} alt="" />
                </div>
            </div>

            <div className="detail-child-frame2">
                <ol className="detail-tracklist">
                    <h3 className="detail-title">Tracklist</h3>
                    {props.album.tracklist && props.album.tracklist.map((song, key) => <li key={key}>{song}</li>)}
                </ol>
            </div >
        </ div >
    );
}

export default ItemDetail;
