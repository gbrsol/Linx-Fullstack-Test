var application = require('./app/config/server');

application.listen(3000, function(){
    console.log('Server Online!');
});