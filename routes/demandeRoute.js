var express = require("express");
var router = express.Router();
var demandeDAO = require("../DAO/demandeDAO");
var auth = require("../routes/auth");

router.post("/add",auth,function(req,res) {

    var data = {
        id_stagiaire:req.body.id_stagiaire,
        nom:req.body.nom,
        ville:req.body.ville,
        dateDebut:req.body.dateDebut,
        dateFin:req.body.dateFin,
        specialite:req.body.specialite,
        description:req.body.description,
        nbrPersonne:req.body.nbrPersonne,
        remuneration:req.body.remuneration,
        niveau:req.body.niveau,
        specialite:req.body.specialite
        
    }

 

    demandeDAO.addDemande(data,function(err,demande) {
        if(err) res.send(err);
        else res.send(demande);
    });

});




router.get("/list",auth,function(req,res) {

    demandeDAO.findAll(function(err,lsdemande) {

        if(err) res.send(err);
        else res.send(lsdemande);

    });

});


router.put("/update/:id",auth,function(req,res) {
    let id = req.params.id;

    var data = {

        id: id,
        nom:req.body.nom,
        dateDebut:req.body.dateDebut,
        dateFin:req.body.dateFin,
        specialite:req.body.specialite,
        description:req.body.description,
        nbrPersonne:req.body.nbrPersonne,
        remuneration:req.body.remuneration,
        niveau:req.body.niveau,
        diplome:req.body.diplome

    }

    demandeDAO.updateDemande(data,function(err,demande) {

        if(err) res.send(err);
        else res.send(demande);

    });

});

router.post("/delete",auth,function(req,res) {

    var id = req.body.id;

    demandeDAO.deleteDemande(id,function(err) {

        if(err) res.send(err);
        else res.send("Deteted succesfully !");

    });

});


router.post("/byId",auth,function(req,res) {

    var id = req.body.id;

    demandeDAO.findById(demande,function(err,demande) {

        if(err) res.send(err);
        else res.send(demande);

    });

});

router.post("/byspecialite",auth,function(req,res) {

    var specialite = req.body.specialite;

    demandeDAO.findBySpecialite(specialite,function(err,demande) {

        if(err) res.send(err);
        else res.send(demande);

    });

});

router.post("/ByStagiaire",auth,function(req,res) {

    var id_stagiaire = req.body.id_stagiaire;


    demandeDAO.findByStagiaire(id_stagiaire,function(err,demande) {

        if(err) res.send(err);
        else res.send(demande);

    });

});

module.exports = router;

