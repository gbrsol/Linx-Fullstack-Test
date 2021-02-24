const ProductsDAO = require("../models/ProductsDAO")
module.exports.get_on_sale = function(application, request, response)
{
    var ProductsDAO = new application.app.models.ProductsDAO();
    var list = ProductsDAO.getOnSale()
    response.render('products/on_sale', {products: on_sale})
}
module.exports.get_best_sellers = function(application, request, response)
{
    var ProductsDAO = new application.app.models.ProductsDAO();
    var list = ProductsDAO.getBestSellers()
    response.render('products/best_sellers', {products: list})
}