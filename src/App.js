import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { CartProvider, useCartContext } from './components/context/CartContext';

function App() {
  const { albums } = useCartContext();
  return (
    <CartProvider value={albums}>
      <BrowserRouter>
        <CustomNavbar />
        <Switch>
          <Route exact path="/">
            <Home
              greeting="banner1.png"
            />
          </Route>
          <Route path="/products/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/catalog/:format">
            <Catalog />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider >
  );
}

export default App;
