module.exports.writeRanking = async function(application, request, response)
{
    var CatalogDAO = await application.app.backend.CatalogAPI.models.CatalogDAO(application.app.config.dbConnection)
    //await CatalogDAO.writeRanking(request, response)
}

module.exports.get = function(application, request, response, json)
{
    var CatalogDAO = await application.app.backend.CatalogAPI.models.CatalogDAO(application.app.config.dbConnection) 
    return CatalogDAO.get(request, response, 1)
}
