import random
from pymongo import MongoClient

client = MongoClient("mongodb+srv://stfueat:stfueat@stfueat-mfqnc.mongodb.net/test?retryWrites=true&w=majority")
db = client.test
restaurants = db.restaurant

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