import pytest

from api.main.routes import app, get_all_restaurants, get_restaurant_recommendation
from api.main.db import restaurants

def test_get_all_restaurants_returns_status_code_200():
    with app.app_context():
        result = get_all_restaurants()

        assert result.status_code

def test_get_all_restaurants_returns_all_restaurants():
    with app.app_context():
        document_count = restaurants.count()
        result = get_all_restaurants().json["result"]
        
        assert document_count == len(result)

def test_get_restaurant_recommendation_returns_status_code_200():
    with app.app_context():
        result = get_restaurant_recommendation()

        assert result.status_code

def test_get_restaurant_recommendation_returns_one_restaurant():
    with app.app_context():
        result = get_restaurant_recommendation().json["result"]
        
        assert len(result) == 6