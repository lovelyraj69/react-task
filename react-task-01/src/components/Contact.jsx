import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://my-json-server.typicode.com/typicode/demo/posts', formData);
      console.log('Data saved:', response.data);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to submit form. Please try again later.');
    }

  };

  return (
    <Container fluid className='bg-dark text-black p-2'>
      <Row>
        <Col>   
          <div>
            <h4>Location</h4>
            <p className='p-2'>
              Demo Company Name 1234 Innovation Drive,<br />
              Tech Park, Suite 500,<br />
              Cityville, State 56789,<br />
              Country: YourCountry,<br />
              Phone: (123) 456-7890, <br />
              Email: info@democompany.com <br />
            </p>
          </div>
          <div>
            <h4>Social</h4>
            <div className='d-flex gap-2 p-2'>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faXTwitter} />
              <br /><br />
            </div>
          </div>
          <div>
            <h4>Help</h4>
            <p className='p-2'>
              Payments<br />
              Shipping<br />
              Cancellation & Returns<br />
              FAQ<br />
              Report Infringement<br />
            </p>
          </div>
        </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name: </Form.Label>
              <Form.Control type='text' placeholder='enter your name' required onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone: </Form.Label>
              <Form.Control type="number" placeholder="enter your number" required onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject: </Form.Label>
              <Form.Select onChange={handleChange} >
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message: </Form.Label>
              <Form.Control as="textarea" rows={3} required onChange={handleChange} />
            </Form.Group>
            <Button variant='success' type='submit' >Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
