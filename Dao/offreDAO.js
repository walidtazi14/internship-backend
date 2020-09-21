var db = require("../database/db");
var offreService = require("../service/offreService");


var offreDAO = function() {
}

offreDAO.prototype = Object.create(offreService.prototype);

offreDAO.prototype.addOffre = function(data,callback) {


    var offre = new db.offreModel({

        id_entreprise:data.id_entreprise,
        nom : data.nom,
        dateDebut :new Date(data.dateDebut),
        dateFin :new Date(data.dateFin),
        specialite:data.specialite,
        description :data.description,
        nbrPersonne :data.nbrPersonne,
        remuneration:data.remuneration,
        niveau : data.niveau,
        diplome : data.diplome

            

    });

    offre.save(callback);
}
offreDAO.prototype.updateOffre = function(data,callback) {


    db.offreModel.findById({_id:data.id},function(err,offre) {

        if(err) callback(err,null);
        else {


            
            offre.nom = data.nom;
            offre.dateDebut = data.dateDebut;
            offre.dateFin = data.dateFin;
            offre.specialite = data.specialite;
            offre.description =data.description;
            offre.nbrPersonne = data.nbrPersonne;
            offre.remuneration = data.remuneration;
            offre.niveau = data.niveau;
            offre.diplome = data.diplome;
            
            

            offre.save(callback);

        }

    });
}
offreDAO.prototype.deleteoffre = function(id,callback) {

  db.offreModel.findOne({_id:id},function(err,offre){

     if(err) callback(err,null);

     else offre.remove(callback)

  });
}
offreDAO.prototype.findAll = function(callback) {

    db.offreModel.find({},callback);

}

offreDAO.prototype.findById = function(id,callback) {

    db.offreModel.findOne({_id:id},callback);

}

offreDAO.prototype.findBySpecialite = function(specialite,callback) {

    db.offreModel.findOne({_specialite:specialite}).populate("stagiaire").exec(callback);

}

offreDAO.prototype.findByEntreprise = function(id_entreprise,callback) {

    db.offreModel.findOne({_id_entreprise:id_entreprise}).populate("stagiaire").exec(callback);

}

offreDAO.prototype.attacherstagiaire = function(id,id_stagiaire,callback) {

    db.offreModel.findOne({_id:id},function(err,offre) {

       if(err) callback(err,null);
       else {

           offre.stagiaire.push({_id:id_stagiaire});
           offre.save(callback);
       }
    })

}
offreDAO.prototype.dettacherstagiaire = function(id,id_stagiaire,callback) {


    db.offreModel.findOne({_id:id},function(err,offre) {

       if(err) callback(err,null);
       else {

           offre.update({$pull : {stagiaire:id_stagiaire}});

       }

    });
}
offreDAO.prototype.countst = function(callback) {
    db.offreModel.countDocuments(callback);
}



module.exports = new offreDAO();