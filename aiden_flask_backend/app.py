<<<<<<< HEAD
import flask

app = flask.Flask(__name__)

@app.route("/")
def index():
    return "Congrats, you've accessed the homepage!"

if __name__ == "__main__":
    app.run(debug = True)
=======
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
            "password": data["password"],
            "customers": [],
            "issue": ""
        })

    elif data["type"] == "Customer":
        customers.insert_one({
            "_id": data["passport"],
            "email": data["email"],
            "password": data["password"],
            "risk": False
        })


    return jsonify({'value': 'success'})
<<<<<<< HEAD

@app.route('/login', methods = ["POST"])
def login_check():
    data = request.get_json()

    email = data["email"]
    password = data["password"]

    find_worker = workers.find_one({"email": email,"password" : password})
    find_customer = customers.find_one({"email": email, "password": password})

    if find_worker is not None:
        return jsonify({"status": "verified",
                        "type": "worker",
                        "id": find_worker["_id"]})
    
    elif find_customer is not None:
        return jsonify({"status": "verified",
                        "type": "customer",
                        "id": find_customer["_id"]})

    return jsonify({"status": "declined"})
    
@app.route('/user', methods = ["POST"])
def log_interaction():
    interaction = request.get_json()

    if (interaction["type"] == "Interact"):
        find_worker = workers.find_one({"_id": interaction["workerID"]})
        customerList = find_worker["customers"]

        if (interaction["customerID"] not in customerList):
            customerList.append(interaction["customerID"])
            workers.update_one({"_id": interaction["workerID"]}, {"$set": {"customers": customerList}})
            return jsonify({"status": "success, added customer to list!"})
        
        return jsonify({"status": "failed"})

    elif (interaction["type"] == "RiskNotify"):
        print(interaction)
        workers.update_one({"_id": interaction["workerID"]}, {"$set": {"issue": interaction["issue"]}})
        customerList = workers.find_one({"_id": interaction["workerID"]})["customers"]

        for cust in customerList:
            customers.update_one({"_id": cust}, {"$set": {"risk": True}})
        
        return jsonify({"status": "success, customers have been set a Risk"})
