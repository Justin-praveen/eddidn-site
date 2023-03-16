import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Contactstyle.css";
import Logo1 from './image/logo green.jpg';
import A from './image/a2.jpg';
import B from './image/a3.jpg';
import C from './image/a4.jpg';
import D from './image/a5.jpg';


const Contact = () => {
  return (
    <Container>    
        <Row id="contact">
        <Col lg={4}>
          <Row>
            <Col lg={12}>
            <img src={Logo1}  

            alt="Logo"
            width="150px"
            height="50px"
            /> <br/> <br/>
            </Col>
           
            <Col  lg={{span:8}} >
              <h5>A trusted and secure cryptocurrency exchange.</h5>
              <br/>
              
             <a href='' className='cont-link'> <i class='fab fa-twitter' id='icon'></i></a> &nbsp; &nbsp;
             <a href='' className='cont-link'> <i class='fab fa-instagram' id='icon'></i></a>&nbsp; &nbsp;
             <a href='' className='cont-link'> <i class='fab fa-facebook-square' id='icon'></i></a>&nbsp; &nbsp;

            </Col>
            </Row>
        </Col>
        <Col lg={4}>
            <h2>Our Contacts</h2>
            <br/>
            <br/>
            <a href='' className='cont-link'> 
            <i class='fas fa-map-marker-alt' id='icon'></i>&nbsp; Address</a>
            <p>D.No : xxxx,<br/>
            ABC Street,<br/>
            Coimbatore-000.</p>
            <a href='tel:+91 75025 97317' className='cont-link'>
              <i class='fas fa-phone-square-alt' id='icon'> </i>&nbsp; +91 75025 97317 </a>
            <br/>
            <br/>
            <a href='mailto:abc@gmail.com' className='cont-link'>
              <i class='fas fa-location-arrow' id='icon'> </i>&nbsp; abc@gmail.com </a>
        </Col>
        <Col lg={4}>
        <Row id='contact-image'>
          <Col><img src={A} alt="pic" width="150px"/></Col>
          <Col><img src={B} alt="pic" width="150px"/></Col>
          <Col><img src={C} alt="pic" width="150px"/></Col>
           <Col><img src={D} alt="pic" width="150px"/></Col>
         
        </Row>
        </Col>

    </Row>
    <Row>
      <p id="copyright">Copyright &#169;2023 All &#174;right reserved  </p>
    </Row>
    </Container>



  )
}

export default Contact
