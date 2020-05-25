import random
from db import restaurants

def organizeRestaurantOutput():
    output = []

    for q in restaurants.find():
        output.append({
            "id" : str(q['_id']),
            'name' : q['name'],
            'neighborhood' : q['neighborhood'],
            'cuisine' : q['cuisine'],
            'address' : q['address'],
            'website' : q['website']
            })

    return output

def selectRandomRestaurant(restaurantChoices):
    value = random.randint(0, len(restaurantChoices)-1)
    return restaurantChoices[value]