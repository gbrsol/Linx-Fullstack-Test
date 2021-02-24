const catalog = require('../public/data/catalog.json')

function ProductsDAO()
{

}

ProductsDAO.prototype.getOnSale = function (request, response)
{
    console.log(catalog[0])
}

ProductsDAO.prototype.getBestSellers = function(request, response)
{

}


module.exports = function()
{
    return ProductsDAO
}