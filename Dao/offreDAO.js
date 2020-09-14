var db = require("../database/db");
var OffreService = require("../service/OffreService");


var OffreDAO = function() {
}

OffreDAO.prototype = Object.create(OffreService.prototype);

OffreDAO.prototype.addOffre = function(data,callback) {


    var Offre = new db.OffreModel({

        "id_entreprise":data.id_entreprise,
        "Nom" : data.Nom,
        "dateDebut" : data.dateDebut,
        "dateFin" : data.dateFin,
        "specialite":data.specialite
            

    });

    Offre.save(callback);
}
OffreDAO.prototype.updateOffre = function(data,callback) {


    db.OffreModel.findOne({"_id":data.id},function(err,Offre) {

        if(err) callback(err,null);
        else {

            Offre.id_entreprise = data.id_entreprise;
            Offre.Nom = data.Nom;
            Offre.dateDebut = data.dateDebut;
            Offre.dateFin = data.dateFin;
            Offre.save(callback);

        }

    })
}
OffreDAO.prototype.deleteOffre = function(id,callback) {

  db.OffreModel.findOne({"_id":id},function(err,Offre){

     if(err) callback(err,null);

     else Offre.remove(callback)

  });
}
OffreDAO.prototype.findAll = function(callback) {

    db.OffreModel.find({}).populate("stagiaire").exec(callback);

}

OffreDAO.prototype.findById = function(id,callback) {

    db.OffreModel.findOne({"_id":id_entreprise}).populate("stagiaire").exec(callback);

}
OffreDAO.prototype.attacherstagiaire = function(id,id_stagiaire,callback) {

    db.OffreModel.findOne({"_id":id},function(err,Offre) {

       if(err) callback(err,null);
       else {

           Offre.stagiaire.push({"_id":id_stagiaire});
           Offre.save(callback);
       }
    })

}
OffreDAO.prototype.dettacherstagiaire = function(id,id_stagiaire,callback) {


    db.OffreModel.findOne({"_id":id},function(err,Offre) {

       if(err) callback(err,null);
       else {

           Offre.update({$pull : {"stagiaire":id_stagiaire}});

       }

    });
}



module.exports = new OffreDAO();