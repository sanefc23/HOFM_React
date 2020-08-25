import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import albums from '../albums';
import ItemDetail from '../ItemDetail/ItemDetail'

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
