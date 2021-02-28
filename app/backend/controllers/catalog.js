module.exports.writeRanking = async function(application, request, response)
{
    var CatalogDAO = await new application.app.backend.CatalogAPI.models.CatalogDAO(application.app.config.dbConnection)
    CatalogDAO.writeRanking(request, response)
}

module.exports.get = async function(application, request, response, json)
{
    var CatalogDAO = await new application.app.backend.CatalogAPI.models.CatalogDAO(application.app.config.dbConnection) 
    return CatalogDAO.get(request, response, 1)
}
