var mongodb = require('mongodb');
var dbConnection = function(){
    var db = new mongodb.Db('linxtest', new mongodb.Server('localhost',27017,{}),{});
    console.log('Connection accepted');
    return db;
}
module.exports = function()
{
    return dbConnection;
}