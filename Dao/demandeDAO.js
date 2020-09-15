var db = require("../database/db");
var demandeService = require("../service/demandeService");


var demandeDAO = function() {


}

demandeDAO.prototype = Object.create(demandeService.prototype)


demandeDAO.prototype.addDemande = function(data,callback) {

    var demande = new db.demandeModel({
        id_stagiaire :data.id_stagiaire,
        nom_demaine:data.nom_demaine,
        dateDebut : data.dateDebut,
        dateFin : data.dateFin,
        specialite : data.specialite,
        description : data.description

    });


    demande.save(callback);


}
demandeDAO.prototype.updateDemande = function(data,callback) {

    db.demandeModel.findById({_id:data.id},function(err,demande) {

        if(err) callback(err,null);
        else {
        
           
            demande.nom_demaine = data.nom_demaine;
            demande.dateDebut = data.dateDebut;
            demande.dateFin = data.dateFin;
            demande.specialite=data.specialite;
            demande.description=data.description;

            demande.save(callback)
        }

    });

}
demandeDAO.prototype.deleteDemande = function(id,callback) {

    db.demandeModel.findOne({_id:id},function(err,demande) {

        if(err) callback(err,null);
        else {

            demande.remove(callback)
        }

    });



}
demandeDAO.prototype.findAll = function(callback) {


    db.demandeModel.find({},callback);


}
demandeDAO.prototype.findById = function(id,callback) {

    db.demandeModel.findOne({_id:id},callback);
}
demandeDAO.prototype.findBySpecialite = function(specialite,callback) {

    db.demandeModel.find({_specialite:specialite},callback);



}
demandeDAO.prototype.findByStagiaire = function(id_stagiaire,callback) {

    db.demandeModel.find({_id_stagiaire:id_stagiaire},callback);

}

module.exports = new demandeDAO();