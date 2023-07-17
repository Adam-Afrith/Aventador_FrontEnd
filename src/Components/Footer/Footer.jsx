import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

const Footer = () => {
  return (
 
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
          <p>Follow Us On</p>
        <i className="fa-brands fa-facebook fa-lg"></i><span>&nbsp;&nbsp;</span>
        <i className="fa-brands fa-instagram fa-lg"></i><span>&nbsp;&nbsp;</span>
        <i className="fa-brands fa-twitter fa-lg"></i>
        
          <h6 align="center">Copyright <i className="fa-sharp fa-regular fa-copyright"></i> 2023 Aventador All Rights Reserved.</h6>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer
