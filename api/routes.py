from flask import Flask, jsonify, request, json
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)
from api.restaurant_helper_functions import organize_restaurant_output, select_random_restaurant
from api.config import user_collection as users

app = Flask(__name__)

app.config['JWT_SECRET_KEY'] = 'secret'

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

@app.route('/api/user-registration', methods=['POST'])
def register():
    username = request.get_json()['username']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    response = users.find_one({'email' : email})

    if response:
        return jsonify({
            'result' : 
                {
                    'message' : 'Please choose another email, that email is taken.'
                }
            })
    else:
        users.insert(
            {
                'username' : username,
                'email' : email,
                'password' : password,
                'created' : created
            })

        new_user = users.find_one({'email' : email})

        return jsonify({
            'result' : 
                {
                    '_id' : str(new_user['_id']),
                    'username' : new_user['username'],
                    'email' : new_user['email']
                }
            })

@app.route('/api/user-login', methods=['POST'])
def login():
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ''

    response = users.find_one({'email' : email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'username' : response['username'],
                'email' : response['email']
            })
            result = jsonify({'token' : access_token})
        else:
            result = jsonify({'error' : 'Invalid password'})
    else: 
        result = jsonify({'error' : 'No results found'})

    return result

@app.route('/api/restaurants', methods=['GET'])
def get_all_restaurants():
    output = organize_restaurant_output()

    return jsonify({'result' : output})

@app.route('/api/restaurant-recommendation', methods=['GET'])
def get_restaurant_recommendation():
    output = organize_restaurant_output()
    selection = select_random_restaurant(output)

    return jsonify({'result' : selection})

if __name__ == '__main__':
    app.secret_key = 'mysecret'
    app.run(debug=True)