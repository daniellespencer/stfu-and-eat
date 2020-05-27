import React, { Fragment, useState, useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import RecommendationItem from './RecommendationItem';

const RestaurantList = () => {
    const [results, updateResults] = useState([]);

    useEffect(() => {
        fetch('restaurants', {
            headers: {
                "Accept": 'application/json'
            }
        })
        .then(response => response.json().then(data => {
            updateResults(data.result)
            console.log(data.result)
            })
            
        );
    }, [updateResults]);
    return (
        <Fragment>
            <Jumbotron fluid className='listBanner' >
            <Container >
                <h1>Our List</h1>
               
            </Container>
        </Jumbotron>
        <Fragment>
            {results.map(restaurant => (
                <RecommendationItem key={results.id} name={results.name} neighborhood={results.neighborhood} cuisine={results.cuisine} url={results.website} />
            ))}
        </Fragment>
        
        </Fragment>
    )
}

export default RestaurantList
