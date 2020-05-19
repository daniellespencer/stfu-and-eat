import React, { Fragment } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import RecommendationItem from './RecommendationItem'

const Recommendation = () => {
    return (
        <Fragment>
        <Jumbotron fluid >
            <Container >
                <h1>Our Recommendation</h1>
                <p>
                We did it. We made a decision for you.
                </p>
            </Container>
        </Jumbotron>
        <RecommendationItem />
        </Fragment>
    )
}

export default Recommendation
