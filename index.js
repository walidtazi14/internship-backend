
const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var stagiaireRoute = require("./routes/stagiaireRoute");
var demandeRoute = require("./routes/demandeRoute");
var entrepriseRoute = require("./routes/entrepriseRoute");
var userRoute = require("./routes/userRoute");
var offreRoute = require("./routes/offreRoute");

var app = express();


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
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
module.exports = app;