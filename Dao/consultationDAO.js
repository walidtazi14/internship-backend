var db = require("../database/db");
var consultationService = require("../service/consultationService");


var consultationDAO = function() {


}

consultationDAO.prototype = Object.create(consultationService.prototype);

consultationDAO.prototype.addconsultation = function(data,callback) {


    var consultation = new db.consultationModel({

        "libelle" : data.libelle,
        "prix" : data.prix,
        "medecin" : []

    });

    consultation.save(callback);
}
consultationDAO.prototype.updateconsultation = function(data,callback) {


    db.consultationModel.findOne({"_id":data.id},function(err,consultation) {

        if(err) callback(err,null);
        else {

            consultation.libelle = data.libelle;
            consultation.prix = data.prix;

            consultation.save(callback);

        }

    })
}
consultationDAO.prototype.deleteconsultation = function(id,callback) {

  db.consultationModel.findOne({"_id":id},function(err,consultation){

     if(err) callback(err,null);

     else consultation.remove(callback)

  });


}
consultationDAO.prototype.findAll = function(callback) {

    db.consultationModel.find({}).populate("medecin").exec(callback);


}
consultationDAO.prototype.findById = function(id,callback) {

    db.consultationModel.findOne({"_id":id}).populate("medecin").exec(callback);

}
consultationDAO.prototype.attacherMedecin = function(id,id_medecin,callback) {

    db.consultationModel.findOne({"_id":id},function(err,consultation) {


       if(err) callback(err,null);
       else {

           consultation.medecin.push({"_id":id_medecin});
           consultation.save(callback);

       }


    })

}
consultationDAO.prototype.dettacherMedecin = function(id,id_medecin,callback) {

  // db.consultationModel.findOneAndUpdate({"_id":id},{$pull:{"medecin":id_medecin}},callback)

    db.consultationModel.findOne({"_id":id},function(err,consultation) {

       if(err) callback(err,null);
       else {

           consultation.update({$pull : {"medecin":id_medecin}});

       }

    });
}



module.exports = new consultationDAO();