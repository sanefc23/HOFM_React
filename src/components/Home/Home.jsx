import React, { useEffect, useState } from 'react';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import albums from '../albums';

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
            <Spinner loading={loading}></Spinner>
            <h1 className="sliderTitle">Novedades</h1>
            <ItemList products={albums} />
            <h1 className="sliderTitle">Best Sellers</h1>
            <ItemList products={albums} />
        </div >
    );
}

export default Home;