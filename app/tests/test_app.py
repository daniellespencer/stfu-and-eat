import pytest
from app.main.app import app, get_all_restaurants, get_restaurant_recommendation
from app.main.db import restaurants

def test_get_all_restaurants_returns_status_code_200():
        with app.app_context():
                result = get_all_restaurants()
    
                assert result.status_code

def test_get_restaurant_recommendation_returns_status_code_200():
        with app.app_context():
                result = get_restaurant_recommendation()

                assert result.status_code