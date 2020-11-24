const path = require('path');
const process = require('process');
const dirPath = path.join(process.cwd(), '/service/entrepriseService');
const dirPath2 = path.join(process.cwd(), '/routes/auth');
const dirPath3 = path.join(process.cwd(), '/routes/db');
var db = require(dirPath3);
var entrepriseService = require(dirPath);


var entrepriseDAO = function() {    

}



entrepriseDAO.prototype.addEntreprise = function(data,callback) {

   var entreprise = new db.entrepriseModel({

       nom : data.nom,
       ville : data.ville,
       specialite : data.specialite,
       tele: data.tele,
       email:data.email,
       username:data.username

   });

   entreprise.save(callback);

}
entrepriseDAO.prototype.findById = function(id,callback) {

    db.entrepriseModel.findOne({_id:id},callback);

}
entrepriseDAO.prototype.findByusername = function(username,callback) {

    db.entrepriseModel.findOne({username:username},callback);

}
entrepriseDAO.prototype.updateEntreprise = function(data,callback) {

    db.entrepriseModel.findById({_id:data.id},function(err,entreprise) {


        if(err) callback(err,null);
        else {

            entreprise.nom = data.nom;
            entreprise.ville = data.ville;
            entreprise.specialite = data.specialite;
            entreprise.tele = data.tele;
            entreprise.email = data.email;
    

            entreprise.save(callback);

        }

    });


}
entrepriseDAO.prototype.deleteEntreprise = function(id,callback) {


    db.entrepriseModel.findOne({_id:id},function(err,entreprise) {

        if(err) callback(err,null);
        else entreprise.remove(callback);


    })

}
entrepriseDAO.prototype.findAll = function(callback) {

    db.entrepriseModel.find({},callback);
}
entrepriseDAO.prototype.findBySpecialite = function(specialite,callback) {

    db.entrepriseModel.find({_specialite:specialite},callback);
}
entrepriseDAO.prototype.countst = function(callback) {
    db.entrepriseModel.countDocuments(callback);
}

module.exports = new entrepriseDAO();