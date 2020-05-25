from pymongo import MongoClient

client = MongoClient("mongodb+srv://stfueat:stfueat@stfueat-mfqnc.mongodb.net/test?retryWrites=true&w=majority")
db = client.test
restaurants = db.restaurant