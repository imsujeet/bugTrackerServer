const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://Sujeet_bugtracker:mongoDB_bugTracker@cluster0-a5y4t.mongodb.net/bugTracker?retryWrites=true&w=majority';

let _db;

const mongoConnect = callback => {
    mongoClient.connect(url,{ useUnifiedTopology: true })
    .then(client => {
        console.log('Connected');
        _db = client.db();
        callback();

    })
    .catch(err => {
        console.log(err);
    });

}

const getDb = () => {
    if( _db ){
        return _db;
    }
    throw 'No Database Found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb; 

