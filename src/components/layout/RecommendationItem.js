import React, { useState } from 'react';

import { Card, Button } from 'react-bootstrap';

const RecommendationItem = ({ restaurant }) => {
    
    const onClick = () => {
        const url = restaurant.website;
        window.open(url, '_blank')
    }

    return (
        <div>
            <Card className='shadow mb-5 mt-5 '>
                <Card.Img variant="top" src={require("../../images/rec-card-default.jpg")} className='img-fluid'  />
                <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>
                    Neighborhood: {restaurant.neighborhood} <br/>
                    Cuisine: {restaurant.cuisine}
                    </Card.Text>
                    <Button variant="primary" className='btn-success' onClick={onClick}>Restaurant website</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RecommendationItem