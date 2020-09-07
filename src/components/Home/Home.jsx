import React, { useEffect, useState } from 'react';
import './Home.css';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import albums from '../albums';

function getFromRemote() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(albums)
        }, 1000)
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

    if (loading === false) {
        return (
            <div className="containerFrame">
                <Spinner loading={loading} />
            </div>
        );
    } else {
        return (
            <div className="containerFrame">
                <img className="banner" src={process.env.PUBLIC_URL + "/images/banners/" + props.greeting} alt="banner" />
                <h1 className="sliderTitle">Novedades</h1>
                <ItemList products={albums} />
                <h1 className="sliderTitle">Best Sellers</h1>
                <ItemList products={albums} />
            </div >
        );
    }
}

export default Home;