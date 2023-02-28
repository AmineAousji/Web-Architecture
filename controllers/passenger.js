let Passenger = require("../models/passenger.js");
const Reservation = require("../models/reservation.js");

exports.addCoordinates = (req, res) => {
    
    let name = req.query.name;
    let age = req.query.age;
    let liste_passenger =[];
    reservations = req.session.reser;
    for (let i = 0; i < reservations.nbrPlaces; i++){
        passenger = new Passenger(name[i], age[i]);
        liste_passenger.push(passenger);
        
    }
    
    reservation1 = new Reservation(reservations.destination,reservations.nbrPlaces, reservations.assurance,liste_passenger)
    console.log("reservation1",reservation1);
    console.log("liste de passager",liste_passenger[0]);

    res.render("confirmation.ejs", {liste_passenger, nbrPlaces, reservations: reservations, reservation1});

}

exports.notification = function (request, response ){
    response.render("notification.ejs", { title: "Notification" })
}