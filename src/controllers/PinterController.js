//node_modules
const axios = require('axios');
//models
const Printer = require('../model/PrinterModel');
//utils
//const ParseString = require('../utils/parseStringAsArray');

//store: para registrar no banco
//index: para listar varios registros
//show: para listar um unico registro
//update: alterar informações em um registro
//destroy: deletar um registro

module.exports = {

 async index(req, res){
  const printers = await Printer.find();
  
  return res.json(printers);
},

 async store(req, res) {
  const { model, marc, type, enumerable, ppm, wifi, consumption } = req.body;
  
   
    pinter = await Printer.create({
      model,
      cateory: [marc, type, enumerable],
      ppm,
      wifi,
      consumption
    });
  
 
  return res.json(Printer);
},

};
