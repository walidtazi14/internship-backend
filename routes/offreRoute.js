var express = require("express");

var router = express.Router();

var offreDAO = require("../DAO/offreDAO");


router.post("/add",function(req,res) {

   var data = {
       "id_entreprise":req.body.id_entreprise,
       "nom":req.body.nom,
       "dateDebut" : req.body.dateDebut,
       "dateFin" : req.body.dateFin.dateDebut,
       "specialite" : req.body.specialite
   }

    offreDAO.addConsultation(data,function(err,offre) {

        if(err) res.send(err);
        else res.send(offre)


    })


});


router.get("/list",function(req,res) {

    offreDAO.findAll(function(err,lsoffre) {

        if(err) res.send(err);
        else res.send(lsoffre);

    } )

});

router.post("/update",function(req,res) {



});

router.post("/delete",function(req,res) {


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




router.post("/bySpecialite",function(req,res) {


});


module.exports = router;