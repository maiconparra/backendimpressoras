//node_modules
const axios = require('axios');
//models
const Dev = require('../model/Dev');
//utils
//const ParseString = require('../utils/parseStringAsArray');

//store: para registrar no banco
//index: para listar varios registros
//show: para listar um unico registro
//update: alterar informações em um registro
//destroy: deletar um registro

module.exports = {

 async index(req, res){
  const devs = await Dev.find();

  return res.json(devs);
},

 async store(req, res) {
  const { github_username, techs, latitude, longitude } = req.body;
  const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);

  let dev = await Dev.findOne({ github_username });

  if(!dev){
    const { name = login, avatar_url, bio } = apiRes.data;
  
    const techsArray = techs.split(',').map(tech => tech.trim());
   
    const location = {
     type: 'Point',
     coordinates: [longitude, latitude],
    }
   
    dev = await Dev.create({
     github_username,
     name,
     avatar_url,
     bio,
     techs: techsArray,
     location,
    });
  }
 
  return res.json(dev);
},

};
