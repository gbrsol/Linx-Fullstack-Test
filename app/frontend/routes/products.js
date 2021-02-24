module.exports = function(application)
{
    application.get('/products/best_sellers', function(request, response)
    {
        application.app.controllers.products.get_best_sellers(application, request, response)
    })
    application.get('/products/on_sale', function(request, response)
    {
        application.app.controllers.products.get_on_sale(application, request, response)
    })
}