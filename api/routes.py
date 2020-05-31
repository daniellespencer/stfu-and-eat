from flask import Flask, jsonify, request, json
from bson.objectid import ObjectId
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)
from api.restaurant_helper_functions import organize_restaurant_output, select_random_restaurant
from api.config import user_collection

app = Flask(__name__)

app.config['JWT_SECRET_KEY'] = 'secret'

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/users/register', methods=['POST'])
def register():
    users = user_collection
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    user_id = users.update(
        {"email" : email},
        {
            'first_name' : first_name,
            'last_name' : last_name,
            'email' : email,
            'password' : password,
            'created' : created
        },
        upsert=True
    )

    new_user = users.find_one({'email' : email})

    return jsonify({'result' : new_user['email'] + ' registered'})

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
    app.secret_key = 'mysecret'
    app.run(debug=True)