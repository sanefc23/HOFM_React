import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar></CustomNavbar>
      <Switch>
        <Route exact path="/">
          <Home
            greeting="Bienvenido a House of Music"
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
