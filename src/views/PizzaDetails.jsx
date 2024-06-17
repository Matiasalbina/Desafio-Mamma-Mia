import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PizzaContext from '../context/PizzaContext';
import { FaPizzaSlice } from 'react-icons/fa';

function PizzaDetails() {
  const { id } = useParams();
  const { pizzas } = useContext(PizzaContext);
  const pizza = pizzas.find(pizza => pizza.id === id);

  if (!pizza) {
    return <div>¡Cargando detalles!</div>;
  }

  return (
    <div style={{ display: 'flex', padding: '20px', gap: '10px',border: '1px solid #ccc' }}>
      <img src={pizza.img} alt={pizza.name} style={{ width: '300px', height: 'auto' }} />
      <div>
        <div style={{ textAlign: 'left' }}>
          <h2>{pizza.name}</h2>
          <hr />
          <p>{pizza.desc}</p>
          <p><strong>Ingredientes:</strong></p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <FaPizzaSlice style={{ marginRight: '5px', color: 'yellow' }} />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p><strong>Price: ${pizza.price}</strong></p>
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
