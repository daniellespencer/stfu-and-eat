import React, { Fragment, useState, useEffect } from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import RecommendationItem from "./RecommendationItem";

const RestaurantList = () => {
  const [results, updateResults] = useState([]);

  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch("/api/restaurants", {
      headers: {
        Accept: "application/json",
      },
    }).then((response) =>
      response.json().then((data) => {
        updateResults(data.result);
      })
    );
  }, [updateResults]);

  useEffect(() => {
    setFilteredRestaurants(
      results.filter((restaurant) => {
        if (restaurant.name.toLowerCase().includes(search.toLowerCase())) {
          return restaurant.name.toLowerCase().includes(search.toLowerCase());
        } else if (
          restaurant.neighborhood.toLowerCase().includes(search.toLowerCase())
        ) {
          return restaurant.neighborhood
            .toLowerCase()
            .includes(search.toLowerCase());
        } else if (
          restaurant.cuisine.toLowerCase().includes(search.toLowerCase())
        ) {
          return restaurant.cuisine
            .toLowerCase()
            .includes(search.toLowerCase());
        }
      })
    );
  }, [search, results]);

  return (
    <Fragment>
      <Jumbotron fluid className='listBanner'>
        <Container>
          <h1>Our List</h1>
        </Container>
      </Jumbotron>

      <Container>
        <input
          type='text'
          placeholder='Search our list of restaurants ...'
          className='form-control search-input'
          id='search-input'
          onChange={(e) => setSearch(e.target.value)}
        />

        <Row className='justify-content-sm-center' md={3} xs={1}>
          {filteredRestaurants.map((restaurant) => (
            <RecommendationItem
              id={restaurant.name}
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default RestaurantList;
