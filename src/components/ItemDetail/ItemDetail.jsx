import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(props) {
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
                    {/* <form action={"/products/" + album.id} method="POST">
    <button className="detail-addToCartButton" name="item" value="{  album.id }"> */}
                    <div id="addToCart" className="detail-info-mini-cards">
                        <ItemCount
                            initial={1}
                            min={1}
                            max={10}
                            onAdd={(count) => console.log('Añadido al carrito!')}
                        ></ItemCount>
                    </div>
                    {/* </button>
</form> */}
                </div>
                <div className="detail-row-mini-cards">
                    <img className="detail-album-cover" src={`${process.env.PUBLIC_URL}/images/albums/${props.album.frontCover}`} alt="" />
                    <img className="detail-album-cover" src={`${process.env.PUBLIC_URL}/images/albums/${props.album.backCover}`} alt="" />
                </div>
            </div>

            <div className="detail-child-frame2">
                <ol className="detail-tracklist">
                    <h3 className="detail-title">Tracklist</h3>
                    <br />
                    <h5>No disponible</h5>
                    {/* {
    album.tracklist !== [] ?
        album.tracklist.map(song => <li>{song}</li>) : 
} */}
                </ol>
            </div>
        </ div>
    );
}

export default ItemDetail;
