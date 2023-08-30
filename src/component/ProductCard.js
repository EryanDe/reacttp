import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Prix HT : {product.price} €</p>
      <p>Prix TTC : {product.price * 1.2} €</p>
      <button>Ajouter au panier</button>
    </div>
  );
}

export default ProductCard;
