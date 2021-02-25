var mongodb = require('mongodb');
var dbConnection = function(){
    console.log('Entrou na conexão');
    var db = new mongodb.Db('linxtest', new mongodb.Server('localhost',27017,{}),{});
    return db;
}
module.exports = function()
{
    return dbConnection;
}