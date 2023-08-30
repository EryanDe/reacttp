import React from 'react';
import { useCart } from './CartContext';
import '../styles/App.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PanierSummary =() => {

  const { cartCount } = useCart();

  

  const total = cartCount.reduce((total, item) => total + item.price, 0);

  return (
    <aside className='panier'>
      <h2>Résumé du Panier</h2>
      <ul>
        {cartCount.map((item, index) => (
          <li key={index}>
            {item.title}: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
     <Link to="/panier"> <Button>Acceder au Panier</Button></Link>
    </aside>
  );
}

export default PanierSummary;
