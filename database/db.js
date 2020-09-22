var mongoose = require("mongoose");


var user= new mongoose.Schema({

nom : String,
username :{type :String,require:true,index:{unique:true}},
password :{type:String,require:true,select:false},
role : {type:Boolean,require:true,default:1}

});


var stagiaire = new mongoose.Schema({
        
        nom : String,
        prenom : String,
        cin:String,
        dateNaissance : Date,
        lieuNaissance: String,
        specialite: String,
        diplome: String,
        tele:Number,
        email:String,
        description:String,
        username:String
});

var demande = new mongoose.Schema({
    id_stagiaire :String,
    nom : String,
    ville : String,
    dateDebut : Date,
    dateFin : Date,
    specialite : String,
    description : String,
    nbrPersonne :Number,
    remuneration : Number,
    niveau :String,
    diplome :String


});

var offre = new mongoose.Schema({
    id_entreprise : String,
    nom : String,
    dateDebut : Date,
    ville : String,
    dateFin : Date,
    specialite : String,
    description : String,
    nbrPersonne :Number,
    remuneration : Number,
    niveau :String,
    diplome :String
    
});



var entreprise = new mongoose.Schema({
       nom :String,
       ville : String,
       specialite : String,
       tele: Number,
       email:String,
       username:String
    
});

var user = new mongoose.Schema({
    username : String,
    password : String,
    role : [],
});

mongoose.connect("mongodb://souf:soufix@cluster0-shard-00-00.kqrtj.mongodb.net:27017,cluster0-shard-00-01.kqrtj.mongodb.net:27017,cluster0-shard-00-02.kqrtj.mongodb.net:27017/internship?ssl=true&replicaSet=atlas-koy83r-shard-0&authSource=admin&retryWrites=true&w=majority", {

//useMongoClient: true
});

     

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

var stagiaireModel = mongoose.model("stagiaire",stagiaire);
var demandeModel = mongoose.model("demande",demande);
var entrepriseModel = mongoose.model("entreprise",entreprise);
var userModel = mongoose.model("users",user);
var offreModel = mongoose.model("offre",offre);

module.exports.offreModel = offreModel;
module.exports.userModel = userModel;
module.exports.stagiaireModel = stagiaireModel;
module.exports.demandeModel =demandeModel ;
module.exports.entrepriseModel =entrepriseModel;

