import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const RecommendationItem = () => {

    const onClick = () => {
        const url = 'http://lonaslileats.com/';
        window.open(url, '_blank')
    }

    return (
        <div>
            <Card className='shadow mb-5 mt-5 '>
                <Card.Img variant="top" src={require("../../images/rec-card-default.jpg")} className='img-fluid'  />
                <Card.Body>
                    <Card.Title>Restaurant Name</Card.Title>
                    <Card.Text>
                    Neighborhood<br/>
                    Cuisine
                    </Card.Text>
                    <Button variant="primary" className='btn-success' onClick={onClick}>Restaurant website</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RecommendationItem
