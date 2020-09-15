var express = require("express");
var jwt = require('jsonwebtoken');

//npm install md5
//npm install json-web-token

var key  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiU3RyaW5nIiwicGFzc3dvcmQiOiIyNzExODMyNjAwNmQzODI5NjY3YTQwMGFkMjNkNWQ5OCJ9LCJpYXQiOjE1OTk4NDA1Mzh9.yzFk60Mm6fQzEuq8pFifTmBNSL6PbtHMEXzRicXDPTY";

var router = express.Router();

var userDAO = require("../DAO/userDAO");


router.post("/signup",function(req,res) {

    var data = {

        username : req.body.username,
        password : req.body.password,
        role : req.body.role
    }


    userDAO.signup(data,function(err,user) {

        if(err) res.send(err);
        else res.send(user)
    })

});


router.post("/login",function(req,res) {

    var data = {
        username : req.body.username,
        password : req.body.password
    }
userDAO.login(data,function(err,user)
{
    if(err) res.send(err);
    else {
        if(user) {
jwt.sign({username:user.username},key,function(err,token)
{
    if (err) {
        res.send({ message: "something's wrongs !"})
    }
        res.send({ token})
})
    }else res.send("user not found");
    }
})
});



module.exports = router;
