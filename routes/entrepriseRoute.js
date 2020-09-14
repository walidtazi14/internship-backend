var express = require("express");

var router = express.Router();

var entrepriseDAO = require("../DAO/entrepriseDAO");


router.post("/add",function(req,res) {

    var data = {
        nom:req.body.nom,
        ville : req.body.ville,
        specialite : req.body.specialite,
        ville : req.body.ville,
        tele:req.body.tele,
        email:req.body.email

    }

    entrepriseDAO.addEntreprise(data,function(err,entreprise) {

        if(err) res.send(err);
        else res.send(entreprise);

    });

});


router.get("/list",function(req,res) {

    entrepriseDAO.findAll(function(err,lsentreprise) {

        if(err) res.send(err);
        else res.send(lsentreprise);

    });

});

router.post("/update",function(req,res) {

    var data = {

        nom:req.body.nom,
        ville : req.body.ville,
        specialite : req.body.specialite,
        ville : req.body.ville,
        tele:req.body.tele,
        email:req.body.email

    }

    entrepriseDAO.updateEntreprise(data,function(err,entreprise) {
        
        if(err) res.send(err);
        else res.send(entreprise);

    });

});

router.post("/delete",function(req,res) {

    var cin = req.body.cin;

    entrepriseDAO.deleteEntreprise(id,function(err) {

        if(err) res.send(err);
        else res.send("OK");
    
    });

});




router.post("/bySpecialite",function(req,res) {

    var specialite = req.body.specialite;

    entrepriseDAO.findBySpecialite(specialite,function(err,entreprise) {

    if(err) res.send(err);
        else res.send(entreprise);

    });

});


module.exports = router;
