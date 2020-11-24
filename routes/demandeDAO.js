const path = require('path');
const process = require('process');
const dirPath = path.join(process.cwd(), '/service/demandeService');
const dirPath2 = path.join(process.cwd(), '/routes/auth');
const dirPath3 = path.join(process.cwd(), '/routes/db');
var db = require(dirPath3);
var demandeService = require(dirPath);


var demandeDAO = function() {


}

demandeDAO.prototype = Object.create(demandeService.prototype)


demandeDAO.prototype.addDemande = function(data,callback) {

    var demande = new db.demandeModel({
        id_stagiaire :data.id_stagiaire,
        nom : data.nom,
        ville : data.ville,
        dateDebut :new Date(data.dateDebut),
        dateFin :new Date(data.dateFin),
        specialite:data.specialite,
        description :data.description,
        remuneration:data.remuneration,
        niveau : data.niveau,
        diplome : data.diplome


    });


    demande.save(callback);


}
demandeDAO.prototype.updateDemande = function(data,callback) {

    db.demandeModel.findById({_id:data.id},function(err,demande) {

        if(err) callback(err,null);
        else {
        
           
            demande.nom = data.nom;
            demande.dateDebut = data.dateDebut;
            demande.dateFin = data.dateFin;
            demande.specialite=data.specialite;
            demande.description=data.description;
            demande.remuneration=data.remuneration;
            demande.niveau=data.niveau;
            demande.diplome=data.diplome;

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

    db.demandeModel.find({id_stagiaire:id_stagiaire},callback);

}

module.exports = new demandeDAO();