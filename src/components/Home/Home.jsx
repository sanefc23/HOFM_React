import React from 'react';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ItemCount from '../ItemCount/ItemCount';

function Home(props) {
    return (
        <div className="centerFrame">
            <Jumbotron className="welcomeJumbotron">
                <h1>{props.greeting}</h1>
            </Jumbotron>
            <br />
            <ItemCount
                initial={2}
                min={1}
                max={10}
                onAdd={(count)=> console.log('Añadido al carrito!')}
            ></ItemCount>
        </div >
    );
}

export default Home;
