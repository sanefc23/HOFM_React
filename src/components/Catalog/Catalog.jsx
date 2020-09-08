import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import './Catalog.css';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

function Catalog(props) {
    const { format } = useParams();
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();

        const albumCollection = db.collection('albums');

        const byFormatAlbums = albumCollection.where('format', '==', format);

        byFormatAlbums.get().then((querySnapshot) => {
            setAlbums(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }).catch((error) => console.log("Error getting albums from Firebase", error)).finally(() =>
            setLoading(false)
        );
        console.log(format);
        console.log(albums);
    }, [format, albums, loading]);

    if (loading === true) {
        return (
            <div className="catalogFrame">
                <Spinner loading={loading} />
            </div>
        );
    } else {
        return (
            <div className="catalogFrame">
                {albums.length !== 0 ?
                    <div>
                        <h1 className="mainText">Todos nuestros {format.toUpperCase()}</h1>
                        <ItemList products={albums} />
                    </div> :
                    <div style={{ margin: "0 auto", marginTop: "6em" }}><h1 className="mainText">Lo sentimos, no hay albums en esta categoría.</h1></div>
                }
            </div >
        );
    }
}

export default Catalog;