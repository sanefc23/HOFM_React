import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import './Home.css';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

function Home(props) {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();

        const albumCollection = db.collection('albums');

        albumCollection.get().then((querySnapshot) => {
            setAlbums(querySnapshot.docs.map(doc => doc.data()));
            console.log(albums);
        }).catch((error) => console.log("Error getting albums from Firebase", error)).finally(() =>
            setLoading(false)
        );
    }, [albums, loading]);

    if (loading === true) {
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