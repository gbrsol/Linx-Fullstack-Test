function CatalogDAO(connection)
{
    console.log('DAO Has connection '+ this._connection)
    this._connection = connection()
}

module.exports.get = function(request, response, id, type=0) // treating 0 for complete, 1 for compact
{
    if(id)
    {
        //busca 1
        this._connection.open(function(err, mongoclient){
            mongoclient.collection("catalog", function(err, collection){
                if(type)
                {
                    collection.find({id: id, status: 'AVAIBLE'}).toArray(function(err, result){ //{projection:{ _id: 0, name: 1, price: 2, status: 3, ​categories: 4​}}
                        return result;
                    });
                }
                else
                {
                    collection.find({id: id, status: 'AVAIBLE'}).toArray(function(err, result){
                        return result;
                    });
                }
                mongoclient.close();
            });
        });
    }
}

CatalogDAO.prototype.getOnSale = function (request, response)
{
    const fs = require('fs');
    
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("catalog", function(err, collection){
            collection.find({status: 'AVAIBLE'}).toArray(function(err, result){
                var final = []
                for(var i = 0; i < result.length; i++)
                    final.push(result[i].id)
                fs.writeFile('app/frontend/public/ranking/pricereduction.json', final, function (err) {
                    console.log("JSON written to file was " + final)
                    if(err) 
                        return console.log(err);
                });
            });
            mongoclient.close();
        });
    });
}

CatalogDAO.prototype.getBestSellers = function(request, response)
{
    const fs = require('fs');
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("catalog", function(err, collection){
            collection.find({status: 'AVAIBLE'}).sort({"chave":-1}).toArray(function(err, result){
                var final = []
                for(var i = 0; i < result.length; i++)
                    final.push(result[i].id)
                fs.writeFile('app/frontend/public/ranking/mostpopular.json', final, function (err) {
                    console.log("JSON written to file was " + final)
                    if(err) 
                        return console.log(err);
                });
            });
            mongoclient.close();
        });
    });
}

CatalogDAO.prototype.writeRanking = async function(request, response)
{
    await this.getBestSellers(request, response)
    await this.getOnSale(request, response)
}

module.exports = function()
{
    return CatalogDAO
}