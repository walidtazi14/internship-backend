
const path = require('path');
const process = require('process');
const dirPath = path.join(process.cwd(), '/service/userService');
const dirPath2 = path.join(process.cwd(), '/routes/auth');
const dirPath3 = path.join(process.cwd(), '/database/db');
var db = require(dirPath3);
var md5 = require('md5');

var userService = require(dirPath);


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
