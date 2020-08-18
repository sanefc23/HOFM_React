import React, { useEffect, useState } from 'react';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ItemList from '../ItemList/ItemList';

const albums =
    [
        {
            id: 1,
            artist: "Dua Lipa",
            title: "Future Nostalgia",
            frontCover: "front_future_nostalgia.jpg",
            backCover: "back_future_nostalgia.jpg",
        },
        {
            id: 2,
            artist: "St. Vincent",
            title: "Masseduction",
            frontCover: "front_masseduction.jpg",
            backCover: "back_masseduction.jpg",
        },
        {
            id: 3,
            artist: "Lana del Rey",
            title: "Norman Fucking Rockwell",
            frontCover: "front_nfr.jpg",
            backCover: "back_nfr.jpg",
        },
        {
            id: 4,
            artist: "Ariana Grande",
            title: "Sweetner",
            frontCover: "front_sweetener.jpg",
            backCover: "back_sweetner.jpg",
        },
        {
            id: 5,
            artist: "Phoenix",
            title: "Ti Amo",
            frontCover: "front_ti_amo.jpg",
            backCover: "back_ti_amo.jpg",
        },
        {
            id: 6,
            artist: "Gorillaz",
            title: "The Now Now",
            frontCover: "front_the_now_now.jpg",
            backCover: "back_the_now_now.jpg",
        },
        {
            id: 7,
            artist: "Rosalía",
            title: "El Mal Querer",
            frontCover: "front_el_mal_querer.jpg",
            backCover: "back_el_mal_querer.jpg",
        },
        {
            id: 8,
            artist: "Billie Eilish",
            title: "when we all fall asleep where do we go?",
            frontCover: "front_asleep.jpg",
            backCover: "back_asleep.jpg",
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
    useEffect(() => {
        getFromRemote().then(albs => {
            setAlbums(albs);
        })
    }, []);
    return (
        <div className="centerFrame">
            <Jumbotron className="welcomeJumbotron">
                <h2>{props.greeting}</h2>
            </Jumbotron>
            <ItemList products={albums} />
        </div >
    );
}

export default Home;
