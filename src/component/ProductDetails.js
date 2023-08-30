import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams(); // Récupérez l'ID du produit depuis les paramètres d'URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Chargez les détails du produit en fonction de l'ID (utilisez une API ou un autre mécanisme de données)
    // Par exemple, vous pouvez appeler une API pour obtenir les détails du produit
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Description: {product.description}</p>
      <p>Prix: ${product.price}</p>
      {/* Ajoutez d'autres informations sur le produit ici */}
    </div>
  );
}

export default ProductDetail;
