import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const { id } = useParams();
    const [album, setAlbum] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const albumCollection = db.collection('albums');
        const currentAlbum = albumCollection.doc(id);

        currentAlbum.get().then((doc) => {
            setAlbum({
                id: doc.id, ...doc.data()
            });
        }).catch((error) => {
            console.log("Error, could not get item.", error);
        }).finally(() =>
            setLoading(true));
    }, [id, album]);

    return (
        <>
            <div className="detail-frame">
                <Spinner loading={loading} />
                <ItemDetail
                    loading={loading}
                    album={album}
                />
            </div>
        </>
    );
}

export default ItemDetailContainer;
