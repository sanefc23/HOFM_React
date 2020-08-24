import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const albums =
    [
        {
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
            tracklist: []
        },
        {
            id: 2,
            artist: "St. Vincent",
            title: "Masseduction",
            genre: "Alternative",
            rating: 4,
            price: 1234,
            format: 'DVD',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia doloribus id veniam in, sed, delectus, inventore voluptate esse quis dolore porro perferendis sequi iste sint culpa eum minus optio.",
            frontCover: "front_masseduction.jpg",
            backCover: "back_masseduction.jpg",
            tracklist: []
        },
        {
            id: 3,
            artist: "Lana del Rey",
            title: "Norman Fucking Rockwell",
            genre: "Alternative",
            rating: 5,
            price: 1234,
            format: 'VINILO',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia doloribus id veniam in, sed, delectus, inventore voluptate esse quis dolore porro perferendis sequi iste sint culpa eum minus optio.",
            frontCover: "front_nfr.jpg",
            backCover: "back_nfr.jpeg",
            tracklist: []
        },
        {
            id: 4,
            artist: "Ariana Grande",
            title: "Sweetner",
            genre: "Pop",
            rating: 3,
            price: 1234,
            format: 'VINILO',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia doloribus id veniam in, sed, delectus, inventore voluptate esse quis dolore porro perferendis sequi iste sint culpa eum minus optio.",
            frontCover: "front_sweetener.jpg",
            backCover: "back_sweetener.jpg",
            tracklist: []
        },
        {
            id: 5,
            artist: "Phoenix",
            title: "Ti Amo",
            genre: "Rock",
            rating: 4,
            price: 1234,
            format: 'CD',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia doloribus id veniam in, sed, delectus, inventore voluptate esse quis dolore porro perferendis sequi iste sint culpa eum minus optio.",
            frontCover: "front_ti_amo.jpg",
            backCover: "back_ti_amo.jpg",
            tracklist: []
        },
        {
            id: 6,
            artist: "Gorillaz",
            title: "The Now Now",
            genre: "Alternative",
            rating: 4,
            price: 1234,
            format: 'VINILO',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia doloribus id veniam in, sed, delectus, inventore voluptate esse quis dolore porro perferendis sequi iste sint culpa eum minus optio.",
            frontCover: "front_the_now_now.jpg",
            backCover: "back_the_now_now.jpg",
            tracklist: []
        },
        {
            id: 7,
            artist: "Rosalía",
            title: "El Mal Querer",
            genre: "Alternative",
            rating: 4,
            price: 1234,
            format: 'CD',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia doloribus id veniam in, sed, delectus, inventore voluptate esse quis dolore porro perferendis sequi iste sint culpa eum minus optio.",
            frontCover: "front_el_mal_querer.jpg",
            backCover: "back_el_mal_querer.jpg",
            tracklist: []
        },
        {
            id: 8,
            artist: "Billie Eilish",
            title: "when we all fall asleep where do we go?",
            genre: "Alternative",
            rating: 4,
            price: 1234,
            format: 'CD',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia doloribus id veniam in, sed, delectus, inventore voluptate esse quis dolore porro perferendis sequi iste sint culpa eum minus optio.",
            frontCover: "front_asleep.jpg",
            backCover: "back_asleep.jpg",
            tracklist: []
        },
    ];

const getAlbum = (id) => {
    const product = albums.find(album => album.id === parseInt(id, 10));
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(product)
        }, 3000)
    });
}

function ItemDetailContainer() {
    const { id } = useParams();
    const [album, setAlbum] = useState({});
    const [loading, setLoading] = useState(false);

    function hideSpinner() {
        return setLoading(true);
    }

    useEffect(() => {
        getAlbum(id).then(setAlbum).then(hideSpinner);
    }, [id]);

    return (
        <>
            <Spinner loading={loading}></Spinner>
            <div className="detail-frame">
                <div className="detail-child-frame1">
                    <div>
                        <h1 className="detail-title">{album.title} - {album.artist}</h1>
                        <h5>Género: {album.genre}</h5>
                        <p className="detail-description">
                            {album.description}
                        </p>
                    </div>
                    <div className="detail-row-mini-cards">
                        <div id="valoracion" className="detail-info-mini-cards">
                            <label className="detail-info">
                                {
                                    [...Array(album.rating)].map((e, i) => <i className="fas fa-star" key={i} />)
                                }
                            </label>
                        </div>
                        <div id="formatos" style={{ textTransform: 'uppercase' }} className="detail-info-mini-cards">
                            <label className="detail-info">{album.format}</label>
                        </div>
                        <div id="price" className="detail-info-mini-cards">
                            <label className="detail-info">${album.price}</label>
                        </div>
                        {/* <form action={"/products/" + album.id} method="POST">
                        <button className="detail-addToCartButton" name="item" value="{  album.id }"> */}
                        <div id="addToCart" className="detail-info-mini-cards">
                            <ItemCount
                                initial={2}
                                min={1}
                                max={10}
                                onAdd={(count) => console.log('Añadido al carrito!')}
                            ></ItemCount>
                        </div>
                        {/* </button>
                    </form> */}
                    </div>
                    <div className="detail-row-mini-cards">
                        <img className="detail-album-cover" src={`${process.env.PUBLIC_URL}/images/albums/${album.frontCover}`} alt="" />
                        <img className="detail-album-cover" src={`${process.env.PUBLIC_URL}/images/albums/${album.backCover}`} alt="" />
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
            </div>
        </>
    );
}

export default ItemDetailContainer;
