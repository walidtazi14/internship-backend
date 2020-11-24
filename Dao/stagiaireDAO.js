
const path = require('path');
const process = require('process');
const dirPath = path.join(process.cwd(), '/service/stagiaireService');
const dirPath2 = path.join(process.cwd(), '/routes/auth');
const dirPath3 = path.join(process.cwd(), '/database/db');
var db = require(dirPath3);
var stagiaireService = require(dirPath);

var  stagiaireDAO  = function() {

}

stagiaireDAO.prototype = Object.create(stagiaireService.prototype);



stagiaireDAO.prototype.addStagiaire = function(data,callback) {

    var stagiaire = new db.stagiaireModel({

        nom : data.nom,
        prenom : data.prenom,
        email : data.email,
        cin : data.cin,
        dateNaissance : data.dateNaissance,
        lieuNaissance: data.lieuNaissance,
        specialite: data.specialite,
        diplome: data.diplome,
        tele:data.tele,
        username:data.username,
        description :data.description
    });


    stagiaire.save(callback);
}

stagiaireDAO.prototype.findAll = function(callback) {


    db.stagiaireModel.find({},callback);

}


stagiaireDAO.prototype.findById = function(id,callback) {

    db.stagiaireModel.findOne({_id:id},callback);

}

stagiaireDAO.prototype.findByusername = function(username,callback) {

    db.stagiaireModel.findOne({username:username},callback);

}

stagiaireDAO.prototype.updateStagiaire = function(data,callback) {

    db.stagiaireModel.findById({_id:data.id},function(err,stagiaire) {

        if(err) callback(err,null);
        else  {

            stagiaire.nom = data.nom;
            stagiaire.prenom = data.prenom;
            stagiaire.email = data.email;
            stagiaire.dateNaissance = data.dateNaissance;

            stagiaire.save(callback);

        }

    });
}

stagiaireDAO.prototype.deleteStagiaire = function(id,callback) {

    //db.stagiaireModel.findOneAndRemove({_id:id},callback);

    db.stagiaireModel.findOne({_id:id},function(err,stagiaire) {

        if(err) callback(err,null);
        else stagiaire.remove(callback)

    });

}


stagiaireDAO.prototype.findBySpecialite = function(specialite,callback) {

    db.stagiaireModel.find({_specialite:specialite},callback);

}

stagiaireDAO.prototype.countst = function(callback) {
    db.stagiaireModel.countDocuments(callback);
}




module.exports = new stagiaireDAO();


