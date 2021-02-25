module.exports = function(application)
{
    application.get('/', function(request, response)
    {
        application.app.backend.controllers.home.index(application, request, response)
    })
}