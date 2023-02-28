class Reservation{
    constructor(destination, nbrPlaces, assurance,passenger){
        this.destination = destination;
        this.nbrPlaces = nbrPlaces;
        this.assurance = assurance;
        this.passenger = passenger;
        
    }
    
    Prix (){
        if (this.assurance == "on"){
            return 20 + this.nbrPlaces * 45;
        }
        else{
            return this.nbrPlaces * 45;
        };
    }
    
};

module.exports = Reservation;