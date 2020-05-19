import random

from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb+srv://stfueat:stfueat@stfueat-mfqnc.mongodb.net/test?retryWrites=true&w=majority")
db = client.test
restaurant_collection = db.restaurant

def randomRestaurantSelection(restaurantChoices):
    value = random.randint(0, len(restaurantChoices)-1)
    return restaurantChoices[value]

@app.route('/restaurants', methods=['GET'])
def get_all_restaurants():

    output = []

    for q in restaurant_collection.find():
        output.append({
            "id" : str(q['_id']),
            'name' : q['name'],
            'neighborhood' : q['neighborhood'],
            'cuisine' : q['cuisine'],
            'address' : q['address'],
            'website' : q['website']
            })

    return jsonify({'result' : output})

@app.route('/restaurant-recommendation', methods=['GET'])
def get_restaurant_recommendation():

    output = []

    for q in restaurant_collection.find():
        output.append({
            "id" : str(q['_id']),
            'name' : q['name'],
            'neighborhood' : q['neighborhood'],
            'cuisine' : q['cuisine'],
            'address' : q['address'],
            'website' : q['website']
            })

    selection = randomRestaurantSelection(output)

    return jsonify({'result' : selection})

if __name__ == '__main__':
    app.run(debug=True)