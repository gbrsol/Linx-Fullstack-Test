let get_recommendations = function(application, request, response)
{
    const conn = application.app.config.dbConnection;
    var CatalogDAO = new application.app.backend.CatalogAPI.models.CatalogDAO(conn);
    setTimeout(() => {
        return [CatalogDAO.getOnSale(), CatalogDAO.getBestSellers()]
    }, 500)
}

module.exports.endpoint = function(application, request, response)
{
    var res = get_recommendations(application, request, response)
    response.render('showcase', {pricereduction: res[0], mostpopular: res[1]})
}