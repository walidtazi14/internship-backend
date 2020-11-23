
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');


var user= new mongoose.Schema({

nom : String,
username :{type :String,require:true,index:{unique:true}},
password :{type:String,require:true,select:false},
role : {type:Boolean,require:true,default:1}

});


var stagiaire = new mongoose.Schema({
        
        nom : String,
        prenom : String,
        sexe : String,
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

var file =new mongoose.Schema({
  body:String
})

const conn =mongoose.connect("mongodb://souf:soufix@cluster0-shard-00-00.kqrtj.mongodb.net:27017,cluster0-shard-00-01.kqrtj.mongodb.net:27017,cluster0-shard-00-02.kqrtj.mongodb.net:27017/internship?ssl=true&replicaSet=atlas-koy83r-shard-0&authSource=admin&retryWrites=true&w=majority", {

//useMongoClient: true
});
let gfs;

     

mongoose.connection.once('open', function() {
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection('files');
});

const storage = new GridFsStorage({
    url: "mocluster0ngodb://souf:soufix@-shard-00-00.kqrtj.mongodb.net:27017,cluster0-shard-00-01.kqrtj.mongodb.net:27017,cluster0-shard-00-02.kqrtj.mongodb.net:27017/internship?ssl=true&replicaSet=atlas-koy83r-shard-0&authSource=admin&retryWrites=true&w=majority",
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'files'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  
  const upload = multer({ storage });

var stagiaireModel = mongoose.model("stagiaire",stagiaire);
var demandeModel = mongoose.model("demande",demande);
var entrepriseModel = mongoose.model("entreprise",entreprise);
var userModel = mongoose.model("users",user);
var offreModel = mongoose.model("offre",offre);
var fileModel = mongoose.model("file",file);
module.exports.offreModel = offreModel;
module.exports.userModel = userModel;
module.exports.stagiaireModel = stagiaireModel;
module.exports.demandeModel =demandeModel ;
module.exports.entrepriseModel =entrepriseModel;
module.exports.upload = upload;
module.exports.fileModel = fileModel;

