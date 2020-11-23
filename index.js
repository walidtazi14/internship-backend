
const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var stagiaireRoute = require("/app/routes/stagiaireRoute");
var demandeRoute = require("/app/routes/demandeRoute");
var entrepriseRoute = require("/app/routes/entrepriseRoute");
var userRoute = require("/app/routes/userRoute");
var offreRoute = require("/app/routes/offreRoute");

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
  });



app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/stagiaire",stagiaireRoute);

app.use("/api/demande",demandeRoute);

app.use("/api/entreprise",entrepriseRoute);
app.use("/api/offre",offreRoute);

app.use("/api/user",userRoute);

app.listen(process.env.PORT || 3000, function(){
});
module.exports = app;