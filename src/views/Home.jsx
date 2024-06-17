import React, { useContext } from 'react';
import PizzaContext from '../context/PizzaContext';
import CardPizza from '../components/PizzaCard';

function Home() {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {pizzas.map(pizza => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Home;
