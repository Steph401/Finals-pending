 const mongoose = require ('mongoose')
const express = require('express')
const Shoes = require('./model/shoes')
const { MongoServerClosedError } = require('mongodb')

const dbUri = 'mongodb+srv://postgres:postgres@cluster0.qo10uab.mongodb.net/sneakers?retryWrites=true&w=majority'
const app = express()

mongoose.connect(dbUri)
    .then(app.listen(3070, (err) =>{
        if(!err) console.log('listening to port 3070')
    }))
    .catch(error =>{
        if(error) console.log('unable to connect')
    })

    
            //create
            app.use(express.json())
            app.post('/addShoes', (req, res) => {
                const shoes = new Shoes(req.body);
                shoes.save()
            .then(result => {
                console.log(result)
            })
            .catch(error =>{
                if(error) console.log('unable to insert document')

            })  
            })
       
            //read
            app.get('/shoes', (req, res) => {
            Shoes.find()
            .then( result => {
            res.send( result)
            })
            .catch(err => res.send(err))  
           
            })

            //update
            app.patch('/shoes', (req, res) => {
                Shoes.findByIdAndUpdate('636dee4abf4d03fcaa7cc96a', req.body)
                .then( result => {
                res.send( result)
                })
                .catch(err => {
                    console.log(err)
                })  
               
                })

            

            //delete        
            app.delete('/shoes', (req, res) => {
                    Shoes.findByIdAndDelete('636dee4abf4d03fcaa7cc96a')
                    .then( result => {
                    res.send( result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    })
             


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect (url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});