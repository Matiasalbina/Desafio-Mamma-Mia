import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa';
import PizzaContext from '../context/PizzaContext';
import '../App.css';

function NavPizza() {
  const { formattedTotalAmount } = useContext(PizzaContext);

  return (
    <>
      <Navbar bg="info" expand="lg" className="w-100">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={NavLink} to="/" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
            <FaPizzaSlice style={{ color: 'yellow', marginRight: '5px' }} />
            <strong>Pizzeria Mamma Mia!</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={NavLink} to="/cart" className="text-white d-flex align-items-center">
                <FaShoppingCart style={{ color: 'white', marginRight: '5px' }} />
                <span style={{ color: 'white' }}>{formattedTotalAmount}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-center mt-4 header-background">
        <h1>¡Pizzeria Mamma Mia!</h1>
        <h4>Tenemos las mejores pizzas que podrás encontrar</h4>
      </Container>
    </>
  );
}

export default NavPizza;
