import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PizzaContext from '../context/PizzaContext';
import { FaEye, FaCartPlus, FaPizzaSlice } from 'react-icons/fa';

function CardPizza({ pizza }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(PizzaContext);

  const handleViewMore = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  return (
    <div key={pizza.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', flex: '1 0 21%' }}>
      <img src={pizza.img} alt={pizza.name} style={{ width: '100%', height: 'auto' }} />
      <h2>{pizza.name}</h2>
      <p><strong>Ingredientes:</strong></p>
      <div>
        {pizza.ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
            <FaPizzaSlice style={{ marginRight: '5px', color:'yellow' }} />
            <span>{ingredient}</span>
          </div>
        ))}
      </div>
      <p><strong>${pizza.price}</strong></p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', gap: '10px' }}>
        <button
          onClick={handleViewMore}
          style={{ padding: '5px 20px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Ver más
          <FaEye style={{ marginLeft: '5px' }} />
        </button>
        <button
          onClick={handleAddToCart}
          style={{ padding: '5px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Añadir
          <FaCartPlus style={{ marginLeft: '5px' }} />
        </button>
      </div>
    </div>
  );
}

export default CardPizza;
