const Reservation = require("../models/reservation");
let reservations;

exports.showForm = function (req, res){
    req.session.reser = [];
    prix = 0;
    res.render('reservation.ejs', {reservation: req.session.reser, prixTot: undefined});
};

exports.createReservation = function(req, res){

    destination= req.query.destination;
    nbrPlaces = req.query.nbrPlace;
    if (req.query.assurance == undefined){
        assurance = "reservation non assuré";
    }
    else{
        assurance = "reservation assuré";
    }
    
    reservation = new Reservation(destination, nbrPlaces, assurance,[]);
    prix = reservation.Prix();
    reservation.prix = reservation.Prix()
    req.session.reser = reservation;
    console.log(req.session.reser);
    if(req.query.btnReservation){
        console.log("test clicked");
    }
   
    res.render("passengers.ejs", {reservation: req.session.reser});  

};

exports.calculerPrix = (req, res) => {
    console.log("entree");
    nbrPlaces = req.query.nbrPlace;
    assurance = req.query.assurance;
    let prixTot = 0;
    if (assurance == undefined){
        prixTot = 45 * nbrPlaces;
    }
    else{
        prixTot = 45 * nbrPlaces + 20;
    }
    console.log(prixTot, nbrPlaces);
    res.render('reservation.ejs', {prixTot, nbrPlaces});
};

exports.annuler= (request, response) => { 
    request.session.destroy();
    response.redirect("/");
}
    

    
    

