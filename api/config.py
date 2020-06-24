from pymongo import MongoClient

client = MongoClient("mongodb+srv://stfueat:stfueat@stfueat-mfqnc.mongodb.net/test?retryWrites=true&w=majority")
db = client.STFU
restaurant_collection = db.restaurants
user_collection = db.users