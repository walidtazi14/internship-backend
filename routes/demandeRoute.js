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

router.put("/update/:id",function(req,res) {
    let id = req.params.id;

    var data = {

        id: id,
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
        else res.send("Deteted succesfully !");

    });

});


router.post("/byId",function(req,res) {

    var id = req.body.id;

    demandeDAO.findById(demande,function(err,demande) {

        if(err) res.send(err);
        else res.send(demande);

    });

});

router.post("/byspecialite",function(req,res) {

    var specialite = req.body.specialite;

    demandeDAO.findBySpecialite(specialite,function(err,demande) {

        if(err) res.send(err);
        else res.send(demande);

    });

});

router.post("/ByStagiaire",function(req,res) {

    var id_stagiaire = req.body.id_stagiaire;


    demandeDAO.findByStagiaire(id_stagiaire,function(err,demande) {

        if(err) res.send(err);
        else res.send(demande);

    });

});

module.exports = router;

