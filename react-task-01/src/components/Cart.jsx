import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <h2>Shopping Cart</h2>
      <Row>
        {cart.map((item) => (
          <Col key={item.id} md={12} className="mb-4">
            <Row>
              <Col md={6}>
                <h5>{item.name}</h5>
                <p>Price: ${item.price}</p>
              </Col>
              <Col md={3}>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  min="1"
                />
              </Col>
              <Col md={3}>
                <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
              </Col>
              <Col md={3}>
                <Button>
                  <Link to='/shop' style={{textDecoration: 'none',color: 'white'}} >Add more</Link>
                </Button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={12}>
          <h4>Total: ${getTotal()}</h4>
        </Col>
      </Row>
    </Container>
  );
};
