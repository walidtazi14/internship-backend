var express = require("express");

var router = express.Router();

var offreDAO = require("../DAO/offreDAO");


router.post("/add",function(req,res) {

   var data = {
       id_entreprise:req.body.id_entreprise,
       nom:req.body.nom,
       dateDebut : req.body.dateDebut,
       dateFin : req.body.dateFin,
       specialite : req.body.specialite
   }
   console.log(data);

    offreDAO.addOffre(data,function(err,offre) {

        if(err) res.send(err);
        else res.send(offre);


    });


});


router.get("/list",function(req,res) {

    offreDAO.findAll(function(err,lsoffre) {

        if(err) res.send(err);
        else res.send(lsoffre);

    } )

});

router.put("/update/:id",function(req,res) {

    let id = req.params.id;

    var data = {

        id : id,
        nom:req.body.nom,
        dateDebut:req.body.dateDebut,
        dateFin:req.body.dateFin,
        specialite:req.body.specialite

    }

    offreDAO.updateOffre(data,function(err,offre) {

        if(err) res.send(err);
        else res.send(offre);

    });

});

router.post("/delete",function(req,res) {

    var id_entreprise = req.body.id_entreprise;
    
    offreDAO.deleteOffre(id_entreprise,function(req,res){

        if(err) res.send(err);
        else res.send("Deteted succesfully !");
    })


});


router.post("/offre/attacher",function(req,res) {



    offreDAO.attacherOffre(req.body.id,req.body.id_offre,function(err,offre) {

        if(err) res.send(err);
        else res.send(offre);

    })

});

router.post("/offre/dettacher",function(req,res) {

    offreDAO.dettacherOffre(req.body.id,req.body.id_offre,function(err,offre) {

        if(err) res.send(err);
        else res.send(offre);

    })


});




router.post("/byStagiaire",function(req,res) {

    var id_entreprise =req.body.id_entreprise;

    offreDAO.findByEntreprise(id_entreprise,function(err,offre){

        if(err) res.send(err);
        else res.send(offre);
    });


});

router.post("/bySpecialite",function(req,res) {

    var specialite =req.body.specialite;

    offreDAO.findBySpecialite(specialite,function(err,offre){

        if(err) res.send(err);
        else res.send(offre);
    });


});


module.exports = router;