import React, { Fragment } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import RecommendationItem from './RecommendationItem';

const RestaurantList = () => {
    return (
        <Fragment>
            <Jumbotron fluid className='listBanner' >
            <Container >
                <h1>Our List</h1>
               
            </Container>
        </Jumbotron>

        <RecommendationItem />
        
        </Fragment>
    )
}

export default RestaurantList
