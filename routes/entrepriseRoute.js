var express = require("express");

var router = express.Router();

var entrepriseDAO = require("../DAO/entrepriseDAO");

var auth = require("../routes/auth");


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


router.get("/list",auth,function(req,res) {

    entrepriseDAO.findAll(function(err,lsentreprise) {

        if(err) res.send(err);
        else res.send(lsentreprise);

    });

});
router.get("/count", function (req, res) {

    entrepriseDAO.countst(function (err, lspt) {

        if (err) res.send(err);
        else res.send({"count":lspt});
    });

});

router.put("/update/:id",auth,function(req,res) {

    let id = req.params.id;

    var data = {
        id :id,
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

router.post("/delete",auth,function(req,res) {

    var cin = req.body.cin;

    entrepriseDAO.deleteEntreprise(id,function(err) {

        if(err) res.send(err);
        else res.send("Deteted succesfully !");
    
    });

});

router.post("/byid",auth, function (req, res) {

    var id = req.body.id;

    entrepriseDAO.findById(id, function (err, entreprise) {
        if (err) res.send(err);
        else res.send(entreprise);
    });

});


router.post("/bySpecialite",auth,function(req,res) {

    var specialite = req.body.specialite;

    entrepriseDAO.findBySpecialite(specialite,function(err,entreprise) {

    if(err) res.send(err);
        else res.send(entreprise);

    });

});


module.exports = router;
