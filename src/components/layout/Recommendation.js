import React, { Fragment, useState, useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import RecommendationItem from './RecommendationItem';

const Recommendation = (props) => {

    const [results, updateResults] = useState([]);
    // eslint-disable-next-line
    
    useEffect(() => {
        fetch('restaurant-recommendation', {
            headers: {
                "Accept": 'application/json'
            }
        })
        .then(response => response.json().then(data => {
            updateResults(data.result)
            
            
            })
            
        );
    }, []);

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
        <RecommendationItem results={results}  />
        </Fragment>
    )
}

export default Recommendation
