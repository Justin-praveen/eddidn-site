import React from 'react'
import { Card, Carousel, Col, Container, Row, Stack } from 'react-bootstrap'
import "./carousestyle.css";
import Pic from "./image/i.jpg";
import Pic1 from "./image/i1.jpg";
import Pic2 from "./image/ab.jpg";
import Pic3 from "./image/ac.jpg";



const carouse = () => {
  return (
    <div >
      <Container>
        <Row id="carouse-main">
          <Carousel id='caro' variant="light">
            <Carousel.Item>
              <Card id='card1'>
                <Row id="caros">
                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic}
                      alt="1st pic"

                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>

                  <Col lg={3} sm={3}>
                    <img
                      className=" card-img"
                      src={Pic1}
                      alt="First slide"

                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>

                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic2}
                      alt="Second slide"

                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>

                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic2}
                      alt="Second slide"

                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>
                </Row>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card id='card1'>
                <Row id="caros">
                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic3}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>
                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic1}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>

                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>

                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic2}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>
                </Row>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card id='card1'>
                <Row id="caros">
                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic}
                      alt="1st pic"

                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>

                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic1}
                      alt="First slide"

                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>

                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic2}
                      alt="Second slide"

                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>

                  <Col lg={3} sm={3}>
                    <img
                      className="card-img"
                      src={Pic}
                      alt="Second slide"

                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Col>
                </Row>
              </Card>
            </Carousel.Item>


          </Carousel>
        </Row>
        <hr />
      </Container>

    </div>
  )
}

export default carouse


