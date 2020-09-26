from flask import Flask, request, jsonify
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://Snek:V4P6AMMVhu8Yy6ZA@cluster0.yfwyt.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = cluster["AIDEN"]
customers = db["Customers"]
workers = db["Workers"]

app = Flask(__name__)

@app.route('/signup', methods = ["POST", "GET"])
def index():
    
    data = request.get_json()
    print(data)

    if data["type"] == "Worker":
        workers.insert_one({
            "_id": data["passport"],
            "name": data["name"],
            "email": data["email"],
            "password": data["password"]
        })

    elif data["type"] == "Customer":
        customers.insert_one({
            "_id": data["passport"],
            "name": data["name"],
            "email": data["email"]
        })


    return jsonify({'value': 'success'})
