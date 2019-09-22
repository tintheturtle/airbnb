import React, {Component } from 'react'
import {Jumbotron, Card, CardDeck, Container, Carousel} from 'react-bootstrap'

import newyork from './images/newyrk.jpg'
import la from './images/la.jpg'
import boston from './images/boston.jpg'

import chicago from './images/chicago.jpeg'
import paris from './images/paris.jpg'
import tokyo from './images/tokyo.jpg'

import beijing from './images/beijing.jpg'
import taipei from './images/taipei.jpg'
import seoul from './images/seoul.jpg'

import explore from './images/explore.jpeg'
import adventure from './images/adventure.jpeg'
import eat from './images/eat.jpeg'






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
                <h1>Explore the world </h1>
                <h3> and what it has to offer </h3>
                <h3 id="third"> One step . . . .</h3>
                <h3 id="fourth"> at a time</h3>
                <Carousel>
                    <Carousel.Item>
                            <div className="deck-container">
                                <CardDeck>
                                    <Card style={{ width: '18rem' }} id="">
                                    <Card.Img variant="top" src={newyork} />
                                        <Card.Body>
                                            <Card.Title>New York</Card.Title>
                                            <Card.Text>
                                            New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={la} />
                                        <Card.Body>
                                            <Card.Title>Los Angeles</Card.Title>
                                            <Card.Text>
                                            Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={boston} />
                                        <Card.Body>
                                            <Card.Title>Boston</Card.Title>
                                            <Card.Text>
                                            Boston is Massachusetts’ capital and largest city. Founded in 1630, it’s one of the oldest cities in the U.S.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    
                                </CardDeck>
                            </div>
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <div className="deck-container">
                                <CardDeck>
                                    <Card style={{ width: '18rem' }} id="">
                                    <Card.Img variant="top" src={chicago} />
                                        <Card.Body>
                                            <Card.Title>Chicago</Card.Title>
                                            <Card.Text>
                                            Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={paris} />
                                        <Card.Body>
                                            <Card.Title>Paris</Card.Title>
                                            <Card.Text>
                                            Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={tokyo} />
                                        <Card.Body>
                                            <Card.Title>Tokyo</Card.Title>
                                            <Card.Text>
                                            Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    
                                </CardDeck>
                            </div>
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <div className="deck-container">
                                <CardDeck>
                                    <Card style={{ width: '18rem' }} id="">
                                    <Card.Img variant="top" src={seoul} />
                                        <Card.Body>
                                            <Card.Title>Seoul</Card.Title>
                                            <Card.Text>
                                            Seoul, officially the Seoul Special City, is the capital[8] and largest metropolis of South Korea.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={beijing} />
                                        <Card.Body>
                                            <Card.Title>Beijing</Card.Title>
                                            <Card.Text>
                                            Beijing is the capital of the People's Republic of China, the world's third most populous city proper, and most populous capital city.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={taipei} />
                                        <Card.Body>
                                            <Card.Title>Taipei</Card.Title>
                                            <Card.Text>
                                            Taipei, the capital of Taiwan, is a modern metropolis with Japanese colonial lanes, busy shopping streets and contemporary buildings.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    
                                </CardDeck>
                            </div>
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>     
                </div>
                <div id="container-two">
                    <Jumbotron fluid id="tron-four">
                        <Container className="tron-four">
                            <h1>Endless opportunities</h1>
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
                            <Card.Img variant="top" src={adventure} />
                                <Card.Body>
                                    <Card.Title>Experience</Card.Title>
                                    <Card.Text>
                                    Experience some of the best activities the world has to offer and make some lasting 
                                    memories.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={eat} />
                                <Card.Body>
                                    <Card.Title>Eat</Card.Title>
                                    <Card.Text>
                                    Sample some of the world's finest cuisine as a college student, either at your local
                                    McDonald's or Late Nite at Warren.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={explore} />
                                <Card.Body>
                                    <Card.Title>Explore</Card.Title>
                                    <Card.Text>
                                    Explore west campus to find too many people going to parties or east campus to find 
                                    a stampede or Red Sox
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            
                        </CardDeck>
                    </div>
                </div>
        </div>
        )
    }
}

export default Landing