import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import "./cardsstyle.css";
import C from './image/a4.jpg';
import D from './image/a5.jpg';
import E from './image/a7.jpg';


const cards = () => {
    return (
        <Container>
            <div id='main'>
                <Row id="cards">
                    <Col id="cards1">
                        <Row  >
                            <Col >
                                <Card style={{ width: '17rem' }} id="crad1-1">
                                    <Card.Img variant="top" src={C} />
                                    <Card.Body>
                                        <Card.Title id="card-txt">Achievement</Card.Title>
                                        <Card.Text id="card-txt">
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col id="card1-2">
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img variant="top" src={D} />
                                    <Card.Body>
                                        <Card.Title id="card-txt">Achievement</Card.Title>
                                        <Card.Text id="card-txt">
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col id="cards2" >
                        <Card style={{ width: '17rem' }} id="card2-1">
                            <Card.Img variant="top" src={E} />
                            <Card.Body>
                                <Card.Title id="card-txt">Achievement</Card.Title>
                                <Card.Text id="card-txt">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col id="cards3" >
                        <Row>
                            <Col id='text-1'  >
                                <h2 id='txt'>A trusted and secure cryptocurrency exchange.</h2>
                            </Col>
                            <Col lg={"12"} >
                                <Button id="button-1" type='submit'
                                    className='btn btn-outline-dark'><h6>Get Started Now</h6></Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
            <br />
            <hr />
        </Container>
    );
}

export default cards;