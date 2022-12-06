/*const crypto = require('crypto')

let secret = 'Images/DISNEY FORUM 84 LOW SHOES.png'
let secret2 = 'Images/Jordan Why Not .5 PF.png'
let secret3 = 'Images/Nike Air Force 1 07.png'
let secret4 = 'Images/Nike Air Huarache SE.png'
let secret5 = 'Images/Nike Air Force 1 07.png'
let secret6 = 'Images/Nike Air Force 1 07.png'

let hash = crypto.createHash('md5').update(secret).digest('hex')
let hash2 = crypto.createHash('md5').update(secret2).digest('hex')
let hash3 = crypto.createHash('md5').update(secret3).digest('hex')
let hash4 = crypto.createHash('md5').update(secret3).digest('hex')
let hash5 = crypto.createHash('md5').update(secret3).digest('hex')
let hash6 = crypto.createHash('md5').update(secret3).digest('hex')

console.log(hash)
console.log(hash2)
console.log(hash3)
console.log(hash4)
console.log(hash5)
console.log(hash6)*/

const MongoClient = require ('mongodb').MongoClient

const url = "mongodb://localhost:27017/product"

MongoClient.connect(url, (error, database)=>{
    if(error) throw error;
    console.log('connected to db')
})
const dbo = database.db("product")
dbo.createCollection("password", (error, result)=>{
    if(error) throw error
    console.log("created the password collection")
    database.close()
})

//hash
const crypto = require('crypto');
const { appendFile } = require('fs');
const { Double } = require('mongodb');
let secret = '3'
let hash = crypto.createHash('md5').update(secret).digest('hex') 
console.log(hash)

//encryption
/*const cipher = crypto.createCipher('aes192', 'secret')
var encrypted = cipher.update('3', 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted)*/
//decryption
/*const decipher = crypto.createDecipher('aes192', 'secret')
var encrypted = 'e04946f4cd7f9994363c674bc52069f2'
var decrypted = decipher.update(encrypted, 'utf-8', 'hex')
decrypted += decipher.final('hex')
console.log(decrypted)*/


