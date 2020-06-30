import React from "react";

import { Card, Button } from "react-bootstrap";

const RecommendationItem = ({ restaurant }) => {
  const onClick = () => {
    const url = restaurant.website;
    window.open(url, "_blank");
  };

  const onClickDirections = () => {
    const url = `https://www.google.com/maps/dir//${restaurant.address}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <Card className='shadow mb-5 mt-5 '>
        <Card.Img
          variant='top'
          src={require("../../images/logo.jpg")}
          className='img-fluid'
        />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            Neighborhood: {restaurant.neighborhood} <br />
            Cuisine: {restaurant.cuisine}
          </Card.Text>
          <Button
            variant='primary'
            className='btn-primary btn-sm rec-item-button'
            onClick={onClick}
          >
            Restaurant website
          </Button>
          <Button
            variant='outline-primary'
            className='btn-sm rec-item-button-directions'
            onClick={onClickDirections}
          >
            Directions
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecommendationItem;
