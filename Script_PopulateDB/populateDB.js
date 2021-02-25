const readline = require("readline")
const fs = require("fs")
const mongodb = require('mongodb');
const lineReader = require('line-reader');

const init = async function()
{
    this._connection = dbConnection()
}

var dbConnection = function(){
    var db = new mongodb.Db('linxtest', new mongodb.Server('localhost',27017,{}),{});
    return db;
}

const populateDatabase = function()
{
    this._connection.open(function(err, mongoclient){
        console.log('Connection started')
        mongoclient.collection("catalog", function(err, collection){
            var products = []
            lineReader.eachLine('Linx-Fullstack-Test/Script_PopulateDB/catalog.json', (line) => {
                products.push(JSON.parse(line))
            })
            setTimeout(() => { // I don't know how to use promises and async very well
                collection.insertMany(products).then( () => {
                    mongoclient.close()
                    console.log('Success in populating')
                })
            }, 2000);
        })
    })
}

init()
setTimeout(() => {
    populateDatabase()
}, 1000);