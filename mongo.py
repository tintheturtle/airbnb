from flask import Flask, jsonify, request, json, render_template
from flask_pymongo import PyMongo
from bson.objectid import ObjectId 
from datetime import datetime 
from flask_bcrypt import Bcrypt 
from flask_cors import CORS
from flask_jwt_extended import JWTManager 
from flask_jwt_extended import create_access_token

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'airbnb'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/reactloginreg'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------

#Registration

#Registering and logging in 

@app.route('/register', methods=["POST"])
def register():
    users = mongo.db.users 
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    user_id = users.insert({
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'password': password,
        'created': created,
        'properties_rented': []
    })

    new_user = users.find_one({'_id': user_id})

    result = {'email': new_user['email'] + ' registered'}

    return jsonify({'result' : result})

#Register a property, would've used inheritance frmo the register() method but not sure how to on flask

@app.route('/register_host', methods=["POST"])
def register_host():
    houses = mongo.db.houses 
    #Host information
    email = request.get_json()['email']
    house_name = request.get_json()['house_name']
    house_type = request.get_json()['house_type']
    created = datetime.utcnow()

    house_id = houses.insert({
        'email' : email,
        'house_name': house_name,
        'house_type': house_type,
        'guest_email': '',
        'is_rented' : False
    })

    new_house = houses.find_one({'_id': house_id})

    result = {'email':new_house['email'] + ' account and the property has been registered'}

    return jsonify({'result' : result})


#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------

#Logins


#Logins the user by checking the password with a hash and provides an access token
@app.route('/login', methods=['POST'])
def login():
    users = mongo.db.users 
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'email': email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'first_name': response['first_name'],
                'last_name': response['last_name'],
                'email': response['email']
            })
            result = jsonify({'token':access_token})
        else:
            result = jsonify({"error":"Invalid username and password"})
    else:
        result = jsonify({"result":"No results found"})
    return result 

#Logins the host by hasing the password and providing an access token 
@app.route('/login_host', methods=['POST'])
def login_host():
    users = mongo.db.hosts 
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'email': email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'first_name': response['first_name'],
                'last_name': response['last_name'],
                'email': response['email']
            })
            result = jsonify({'token':access_token})
        else:
            result = jsonify({"error":"Invalid username and password"})
    else:
        result = jsonify({"result":"No results found"})
    return result 


#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------

#Queries for property listing page


#Gets all available properties
@app.route('/tasks', methods=['GET'])
def get_all_tasks():
    tasks = mongo.db.houses

    is_rented = request.get_json

    result = []

    for field in tasks.find({"is_rented": False}):
        result.append({'_id': str(field['_id']), 'house_name': field['house_name'], 'house_type' : field['house_type'], 'email': field['email']})
    return jsonify(result)


#Updates availability status and provides a guest email to the property schema
@app.route('/task', methods=['PUT'])
def add_task():
    tasks = mongo.db.houses 
    guest_email = request.get_json()['guest_email']

    tasks.find_one_and_update({'_id':ObjectId(id)}, {"$set": {"guest_email": email}}, upsert=False)
    new_task = tasks.find_one({'_id':task_id})

    result = {'guest_email' : new_task['guest_email']}

    return jsonify({'result': result})


#Updates availability status and provides a guest email to the property schema
@app.route('/task/<id>', methods=['PUT'])
def update_task(id):
    tasks = mongo.db.houses 
    guest_email = request.get_json()['guest_email']


    tasks.find_one_and_update({'_id':ObjectId(id)}, {"$set": {"is_rented": True}}, upsert=False)
    tasks.find_one_and_update({'_id':ObjectId(id)}, {"$set": {"guest_email": guest_email}}, upsert=False)
    new_task = tasks.find_one({'_id': ObjectId(id)})

    result = {'is_rented' : new_task['is_rented']}

    return jsonify({"result": result})




#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------#----------


#Queries for check out page

#Gets all rented properties
@app.route('/checkout', methods=['GET'])
def get_all_rented():
    tasks = mongo.db.houses

    guest_email = request.args.get('guest_email','')

    result = []

    for field in tasks.find({'guest_email': guest_email}):
        result.append({'_id': str(field['_id']), 'house_name': field['house_name']})
    return jsonify(result)


@app.route('/checkout/<id>', methods=['PUT'])
def update_status(id):
    tasks = mongo.db.houses
    guest_email = ''
    
    tasks.find_one_and_update({'_id':ObjectId(id)}, {"$set": {"is_rented": False}}, upsert=False)
    tasks.find_one_and_update({'_id':ObjectId(id)}, {"$set": {"guest_email": guest_email}}, upsert=False)
    new_task = tasks.find_one({'_id': ObjectId(id)})

    result = {'is_rented' : new_task['is_rented']}

    return jsonify({"result": result})



# Must always be at the bottom
if __name__ == '__main__':
    app.run(debug=True)