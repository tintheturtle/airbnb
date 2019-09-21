import React, {Component } from 'react'

import {Jumbotron, Card, Button, CardDeck, Container} from 'react-bootstrap'

import Footer from './Footer'
import './styles/Landing.css'

class Landing extends Component {
    render() {
        return(
        <div id="bootstrap">
            <div id="container-two">
                    <Jumbotron fluid id="tron">
                        <Container>
                            <h1>Welcome to GasBnB</h1>
                            <p>
                                Explore what this website has to offer!
                            </p>
                        </Container>
                    </Jumbotron>
            </div>
           
            <div className="container" id="bootstrap-overrides">   
                    <div className="deck-container">
                        <CardDeck>
                            <Card style={{ width: '18rem' }} id="">
                                <Card.Body>
                                    <Card.Title>Experience</Card.Title>
                                    <Card.Text>
                                    Experience some of the best activities the world has to offer and make some lasting 
                                    memories.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Eat</Card.Title>
                                    <Card.Text>
                                    Sample some of the world's finest cuisine as a college student, either at your local
                                    McDonald's or Late Nite at Warren.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Explore</Card.Title>
                                    <Card.Text>
                                    Explore west campus to find too many people going to parties or east campus to find 
                                    a stampede or Red Sox
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            
                        </CardDeck>
                    </div>
                </div>
                <div id="container-two">
                    <Jumbotron fluid id="tron-two">
                        <Container>
                            <h1>Welcome to GasBnB</h1>
                            <p>
                                Explore what this website has to offer!
                            </p>
                        </Container>
                    </Jumbotron>
            </div>
            <div className="container" id="bootstrap-overrides">   
                    <div className="deck-container">
                        <CardDeck>
                            <Card style={{ width: '18rem' }} id="">
                                <Card.Body>
                                    <Card.Title>Experience</Card.Title>
                                    <Card.Text>
                                    Experience some of the best activities the world has to offer and make some lasting 
                                    memories.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Eat</Card.Title>
                                    <Card.Text>
                                    Sample some of the world's finest cuisine as a college student, either at your local
                                    McDonald's or Late Nite at Warren.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Explore</Card.Title>
                                    <Card.Text>
                                    Explore west campus to find too many people going to parties or east campus to find 
                                    a stampede or Red Sox
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            
                        </CardDeck>
                    </div>
                </div>
                <Footer/>
        </div>
        )
    }
}

export default Landing