//node_module
const axios = require('axios');
//models
const Dev = require('../model/Dev');
//utils
const ParseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

 async index(req, res){

  const { latitude, longitude, techs } = req.query;

  const techsArray = ParseStringAsArray.parseStringAsArray(techs);

  const devs = Dev.find({
    techs: {
     $in: techsArray,
    },
    location: {
     $near: {
      $geometry: {
       type: 'Point',
       coordinates: [longitude, latitude]
      },
       $maxDistance: 10000,
     },
    },
  });

  return res.json({ devs });
 }

}