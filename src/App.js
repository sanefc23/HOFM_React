import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { CartProvider, useCartContext } from './components/context/CartContext';


function App() {
  return (
    <CartProvider>
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
