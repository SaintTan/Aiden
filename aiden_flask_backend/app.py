from flask import Flask
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://Snek:V4P6AMMVhu8Yy6ZA@cluster0.yfwyt.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = cluster["AIDEN"]
collection = db["Users"]

app = Flask(__name__)

@app.route('/', methods = ["POST", "GET"])
def index():
    return "Hey You Found The Page!"