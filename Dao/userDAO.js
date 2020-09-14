var db = require("../database/db");
var md5 = require('md5');

var userService = require("../service/userService");


var userDAO = function() {

}

userDAO.prototype = Object.create(userService.prototype)


userDAO.prototype.signup = function(data,callback) {

       var user = new db.userModel({
           username : data.username,
           password : md5(data.password),
           role : data.role

       });

    user.save(callback);

}

userDAO.prototype.login = function(data,callback) {

   db.userModel.findOne({"username":data.username,"password":md5(data.password)},callback)

}

module.exports = new userDAO();
