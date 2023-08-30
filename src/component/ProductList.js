import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import ProductFilter from './ProductFilter';

const ProductList = () => {
  const [datas, setDatas] = useState([]);

  const {addToCart}= useCart();

  const [filtersDatas, setFiltersDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
      setDatas(data);
      setFiltersDatas(data);
});
  };

const handleFilter = (filters) => {

  let filteredData = datas;

  if (filters.category) {
    filteredData = filteredData.filter(
      (product) => product.category === filters.category
    );
  }

  if (filters.priceMin) {
    filteredData = filteredData.filter(
      (product) => product.price >= filters.priceMin
    );
  }

  if (filters.priceMax) {
    filteredData = filteredData.filter(
      (product) => product.price <= filters.priceMax
    );
  }

  setFiltersDatas(filteredData);
};

  return (
 
      <section className="py-5">
        <Container>
          <ProductFilter onFilter={handleFilter} />
          <Row className="justify-content-center">
            {filtersDatas.map((product, index) => (
              <Col key={index} md={3} className="mb-5">
                
                <Card className="h-100">
                  <Card.Img variant="top" src={product.image} alt="..." />
                  <Card.Body className="p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.title}</h5>
                      <p>{product.description}</p>
                      <p>{product.price}</p>
                       {/* Lien vers la description du produit */}
                    </div>
                  </Card.Body>
                  <Card.Footer className="p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                    <Link to={`/${product.id}`}>        <Button variant="outline-dark mt-auto"> Voir les détails</Button> </Link>
                      <Button variant="outline-dark mt-auto" onClick={() => addToCart(product)}>Ajouter au panier</Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    
  );
};

export default ProductList;
