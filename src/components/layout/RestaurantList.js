import React, { Fragment, useState, useEffect } from 'react';
import { Jumbotron, Container, Row } from 'react-bootstrap';
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
            console.log(results)
            console.log(results.name)
            })
            
        );
    }, []);
    return (
        <Fragment>
            <Jumbotron fluid className='listBanner' >
            <Container >
                <h1>Our List</h1>
               
            </Container>
        </Jumbotron>
        <Container >
            <Row className="justify-content-sm-center" md={3} xs={1}>
                {results.map(restaurant => (
                    <RecommendationItem key={restaurant.id} restaurant={restaurant}  />
                ))}
            </Row>
        </Container>
        
        </Fragment>
    )
}

export default RestaurantList