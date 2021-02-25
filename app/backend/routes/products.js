module.exports = function(application)
{
    application.get('/showcase', function(request, response)
    {
        application.app.backend.controllers.recomendation_api.endpoint(application, request, response)
    })
}