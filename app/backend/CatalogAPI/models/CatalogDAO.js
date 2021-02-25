function CatalogDAO(connection)
{
    this._connection = connection()
}

module.exports.get = function(request, response, id, type=0) // treating 0 for complete, 1 for compact
{
    if(id)
    {
        //busca 1
        this._connection.open(function(err, mongoclient){
            mongoclient.collection("catalog", function(err, collection){
                collection.find({id: id, status: 'AVAIBLE'}).toArray(function(err, result){
                    if(!type) 
                        response.send(result)//{'name': result.name, 'price': result.price, 'status':result.status, 'categories': result.categories}
                }); 
                mongoclient.close();
            });
        });
    }
    else {
        //busca tudo
        this._connection.open(function(err, mongoclient){
            mongoclient.collection("catalog", function(err, collection){
                collection.find({}).toArray(function(err, result){
                    if(!type) 
                        response.send(result)
                });
                mongoclient.close();
            });
        });
    }
}

CatalogDAO.prototype.getOnSale = function (request, response, limit)
{
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("catalog", function(err, collection){
            collection.find({id: id, status: 'AVAIBLE'}).toArray(function(err, result){
                if(!type) 
                    response.send(result)
            });
            mongoclient.close();
        });
    });
}

CatalogDAO.prototype.getBestSellers = function(request, response, limit)
{
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("catalog", function(err, collection){
            collection.find({id: id, status: 'AVAIBLE'}).toArray(function(err, result){
                if(!type) 
                    response.send(result)
            });
            mongoclient.close();
        });
    });
}

module.exports = function()
{
    return CatalogDAO
}