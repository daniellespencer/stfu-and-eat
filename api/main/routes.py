from flask import Flask, jsonify

from api.main.restaurant_helper_functions import organize_restaurant_output, select_random_restaurant

app = Flask(__name__)

@app.route('/restaurants', methods=['GET'])
def get_all_restaurants():
    output = organize_restaurant_output()

    return jsonify({'result' : output})

@app.route('/restaurant-recommendation', methods=['GET'])
def get_restaurant_recommendation():
    output = organize_restaurant_output()
    selection = select_random_restaurant(output)

    return jsonify({'result' : selection})

if __name__ == '__main__':
    app.run(debug=True)