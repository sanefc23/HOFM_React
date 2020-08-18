import React from 'react';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ItemList from '../ItemList/ItemList';

function Home(props) {
    return (
        <div className="centerFrame">
            <Jumbotron className="welcomeJumbotron">
                <h1>{props.greeting}</h1>
            </Jumbotron>
            <ItemList />
        </div >
    );
}

export default Home;
