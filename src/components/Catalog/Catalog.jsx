import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import './Catalog.css';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

function Catalog(props) {
    const { format = undefined } = useParams();
    const { genre = undefined } = useParams();
    const [albums, setAlbums] = useState([]);
    const [genres, setGenres] = useState([]);
    const [headerMessage, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const albumCollection = db.collection('albums');
        const genresCollection = db.collection('genres');

        genresCollection.get().then((querySnapshot) => {
            setGenres(querySnapshot.docs.map(doc => ({ ...doc.data() })));
        }).catch((error) => console.log("Error getting genres from Firebase", error));

        if (format === undefined) {
            //Search by genre
            const byGenreAlbums = albumCollection.where('genre', '==', genre);
            byGenreAlbums.get().then((querySnapshot) => {
                setMessage(`Encontramos estos albums de género ${genres[genre - 1]}`);
                setAlbums(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            }).catch((error) => console.log("Error getting albums from Firebase", error)).finally(() =>
                setLoading(false)
            );
        } else {
            //Search by format
            const byFormatAlbums = albumCollection.where('format', '==', format);
            byFormatAlbums.get().then((querySnapshot) => {
                setMessage(`Encontramos estos ${format.toUppercase}S`);
                setAlbums(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            }).catch((error) => console.log("Error getting albums from Firebase", error)).finally(() =>
                setLoading(false)
            );
        }
    }, [format, genre, genres, albums, loading]);

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
                        <h1 className="mainText">{headerMessage}</h1>
                        <ItemList products={albums} />
                    </div> :
                    <div style={{ margin: "0 auto", marginTop: "6em" }}><h1 className="mainText">Lo sentimos, no hay albums en esta categoría.</h1></div>
                }
            </div >
        );
    }
}

export default Catalog;
