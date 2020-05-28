import pytest

from api.restaurant_helper_functions import organize_restaurant_output, select_random_restaurant
from api.routes import app
from api.config import restaurant_collection as restaurants

def test_organize_restaurant_output_returns_expected_keys():
    with app.app_context():
        expected_keys = ["id", "name", "neighborhood", "cuisine", "address", "website"]
        result = organize_restaurant_output()[0]

        result_keys = []
        for key in result.keys(): 
            result_keys.append(key)
            
        assert result_keys == expected_keys

def test_select_random_restaurant_selects_random_number_between_0_and_length_of_array():
   with app.app_context():
       example_restaurants = ["Lona's", "Mac's", "Mochi"]

       selection = select_random_restaurant(example_restaurants)
       print(selection)

       assert example_restaurants.index(selection) == 0 or example_restaurants.index(selection) < len(example_restaurants) + 1