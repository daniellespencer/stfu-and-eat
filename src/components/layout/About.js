import React, { Fragment } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';


const About = () => {
    return (
        <Fragment>
        <Jumbotron fluid className='aboutBanner' >
            <Container >
                <h1>About Our App</h1>
               
            </Container>
        </Jumbotron>
        <p className='lead container'>Add bios for Mariah, Danielle, and app later</p>
        </Fragment>
    )
}

export default About
