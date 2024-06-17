import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import PizzaDetails from './views/PizzaDetails';
import Cart from './views/Carrito'
import NavPizza from './components/Navbar';

function App() {
  return (
    <Router>
      <NavPizza />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<PizzaDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
