import React, { createContext, useState, useEffect, useMemo } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/pizzas.json')
      .then(response => response.json())
      .then(data => setPizzas(data.slice(0, 4)));
  }, []);

  const addToCart = (pizza) => {
    setCart(prevCart => [...prevCart, pizza]);
  };

  const totalAmount = useMemo(() => {
    return cart.reduce((sum, pizza) => sum + pizza.price, 0);
  }, [cart]);

  const formattedTotalAmount = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(totalAmount);

  return (
    <PizzaContext.Provider value={{ pizzas, cart, setCart, addToCart, totalAmount, formattedTotalAmount }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
