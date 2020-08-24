import React, { useEffect, useState } from 'react';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ItemList from '../ItemList/ItemList';
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

function getFromRemote() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(albums)
        }, 2000)
    })
}



function Home(props) {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);

    function hideSpinner() {
        return setLoading(true);
    }

    useEffect(() => {
        getFromRemote().then(setAlbums).then(hideSpinner);
    }, []);
    return (
        <div className="containerFrame">
            <Jumbotron className="welcomeJumbotron">
                <h2>{props.greeting}</h2>
            </Jumbotron>
            <h1 className="sliderTitle">Novedades</h1>
            <Spinner loading={loading}></Spinner>
            <ItemList products={albums} />
            <h1 className="sliderTitle">Best Sellers</h1>
            <Spinner loading={loading}></Spinner>
            <ItemList products={albums} />
        </div >
    );
}

export default Home;
