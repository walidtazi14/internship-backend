var db = require("../database/db");
var entrepriseService = require("../service/entrepriseService");


var entrepriseDAO = function() {    

}



entrepriseDAO.prototype.addEntreprise = function(data,callback) {

   var entreprise = new db.entrepriseModel({

       nom : data.nom,
       ville : data.ville,
       specialite : data.specialite,
       tele: data.tele,
       email:data.email

   });

   entreprise.save(callback);

}

entrepriseDAO.prototype.updateEntreprise = function(data,callback) {

    db.entrepriseModel.findOne({_id:data.id},function(err,entreprise) {


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

module.exports = new entrepriseDAO();