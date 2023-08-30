import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useCart } from './CartContext';
import PanierSummary from './PannierSummary';
const CustomNavbar = () => {
  const {cartItemCount} = useCart();

  const [showPanier, setShowPanier] = useState(false);

  const togglePanier = () => {
    setShowPanier(!showPanier)
  }
  return (

    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#!">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="#!">A propos</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#!">Tous les produits</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#!">Produits populaires</NavDropdown.Item>
              <NavDropdown.Item href="#!">Nouveaux arrivages</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-dark" onClick={togglePanier}>
            <i className="bi bi-cart-fill me-1"></i>
            Panier
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {cartItemCount}
              </span>
          </Button>
        </Navbar.Collapse>
      </div>
      {showPanier && <PanierSummary />}
    </Navbar>
  );
};

export default CustomNavbar;