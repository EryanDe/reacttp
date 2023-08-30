import React from 'react';
import ReactDOM from 'react-dom/client'; // Modifiez cette ligne
import './styles/index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './component/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <App />
      
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
