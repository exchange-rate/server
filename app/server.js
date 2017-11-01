'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';

// console.log(process.env.DATABASE_URL);

const app = express();

app.get('/', (req, res) => {
    res.send('Хомяк 😋👩‍👩‍👧👩‍👩‍👧‍👦 пыщка assad2d3\n');
});

// app.listen(PORT, HOST);

// console.log(`Running on http://${HOST}:${PORT}`);

// var URL = 'mongodb://localhost:27017/mydatabase';
//

// console.log('DATABASE_URL', process.env.DATABASE_URL);
//
// MongoClient.connect(process.env.DATABASE_URL, function (err, db) {
//     if (err) return;
//
//     db.collection('foods').findOne({ name: 'taco' }).then(a => {
//         console.log(a);
//     });
//
//     // var collection = db.collection('foods');
//     //
//     // collection.find({
//     //     name: 'taco'
//     // }).next();
//
//     db.close();
//
//     // collection.insert({name: 'taco', tasty: true}, function (err, result) {
//     //     collection.find({name: 'taco'}).toArray(function (err, docs) {
//     //         console.log(docs[0]);
//     //         db.close();
//     //     })
//     // })
// });