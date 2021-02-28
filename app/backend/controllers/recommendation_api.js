let fetchJson = async function(url, maxProducts)
{
   const fetch = require('node-fetch');
   let settings = { method: "Get" };
   let ret = []
   console.log('Fetching JSON from '+ url)
   await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            for(var i = 0; i < maxProducts && json[i] != undefined; i++)
            {
                ret.push(json[i])
                console.log(json[i])
            }
        }).then( ()=> {
            console.log('Fetched JSON')
        }); 
}

module.exports.endpoint = async function(application, request, response, maxProducts)
{
    var catalog = await application.app.backend.controllers.catalog
    maxProducts = (maxProducts < 10 || maxProducts === NaN || maxProducts === undefined) ? 10: maxProducts
    await catalog.writeRanking(application, request, response);
    var mostpopular_ids = await fetchJson('http://localhost:3000/ranking/mostpopular.json', maxProducts)
    var pricereduction_ids = await fetchJson('http://localhost:3000/ranking/pricereduction.json', maxProducts)
    var mostpopular_data = []
    var pricereduction_data = []
    var catalog = application.app.backend.controllers.catalog

    for(json in mostpopular_ids)
        await mostpopular_data.push(application, request, response,catalog.get(json.id))
    for(json in pricereduction_data)
        await pricereduction_data.push(application, request, response,catalog.get(json.id))
    response.render('index', {pricereduction: pricereduction_data, mostpopular: mostpopular_data})
}