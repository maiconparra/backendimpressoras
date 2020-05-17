const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb+srv://maiconparra:test@cluster0-4avqv.mongodb.net/desafioVenturus?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use(routes);


//Métodos HTTP: GET, POST, PUT, DELET

//Métodos de parâmetros:
//Query Params: request.query (Filtros, Ordenação, Paginação, ...)
//Route Params: request.params (Indentificar um recurso na alteração ou remoção)
//Body: request.body ( Dados para criação ou alteração de um registro )

app.listen(5400);