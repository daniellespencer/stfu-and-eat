import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const RecommendationItem = ({ props }) => {
    const [results, updateResults] = useState({});

    const updateRestaurant = () => {
        updateResults({})

    }
    useEffect(() => {
        fetch('restaurant-recommendation', {
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(response => response.json().then(data => {
            updateResults(data.result)
            console.log(data.result.address)
            })
            
        );
    }, []);

    const onClick = () => {
        const url = results.website;
        window.open(url, '_blank')
    }

    return (
        <div>
            <Card className='shadow mb-5 mt-5 '>
                <Card.Img variant="top" src={require("../../images/rec-card-default.jpg")} className='img-fluid'  />
                <Card.Body>
                <Card.Title>{results.name}</Card.Title>
                    <Card.Text>
                    Neighborhood: {results.neighborhood} <br/>
                    Cuisine: {results.cuisine}
                    </Card.Text>
                    <Button variant="primary" className='btn-success' onClick={onClick}>Restaurant website</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RecommendationItem
