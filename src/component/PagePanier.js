import { useCart } from './CartContext';
import '../styles/App.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PagePanier =() => {

  const { cartCount } = useCart();

  

  const total = cartCount.reduce((total, item) => total + item.price, 0);
  

  return (
    <div>
      <h2>Résumé du Panier</h2>
      <ul>
        {cartCount.map((item, index) => (
            <>
<img src={item.image} alt="produit" />
           
          <li key={index}>
            {item.title}: ${item.price.toFixed(2)}
          </li>
          </>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    
    </div>
  );
}

export default PagePanier;
