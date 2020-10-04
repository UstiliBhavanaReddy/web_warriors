const express = require('express');
const app = express();
const port = 8500;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017"
let db;
var cors = require('cors');

app.use(cors());

app.get('/',(req,res) => {
    
    db.collection('certificate').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log(err)
    db= client.db('certificates');
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})