module.exports = async function(application)
{
    application.get('/', async function(request, response)
    {
        //application.app.backend.controllers.home.index(application, request, response)
        application.app.backend.controllers.recommendation_api.endpoint(application, request, response, 30)
    })
}