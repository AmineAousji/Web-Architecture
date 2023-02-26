let Passenger = require("../models/passenger.js");
const Reservation = require("../models/reservation.js");

exports.addCoordinates = (req, res) => {
    let name = req.query.name;
    let age = req.query.age;

    passenger = new Passenger(name, age)
    reservations = req.session.reser;

    console.log(reservations.assurance);

    res.render("confirmation.ejs", {passenger, nbrPlaces, reservations: reservations});

}

exports.notification = function (request, response ){
    response.render("notification.ejs", { title: "Notification" })
}