import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Switch>
        <Route exact path="/">
          <Home
            greeting="Bienvenido a House of Music"
          />
        </Route>
        <Route path="/products/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
