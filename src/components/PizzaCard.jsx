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
    <div key={pizza.id} style={{ border: '1px solid #ccc', margin: '10px', flex: '1 0 21%' }}>
      <img src={pizza.img} alt={pizza.name} style={{ width: '100%', height: 'auto' }} />
      <h2>{pizza.name}</h2>
      <p><strong>Ingredientes:</strong></p>
      <div>
        {pizza.ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
            <FaPizzaSlice style={{ marginRight: '5px', color:'yellow' }} />
            <span>{ingredient}</span>
          </div>
        ))}
      </div>
      <p><strong>${pizza.price}</strong></p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', gap: '3px' }}>
        <button
          onClick={handleViewMore}
          style={{
            padding: '5px 20px',
            margin: '5px',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#138496';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#17a2b8';
            e.target.style.transform = 'scale(1)';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          Ver más
          <FaEye style={{ marginLeft: '5px' }} />
        </button>
        <button
          onClick={handleAddToCart}
          style={{
            padding: '5px 20px',
            margin: '5px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#c82333';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#dc3545';
            e.target.style.transform = 'scale(1)';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          Añadir
          <FaCartPlus style={{ marginLeft: '5px' }} />
        </button>
      </div>
    </div>
  );
}

export default CardPizza;
