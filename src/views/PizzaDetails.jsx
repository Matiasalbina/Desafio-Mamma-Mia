import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PizzaContext from '../context/PizzaContext';

function PizzaDetails() {
  const { id } = useParams();
  const { pizzas } = useContext(PizzaContext);
  const pizza = pizzas.find(pizza => pizza.id === id);

  if (!pizza) {
    return <div>¡Cargando detalles!</div>;
  }

  return (
    <div style={{ display: 'flex', padding: '20px', gap: '10px' }}>
      <div>
        <img src={pizza.img} alt={pizza.name} style={{ width: '300px', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ flex: 1 }}>
          <h2>{pizza.name}</h2>
          <p>{pizza.desc}</p>
          <p><strong>Ingredientes:</strong></p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p><strong>Price: ${pizza.price}</strong></p>
        </div>
        <div style={{ alignSelf: 'flex-end' }}>
          <button
            style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaDetails;
