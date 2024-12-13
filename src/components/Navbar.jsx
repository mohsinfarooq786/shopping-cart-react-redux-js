import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const productCategories = ['TV', 'Audio', 'Laptop', 'Mobile', 'Gaming', 'Appliances'];
  const navigate = useNavigate();
  const handleNavigation = (category) => {
    navigate(`/products/${category.toLowerCase()}`);
  };

  return (
    <div>
      <Container className='my-3'>
        <Row>
          <Col xs={8}>
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleNavigation(category)}
                className='categoryButton'>{category}</button>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar;
