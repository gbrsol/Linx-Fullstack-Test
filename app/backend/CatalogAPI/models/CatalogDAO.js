const readline = require("readline")
const fs = require("fs")

function CatalogDAO()
{
    this.products = []
}

CatalogDAO.prototype.getOnSale = function (request, response)
{

}

CatalogDAO.prototype.getBestSellers = function(request, response)
{

}

let readCatalog =  async function()
{
    const readInterface = readline.createInterface({
        input: fs.createReadStream('../data/catalog.json'),
        output: process.stdout,
        console: false
    })
    readInterface.on('line', (line) => {
        this.products.add(line)
    })

}

let populateDatabase = async function(request, response)
{
    this.readJSON().then( ()=> {
        //insert
    })
}

module.exports.get = function(application, request, response, id)
{
    if(id)
    {
        //busca 1
    }
    else {
        //busca tudo
    }
}

module.exports = function()
{
    return ProductsDAO
}