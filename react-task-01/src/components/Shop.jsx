import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import products from '../productsDb.json';
import { Link } from 'react-router-dom';

export default function Shop() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Container>
      <Row>
        {currentItems.map((product) => (
          <Col key={product.sku} md={4} className='d-flex'>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={product.product_img} style={{ height: '20rem' }} />
              <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Discription:  {product.description}</Card.Text>
                <Button variant='success' onClick={() => addToCart(product)}>
                  <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }} >Add to Cart</Link>
                  </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <ul className="pagination">
            {[...Array(Math.ceil(products.length / itemsPerPage)).keys()].map((number) => (
              <li key={number + 1} className="page-item">
                <a onClick={() => paginate(number + 1)} className="page-link">
                  {number + 1}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
