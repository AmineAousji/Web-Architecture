let express = require('express');
let router = express.Router();

var reservationController = require("../controllers/reservation");
router.get('/', reservationController.showForm);
router.get('/passengers', reservationController.createReservation);
router.get('/calculer', reservationController.calculerPrix);
router.post("/annuler", reservationController.annuler)

var passengerController = require("../controllers/passenger");
router.get('/addcoordinates', passengerController.addCoordinates);


router.post("/notification", passengerController.notification);

module.exports = router;