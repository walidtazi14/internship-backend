var express = require("express");
var router = express.Router();
var demandeDAO = require("../DAO/demandeDAO");

router.post("/add",function(req,res) {

    var data = {
        id_stagiaire:req.body.id_stagiaire,
        nom_demaine:req.body.nom,
        dateDebut:req.body.dateDebut,
        dateFin:req.body.dateFin,
        specialite:req.body.specialite,
        description:req.body.description
    }

    demandeDAO.addDemande(data,function(err,demande) {
        if(err) res.send(err);
        else res.send(demande);
    });

});




router.get("/list",function(req,res) {

    demandeDAO.findAll(function(err,lsdemande) {

        if(err) res.send(err);
        else res.send(lsdemande);

    });

});

router.post("/update",function(req,res) {

    var data = {

        id_stagiaire : req.body.id_stagiaire,
        nom:req.body.nom,
        nom_demaine:req.body.nom,
        dateDebut:req.body.dateDebut,
        dateFin:req.body.dateFin,
        specialite:req.body.specialite,
        description:req.body.description

    }

    demandeDAO.updateDemande(data,function(err,demande) {

        if(err) res.send(err);
        else res.send(demande);

    });

});

router.post("/delete",function(req,res) {

    var id = req.body.id;

    demandeDAO.deleteDemande(id,function(err) {

        if(err) res.send(err);
        else res.send("OK");

    });

});




router.post("/byspecialite",function(req,res) {

    var specialite = req.body.specialite;

    demandeDAO.findById(id,function(err,demande) {

        if(err) res.send(err);
        else res.send(demande);

    });

});


module.exports = router;

