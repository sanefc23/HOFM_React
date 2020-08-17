import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Home
        greeting="Bienvenido a House of Music"
      />
    </>
  );
}

export default App;
