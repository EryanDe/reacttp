import React from 'react';

function CartSummary({ cartItems, onClose }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price,
    0
  );

  return (
    <aside>
      <h2>Résumé du panier</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - {item.product.price} €
          </li>
        ))}
      </ul>
      <p>Total : {totalPrice} €</p>
      <button onClick={onClose}>Fermer</button>
    </aside>
  );
}

export default CartSummary;
