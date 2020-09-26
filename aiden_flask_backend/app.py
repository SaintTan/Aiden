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
collection = db["Users"]

app = Flask(__name__)

@app.route('/signup', methods = ["POST", "GET"])
def index():
    
    data = request.get_json()["userData"]
    print(data)

    collection.insert_one(data)
    return jsonify({'value': 'success'})
>>>>>>> develop
