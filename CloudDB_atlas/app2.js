const mongoose = require ('mongoose')
const express = require('express')
const Product = require('./model/product')
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

    const crypto = require('crypto');

    let secret = 'WCA1'     //7850eab314cb455a121467842eb7d02c
   
    
    let hash = crypto.createHash('md5').update(secret).digest('hex')
 
    console.log(hash)
    


/*
    const { appendFile } = require('fs');
    const { Double } = require('mongodb');
    const secret = '1';   //c4ca4238a0b923820dcc509a6f75849b
    const hash = crypto.createHash('md5').update(secret).digest('hex'); 
    console.log(hash);

    const cipher = crypto.createCipher('aes192', 'secret');
    var encrypted = cipher.update('1', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);

    const decipher = crypto.createDecipher('aes192', 'secret');

    var encrypted = '77bc60d6b54232900923c11726079d10';
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted); 

    app.use(express.json())
        app.post('/product', (req, res) => {
            const product = new Product(req.body);
            product.save()
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            if(error) console.log('unable to hash')

        })  
        })   */

       


/*
const { appendFile } = require('fs');
const { Double } = require('mongodb');
const secret22 = '2';   //c81e728d9d4c2f636f067f89cc14862c
const hash22 = crypto.createHash('md5').update(secret22).digest('hex'); 
console.log(hash22);

const cipher = crypto.createCipher('aes192', 'secret');
var encrypted = cipher.update('2', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipher('aes192', 'secret');

var encrypted = '4fad1a2e874032b4965f17a34dac5cb6';
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

 app.use(express.json())
        app.post('/product', (req, res) => {
            const product = new Product(req.body);
            product.save()
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            if(error) console.log('unable to hash')

        })  
        })   */
       

/*
        const { appendFile } = require('fs');
const { Double } = require('mongodb');
const secret33 = '3';   //eccbc87e4b5ce2fe28308fd9f2a7baf3
const hash33 = crypto.createHash('md5').update(secret33).digest('hex'); 
console.log(hash33);

const cipher = crypto.createCipher('aes192', 'secret');
var encrypted = cipher.update('3', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipher('aes192', 'secret');

var encrypted = 'e04946f4cd7f9994363c674bc52069f2';
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

 app.use(express.json())
        app.post('/product', (req, res) => {
            const product = new Product(req.body);
            product.save()
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            if(error) console.log('unable to hash')
        })  
    })  */

 

 /*   
    const { appendFile } = require('fs');
const { Double } = require('mongodb');
const secret44 = '4';   //a87ff679a2f3e71d9181a67b7542122c
const hash44 = crypto.createHash('md5').update(secret44).digest('hex'); 
console.log(hash44);

const cipher = crypto.createCipher('aes192', 'secret');
var encrypted = cipher.update('4', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipher('aes192', 'secret');

var encrypted = '558a30cd92acba079a73021103c4b516';
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

 app.use(express.json())
        app.post('/product', (req, res) => {
            const product = new Product(req.body);
            product.save()
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            if(error) console.log('unable to hash')
        })  
    })   */


    /*
    const { appendFile } = require('fs');
const { Double } = require('mongodb');
const secret55 = '5';   //e4da3b7fbbce2345d7772b0674a318d5
const hash55 = crypto.createHash('md5').update(secret55).digest('hex'); 
console.log(hash55);

const cipher = crypto.createCipher('aes192', 'secret');
var encrypted = cipher.update('5', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipher('aes192', 'secret');

var encrypted = '5c5c7734d11b3a60e6a8241bacd3f408';
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

 app.use(express.json())
        app.post('/product', (req, res) => {
            const product = new Product(req.body);
            product.save()
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            if(error) console.log('unable to hash')
        })  
    })  */


    
    const { appendFile } = require('fs');
const { Double } = require('mongodb');
const secret66 = '6';   //1679091c5a880faf6fb5e6087eb1b2dc
const hash66 = crypto.createHash('md5').update(secret66).digest('hex'); 
console.log(hash66);

const cipher = crypto.createCipher('aes192', 'secret');
var encrypted = cipher.update('6', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipher('aes192', 'secret');

var encrypted = '55958afeaaec18ea1592ebf0155974a2';
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);



 app.use(express.json())
        app.post('/product', (req, res) => {
            const product = new Product(req.body);
            product.save()
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            if(error) console.log('unable to hash')
        })  
    })    