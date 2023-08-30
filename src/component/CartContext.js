import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState([]);

  const addToCart = (product) => {
    setCartCount([...cartCount, product]);
  };

  const cartItemCount = cartCount.length;

  return (
    <CartContext.Provider value={{ cartCount, addToCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
export {CartContext}
;
