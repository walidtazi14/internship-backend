var express = require("express");

var router = express.Router();

var stagiaireDAO = require("../DAO/stagiaireDAO");

router.post("/add", function (req,res) {

    var data = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        cin:req.body.cin,
        email: req.body.email,
        age: req.body.age,
        dateNaissance: req.body.dateNaissance,
        lieuNaissance:req.body.lieuNaissance,
        specialite: req.body.specialite,
        diplome: req.body.diplome,
        tele:req.body.tele,
        email:req.body.email
    }

    
    stagiaireDAO.addStagiaire(data, function (err, pt) {


        if (err) res.send(err);
        else res.send(pt);

    });


});


router.get("/list", function (req, res) {

                stagiaireDAO.findAll(function (err, lspt) {

                    if (err) res.send(err);
                    else res.send(lspt);
                });

});

router.put("/update/:id", function (req, res) {

    let id = req.params.id;
    var data = {

        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        age: req.body.age,
        datenaissance: req.body.datenaissance,
        id : id
    }

    stagiaireDAO.updateStagiaire(data, function (err, stagiaire) {

        if (err) res.send(err);
        else res.send(stagiaire);

    });

});

router.delete("/delete", function(req, res) {

    var id = req.body.id;

    stagiaireDAO.deleteStagiaire(id, function (err) {

        if (err)  res.send(err);
        else res.send("Deteted succesfully !");

    });

});


router.post("/byspecialite", function (req, res) {

    var specialite = req.body.specialite;

    stagiaireDAO.findBySpecialite(specialite, function (err, stagiaire) {

        if (err) res.send(err);
        else res.send(stagiaire);

    }); 

});

router.post("/byid", function (req, res) {

    var id = req.body.id;

    stagiaireDAO.findById(id, function (err, stagiaire) {
        if (err) res.send(err);
        else res.send(stagiaire);
    });

});


module.exports = router;