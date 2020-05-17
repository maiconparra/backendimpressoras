const { Router } = require('express');
//Controllers
const DevController = require('./controllers/PinterController');

const routes = Router();

routes.get('/printers', DevController.index);
routes.post('/printers', DevController.store);



module.exports = routes;