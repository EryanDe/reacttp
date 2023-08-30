import React, { useState } from 'react';

const ProductFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({

    category: '',
    priceMin: '',
    priceMax: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleApplyFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="product-filter">

      <select name="category" onChange={handleFilterChange}>
        <option value="">Toutes les catégories</option>
        <option value="electronics">Électroniques</option>
        <option value="men's clothing">Vêtements Homme</option>
        <option value="women's clothing">Vêtements Femme</option>
        <option value="jewelery">Bijoux</option>

      </select>
      <input
        type="number"
        name="priceMin"
        placeholder="Prix min"
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="priceMax"
        placeholder="Prix max"
        onChange={handleFilterChange}
      />
      <button onClick={handleApplyFilter}>Appliquer</button>
    </div>
  );
};

export default ProductFilter;