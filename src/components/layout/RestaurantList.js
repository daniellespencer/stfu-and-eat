import React, { Fragment, useState, useEffect } from 'react'; 
import { Jumbotron, Container, Row } from 'react-bootstrap';
import RecommendationItem from './RecommendationItem';

const RestaurantList = () => {
    const [results, updateResults] = useState([]);

    const [search, setSearch] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetch('restaurants', {
            headers: {
                "Accept": 'application/json'
            }
        })
        .then(response => response.json().then(data => {
            updateResults(data.result)
            })
            
        );
    }, []);

    useEffect(() => {
        setFilteredRestaurants(
            results.filter( restaurant => {
                return restaurant.name.toLowerCase().includes(search.toLowerCase() )
            } )
        )
      }, [search, results]);
      
    return (
        <Fragment>
            <Jumbotron fluid className='listBanner' >
            <Container >
                <h1> List</h1>
               
            </Container>
        </Jumbotron>
        
        <Container >
            <input
                type="text"
                placeholder="Search our list of restaurants ..."
                className="form-control"
                id='search-input'
                onChange={e => setSearch(e.target.value)}
            /> 
           
            <Row className="justify-content-sm-center" md={3} xs={1}>
                {filteredRestaurants.map(restaurant => (
                    <RecommendationItem id={restaurant.name} key={restaurant.id} restaurant={restaurant}  />
                ))}
            </Row>
        </Container>
        
        </Fragment>
    )
}

export default RestaurantList