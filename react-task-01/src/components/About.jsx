import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import aboutPost from '../images/about poster.jpg';
import clothImg from '../images/clothes.jpg';
import shoeImg from '../images/shoes.jpg';
import accerieImg from '../images/accerices.jpg';
import deviceImg from '../images/devices.jpg';

export default function About() {
  return (
    <Container>
      <Row>
        <Col className='d-flex flex-column justify-content-center align-item-center'>
          <h4>Shop now</h4>
          <h2>New collection awailable</h2>
          <Button style={{ width: '150px' }}>
            <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }} >View collection</Link>
          </Button>
        </Col>
        <Col>
          <img style={{ height: '400px' }} src={aboutPost} alt="" />
        </Col>
      </Row>
      <Row className='p-5'>
        <Col>
          <figure className='position-relative'>
            <img src={clothImg} alt="" style={{ height: '250px', opacity: '0.5' }} />
            <figcaption className='position-absolute' style={{top: '100px',left: '50px',fontWeight: 'bold'}}>Clothes</figcaption>
          </figure>
        </Col>
        <Col>
          <figure className='position-relative'>
            <img src={shoeImg} alt="" style={{ height: '250px', opacity: '0.5' }} />
            <figcaption className='position-absolute' style={{top: '100px',left: '50px',fontWeight: 'bold'}}>Shoes</figcaption>
          </figure>
        </Col>
        <Col>
          <figure className='position-relative'>
            <img src={accerieImg} alt="" style={{ height: '250px', opacity: '0.5' }} />
            <figcaption className='position-absolute' style={{top: '100px',left: '50px',fontWeight: 'bold'}}>Accessories</figcaption>
          </figure>
        </Col>
        <Col>
          <figure className='position-relative'>
            <img src={deviceImg} alt="" style={{ height: '250px',width: '200px', opacity: '0.5' }} />
            <figcaption className='position-absolute' style={{top: '100px',left: '50px',fontWeight: 'bold'}}>Devices</figcaption>
          </figure>
        </Col>
      </Row>
    </Container>
  )
}
