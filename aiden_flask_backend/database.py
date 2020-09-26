import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://Snek:V4P6AMMVhu8Yy6ZA@cluster0.yfwyt.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = cluster["AIDEN"]
collection = db["Users"]

post ={"_id": 0,
        "name": "snek",
        "age": 18}

collection.insert_one(post)