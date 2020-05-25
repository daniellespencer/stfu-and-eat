from flask import Flask, jsonify

from app.main.restaurant_helper_functions import organizeRestaurantOutput, selectRandomRestaurant

app = Flask(__name__)

@app.route('/restaurants', methods=['GET'])
def get_all_restaurants():
    output = organizeRestaurantOutput()

    return jsonify({'result' : output})

@app.route('/restaurant-recommendation', methods=['GET'])
def get_restaurant_recommendation():
    output = organizeRestaurantOutput()
    selection = selectRandomRestaurant(output)

    return jsonify({'result' : selection})

if __name__ == '__main__':
    app.run(debug=True)