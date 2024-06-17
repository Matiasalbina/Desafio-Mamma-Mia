import React, { useContext } from 'react';
import PizzaContext from '../context/PizzaContext';

function Cart() {
  const { cart, setCart } = useContext(PizzaContext);

  const cartSummary = cart.reduce((summary, pizza) => {
    if (summary[pizza.id]) {
      summary[pizza.id].quantity += 1;
      summary[pizza.id].totalPrice += pizza.price;
    } else {
      summary[pizza.id] = {
        ...pizza,
        quantity: 1,
        totalPrice: pizza.price,
      };
    }
    return summary;
  }, {});

  const totalAmount = Object.values(cartSummary).reduce((sum, pizza) => sum + pizza.totalPrice, 0);

  const formattedTotalAmount = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(totalAmount);

  const handleAddUnit = (pizza) => {
    setCart(prevCart => [...prevCart, pizza]);
  };

  const handleRemoveUnit = (pizza) => {
    setCart(prevCart => {
      const pizzaIndex = prevCart.findIndex(p => p.id === pizza.id);
      if (pizzaIndex !== -1) {
        const newCart = [...prevCart];
        newCart.splice(pizzaIndex, 1);
        return newCart;
      }
      return prevCart;
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {Object.values(cartSummary).map((pizza, index) => (
            <div key={index} style={{ display: 'flex', border: '1px solid #ccc', padding: '10px', margin: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={pizza.img} alt={pizza.name} style={{ width: '150px', height: 'auto', marginRight: '20px' }} />
                <div>
                  <h3 style={{ margin: 0 }}>{pizza.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={() => handleRemoveUnit(pizza)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
                      -
                    </button>
                    <span>{pizza.quantity}</span>
                    <button onClick={() => handleAddUnit(pizza)} style={{ padding: '5px 10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p style={{ margin: 0 }}><strong>Precio:</strong> {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(pizza.price)}</p>
                <p style={{ margin: 0 }}><strong>Total:</strong> {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(pizza.totalPrice)}</p>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <h3>Total a pagar: {formattedTotalAmount}</h3>
            <button
              style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', marginTop: '10px' }}
            >
              Ir a pagar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
