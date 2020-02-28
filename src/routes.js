const { Router } = require('express');
//Controllers
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/dev', DevController.index);
routes.post('/dev', DevController.store);

routes.post('/user', UserController.store);

routes.get('/search', SearchController.index);


module.exports = routes;