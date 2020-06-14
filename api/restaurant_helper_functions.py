import random
from api.config import restaurant_collection as restaurants

def organize_restaurant_output():
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

def select_random_restaurant(options):
    value = random.randint(0, len(options)-1)
    return options[value]