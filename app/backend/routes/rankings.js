module.exports = function(application)
{
    application.get('/rankings/mostpopular.json', function(request, response)
    {
        response.redirect('/ranking/mostpopular.json')
    })
    application.get('/rankings/pricereduction.json', function(request, response)
    {
        response.redirect('/ranking/pricereduction.json')
    })
}