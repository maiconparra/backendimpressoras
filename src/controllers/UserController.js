//node_modules
const mongoose = require('mongoose');
//models
const User = require('../model/User');

module.exports = {

 async store(req, res){

  const { firstName, lastName, email, profileUrl, dateCreation, password, userRoles } = req.body;

      const user = await User.create({
        firstName,
        lastName,
        email,
        profileUrl,
        dateCreation,
        password,
        userRoles
      });
    return res.json(user);
 },

}