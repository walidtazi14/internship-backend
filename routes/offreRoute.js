var express = require("express");

var router = express.Router();

var offreDAO = require("../DAO/offreDAO");
var auth = require("../routes/auth");

router.post("/add",auth,function(req,res) {
   var data = {
       id_entreprise:req.body.id_entreprise,
       nom:req.body.nom,
       ville :req.body.ville,
       dateDebut : req.body.dateDebut,
       dateFin : req.body.dateFin,
       specialite : req.body.specialite,
       description : req.body.description,
       nbrPersonne :req.body.nbrPersonne,
       remuneration : req.body.remuneration,
       niveau : req.body.niveau,
       diplome :req.body.diplome
   }
   

    offreDAO.addOffre(data,function(err,offre) {

        if(err) res.send(err);
        else res.send(offre);


    });


});


router.get("/list",auth,function(req,res) {

    offreDAO.findAll(function(err,lsoffre) {

        if(err) res.send(err);
        else res.send(lsoffre);

    } )

});
router.get("/count", function (req, res) {

    offreDAO.countst(function (err, lspt) {

        if (err) res.send(err);
        else res.send({"count":lspt});
    });

});
router.put("/update/:id",auth,function(req,res) {

    let id = req.params.id;
    var data = {

        id : id,
        nom:req.body.nom,
        ville:req.body.ville,
        dateDebut:req.body.dateDebut,
        dateFin:req.body.dateFin,
        specialite:req.body.specialite,
        description:req.body.description,
        nbrPersonne:req.body.nbrPersonne,
        remuneration:req.body.remuneration,
        niveau:req.body.niveau,
        diplome:req.body.diplome

    }

    offreDAO.updateOffre(data,function(err,offre) {

        if(err) res.send(err);
        else res.send(offre);

    });

});

router.post("/delete",auth,function(req,res) {

    var id = req.body.id;
    
    offreDAO.deleteOffre(id,function(err,offre){

        if(err) res.send(err);
        else res.send(offre);
    })


});


router.post("/offre/attacher",auth,function(req,res) {



    offreDAO.attacherOffre(req.body.id,req.body.id_offre,function(err,offre) {

        if(err) res.send(err);
        else res.send(offre);

    })
});

router.post("/offre/dettacher",auth,function(req,res) {

    offreDAO.dettacherOffre(req.body.id,req.body.id_offre,function(err,offre) {

        if(err) res.send(err);
        else res.send(offre);

    })


});
router.post("/byStagiaire",auth,function(req,res) {

    var id_entreprise =req.body.id_entreprise;

    offreDAO.findByEntreprise(id_entreprise,function(err,offre){
        if(err) res.send(err);
        else res.send(offre);
    });


});

router.post("/bySpecialite",auth,function(req,res) {

    var specialite =req.body.specialite;

    offreDAO.findBySpecialite(specialite,function(err,offre){

        if(err) res.send(err);
        else res.send(offre);
    });


});

router.get("/byid/:id",auth,function(req,res) {

    var id = req.params.id;

    offreDAO.findById(id,function(err,offre){

        if(err) res.send(err);
        else res.send(offre);
    });


});


router.post("/apply",function(req,res) {
   
    var data = {

        offre : req.body.offre,
        username:req.body.username
       }


    offreDAO.apply(data,function(err,offre){

        if(err) res.send(err);
        else res.send(offre);
    })


});



module.exports = router;