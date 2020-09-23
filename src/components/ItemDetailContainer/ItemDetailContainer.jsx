import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const { id } = useParams();
    const [album, setAlbum] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const albumCollection = db.collection('albums');
        const currentAlbum = albumCollection.doc(id);

        currentAlbum.get().then((doc) => {
            if (doc.exists) {
                setNotFound(false);
                setAlbum({
                    id: doc.id, ...doc.data()
                });
            } else {
                setNotFound(true);
            }
        }).catch((error) => {
            console.log("Error, could not get item.", error);
        }).finally(() =>
            setLoading(true));
    }, [id, album]);

    if (!notFound) {
        return (<>
            <div className="detail-frame">
                <Spinner loading={loading} />
                <ItemDetail
                    loading={loading}
                    album={album}
                />
            </div>
        </>)
    } else {
        return (
            <>
                <div className="detail-frame">
                    <div style={{ display: 'flex', height: '50vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ margin: '0 auto' }}>Lo sentimos, este album no existe.</h2>
                    </div>
                </div>
            </>)
    }

}

export default ItemDetailContainer;
